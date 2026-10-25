/**
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
