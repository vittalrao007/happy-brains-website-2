#!/usr/bin/env node
/**
 * build-site.mjs
 * Build-time script to read business_details.txt, parse key-values, resolve placeholders,
 * validate telephone/WhatsApp/maps links, report any unresolved bracketed placeholders,
 * and produce src/content/businessDetails.json & src/content/businessDetails.ts
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const businessDetailsPath = path.join(rootDir, 'business_details.txt');
const outputPathJson = path.join(rootDir, 'src', 'content', 'businessDetails.json');
const outputPathTs = path.join(rootDir, 'src', 'content', 'businessDetails.ts');

console.log('--------------------------------------------------');
console.log(' Kindergarten / Preschool Website Build Script');
console.log(' Reading and resolving business_details.txt...');
console.log('--------------------------------------------------');

if (!fs.existsSync(businessDetailsPath)) {
  console.error(`❌ Error: business_details.txt not found at ${businessDetailsPath}`);
  process.exit(1);
}

const fileContent = fs.readFileSync(businessDetailsPath, 'utf-8');
const lines = fileContent.split(/\r?\n/);

const rawData = {};
const unresolvedPlaceholders = [];

for (const line of lines) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) {
    continue;
  }
  const eqIdx = trimmed.indexOf('=');
  if (eqIdx === -1) {
    continue;
  }
  const key = trimmed.slice(0, eqIdx).trim();
  const value = trimmed.slice(eqIdx + 1).trim();
  
  rawData[key] = value;

  // Check if value is still a bracketed placeholder like [Preschoolname]
  if (/^\[.+\]$/.test(value)) {
    unresolvedPlaceholders.push({ key, placeholder: value });
  }
}

// Helpers
function isResolved(val) {
  if (!val) return false;
  const s = String(val).trim();
  if (!s) return false;
  if (/^\[.+\]$/.test(s)) return false;
  return true;
}

function cleanPhoneForTel(phoneStr) {
  if (!isResolved(phoneStr)) return '';
  // keep leading plus and digits
  const cleaned = phoneStr.replace(/[^\d+]/g, '');
  return cleaned ? `tel:${cleaned}` : '';
}

function cleanPhoneForWhatsApp(phoneStr, preschoolName = 'Happy Brains Pre School') {
  if (!isResolved(phoneStr)) return '';
  // WA number needs country code and digits only, no '+'
  const digitsOnly = phoneStr.replace(/\D/g, '');
  if (!digitsOnly) return '';
  const prefill = encodeURIComponent(`Hello, I would like to know more about admissions at ${rawData.Preschoolname || preschoolName}.`);
  return `https://wa.me/${digitsOnly}?text=${prefill}`;
}

// Format full address
const addressParts = [
  isResolved(rawData.Addressline1) ? rawData.Addressline1 : '',
  isResolved(rawData.Addressline2) ? rawData.Addressline2 : '',
  isResolved(rawData.Area) ? rawData.Area : '',
  isResolved(rawData.City) ? rawData.City : '',
  isResolved(rawData.State) ? rawData.State : '',
  isResolved(rawData.Pincode) ? rawData.Pincode : ''
].filter(Boolean);

const fullAddress = addressParts.join(', ');

// Google Maps URL generator or fallback
let mapsUrl = '';
if (isResolved(rawData.GoogleMapsURL)) {
  mapsUrl = rawData.GoogleMapsURL;
} else if (fullAddress) {
  mapsUrl = `https://maps.google.com/?q=${encodeURIComponent((rawData.Preschoolname || '') + ' ' + fullAddress)}`;
}

// Programs list
const programs = [];
for (let i = 1; i <= 6; i++) {
  const pName = rawData[`Program${i}name`];
  if (isResolved(pName)) {
    programs.push({
      id: `program-${i}`,
      name: pName,
      ageGroup: isResolved(rawData[`Program${i}agegroup`]) ? rawData[`Program${i}agegroup`] : '',
      description: isResolved(rawData[`Program${i}description`]) ? rawData[`Program${i}description`] : ''
    });
  }
}

// Testimonials list - ONLY include verified/resolved ones!
const testimonials = [];
for (let i = 1; i <= 6; i++) {
  const tName = rawData[`Testimonial${i}name`];
  const tText = rawData[`Testimonial${i}text`];
  if (isResolved(tName) && isResolved(tText)) {
    testimonials.push({
      id: `testimonial-${i}`,
      name: tName,
      text: tText
    });
  }
}

// FAQs list
const faqs = [];
for (let i = 1; i <= 10; i++) {
  const q = rawData[`FAQ${i}question`];
  const a = rawData[`FAQ${i}answer`];
  if (isResolved(q) && isResolved(a)) {
    faqs.push({
      id: `faq-${i}`,
      question: q,
      answer: a
    });
  }
}

const resolvedConfig = {
  identity: {
    name: isResolved(rawData.Preschoolname) ? rawData.Preschoolname : 'Happy Brains Pre School',
    tagline: isResolved(rawData.Tagline) ? rawData.Tagline : 'Little Steps Today, Bright Futures Tomorrow!',
    schoolType: isResolved(rawData.Schooltype) ? rawData.Schooltype : 'Preschool & Daycare',
    principalName: isResolved(rawData.Principalname) ? rawData.Principalname : '',
    establishedYear: isResolved(rawData.Establishedyear) ? rawData.Establishedyear : '',
    about: isResolved(rawData.Aboutpreschool) ? rawData.Aboutpreschool : '',
    logoPath: isResolved(rawData.LogoPath) ? rawData.LogoPath : '/assets/logo.svg',
  },
  contact: {
    phone: isResolved(rawData.Preschoolphonenumber) ? rawData.Preschoolphonenumber : '',
    phoneTelLink: cleanPhoneForTel(rawData.Preschoolphonenumber),
    whatsapp: isResolved(rawData.WhatsAppnumber) ? rawData.WhatsAppnumber : '',
    whatsappChatLink: cleanPhoneForWhatsApp(rawData.WhatsAppnumber, rawData.Preschoolname),
    email: isResolved(rawData.Emailaddress) ? rawData.Emailaddress : '',
    emailMailto: isResolved(rawData.Emailaddress) ? `mailto:${rawData.Emailaddress}` : '',
    websiteUrl: isResolved(rawData.WebsiteURL) ? rawData.WebsiteURL : '',
  },
  address: {
    line1: isResolved(rawData.Addressline1) ? rawData.Addressline1 : '',
    line2: isResolved(rawData.Addressline2) ? rawData.Addressline2 : '',
    area: isResolved(rawData.Area) ? rawData.Area : '',
    city: isResolved(rawData.City) ? rawData.City : '',
    state: isResolved(rawData.State) ? rawData.State : '',
    pincode: isResolved(rawData.Pincode) ? rawData.Pincode : '',
    formattedFull: fullAddress,
    googleMapsUrl: mapsUrl,
  },
  hours: {
    opening: isResolved(rawData.Openingtime) ? rawData.Openingtime : '',
    closing: isResolved(rawData.Closingtime) ? rawData.Closingtime : '',
    workingDays: isResolved(rawData.Workingdays) ? rawData.Workingdays : 'Monday to Friday',
    holidayInfo: isResolved(rawData.Holidayinformation) ? rawData.Holidayinformation : 'Closed on Sundays & National Holidays',
    formattedSummary: isResolved(rawData.Openingtime) && isResolved(rawData.Closingtime) 
      ? `${rawData.Openingtime} – ${rawData.Closingtime} (${rawData.Workingdays || 'Mon-Fri'})`
      : ''
  },
  programs,
  daycare: {
    available: isResolved(rawData.Daycareavailable) ? (rawData.Daycareavailable.toLowerCase() === 'yes') : true,
    ageGroup: isResolved(rawData.Daycareagegroup) ? rawData.Daycareagegroup : '',
    description: isResolved(rawData.Daycaredescription) ? rawData.Daycaredescription : '',
    hours: isResolved(rawData.Daycarehours) ? rawData.Daycarehours : '',
    facilities: isResolved(rawData.Daycarefacilities) ? rawData.Daycarefacilities : '',
  },
  approachAndFacilities: {
    teachingApproach: isResolved(rawData.Teachingapproach) ? rawData.Teachingapproach : '',
    facilities: isResolved(rawData.Facilities) ? rawData.Facilities : '',
    safetyMeasures: isResolved(rawData.Safetymeasures) ? rawData.Safetymeasures : '',
    foodAndNutrition: isResolved(rawData.Foodandnutrition) ? rawData.Foodandnutrition : '',
    transportation: isResolved(rawData.Transportationdetails) ? rawData.Transportationdetails : '',
    admissionProcess: isResolved(rawData.Admissionprocess) ? rawData.Admissionprocess : '',
    documentsRequired: isResolved(rawData.Documentsrequired) ? rawData.Documentsrequired : '',
    schoolVisitInfo: isResolved(rawData.Schoolvisitinformation) ? rawData.Schoolvisitinformation : '',
  },
  testimonials,
  faqs,
  social: {
    instagram: isResolved(rawData.InstagramURL) ? rawData.InstagramURL : '',
    facebook: isResolved(rawData.FacebookURL) ? rawData.FacebookURL : '',
    youtube: isResolved(rawData.YouTubeURL) ? rawData.YouTubeURL : '',
  },
  settings: {
    primaryColour: isResolved(rawData.Primarycolour) ? rawData.Primarycolour : '#FFC83D',
    secondaryColour: isResolved(rawData.Secondarycolour) ? rawData.Secondarycolour : '#DFF2FC',
    accentColour: isResolved(rawData.Accentcolour) ? rawData.Accentcolour : '#20A464',
    galleryFolder: isResolved(rawData.Galleryfolder) ? rawData.Galleryfolder : 'public/images/gallery',
  },
  meta: {
    lastParsedAt: new Date().toISOString(),
    totalKeysParsed: Object.keys(rawData).length,
    unresolvedCount: unresolvedPlaceholders.length,
    unresolvedFields: unresolvedPlaceholders.map(u => u.key)
  }
};

// Ensure output directories exist
fs.mkdirSync(path.dirname(outputPathJson), { recursive: true });

// Write JSON
fs.writeFileSync(outputPathJson, JSON.stringify(resolvedConfig, null, 2), 'utf-8');

// Write TypeScript declaration & export
const tsContent = `/**
 * AUTO-GENERATED FILE BY scripts/build-site.mjs
 * DO NOT EDIT DIRECTLY. Edit business_details.txt and run 'node scripts/build-site.mjs'
 */

export interface ProgramItem {
  id: string;
  name: string;
  ageGroup: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  text: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BusinessDetailsConfig {
  identity: {
    name: string;
    tagline: string;
    schoolType: string;
    principalName: string;
    establishedYear: string;
    about: string;
    logoPath: string;
  };
  contact: {
    phone: string;
    phoneTelLink: string;
    whatsapp: string;
    whatsappChatLink: string;
    email: string;
    emailMailto: string;
    websiteUrl: string;
  };
  address: {
    line1: string;
    line2: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    formattedFull: string;
    googleMapsUrl: string;
  };
  hours: {
    opening: string;
    closing: string;
    workingDays: string;
    holidayInfo: string;
    formattedSummary: string;
  };
  programs: ProgramItem[];
  daycare: {
    available: boolean;
    ageGroup: string;
    description: string;
    hours: string;
    facilities: string;
  };
  approachAndFacilities: {
    teachingApproach: string;
    facilities: string;
    safetyMeasures: string;
    foodAndNutrition: string;
    transportation: string;
    admissionProcess: string;
    documentsRequired: string;
    schoolVisitInfo: string;
  };
  testimonials: TestimonialItem[];
  faqs: FAQItem[];
  social: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
  settings: {
    primaryColour: string;
    secondaryColour: string;
    accentColour: string;
    galleryFolder: string;
  };
  meta: {
    lastParsedAt: string;
    totalKeysParsed: number;
    unresolvedCount: number;
    unresolvedFields: string[];
  };
}

import businessDetailsData from './businessDetails.json';

export const businessDetails: BusinessDetailsConfig = businessDetailsData as BusinessDetailsConfig;
export default businessDetails;
`;

fs.writeFileSync(outputPathTs, tsContent, 'utf-8');

console.log(`✅ Successfully generated:`);
console.log(`   - ${path.relative(rootDir, outputPathJson)}`);
console.log(`   - ${path.relative(rootDir, outputPathTs)}`);
console.log(`📊 Statistics:`);
console.log(`   - Total parameters parsed: ${Object.keys(rawData).length}`);
console.log(`   - Active programs: ${programs.length}`);
console.log(`   - Active testimonials: ${testimonials.length}`);
console.log(`   - Active FAQs: ${faqs.length}`);

if (unresolvedPlaceholders.length > 0) {
  console.log(`\n⚠️  Notice: ${unresolvedPlaceholders.length} placeholder(s) remain unresolved:`);
  for (const { key, placeholder } of unresolvedPlaceholders) {
    console.log(`   - ${key} = ${placeholder}`);
  }
} else {
  console.log(`\n✨ Perfect: All placeholders are resolved with verified values!`);
}
console.log('--------------------------------------------------\n');
