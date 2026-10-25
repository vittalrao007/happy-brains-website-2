import React, { createContext, useContext, useState, useEffect } from 'react';
import initialConfig, { type BusinessDetailsConfig } from '../content/businessDetails';

interface BusinessDetailsContextValue {
  details: BusinessDetailsConfig;
  updateDetail: (path: string, value: string) => void;
  resetToDefault: () => void;
  isModified: boolean;
  exportAsTxt: () => string;
}

const BusinessDetailsContext = createContext<BusinessDetailsContextValue | null>(null);

export const BusinessDetailsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [details, setDetails] = useState<BusinessDetailsConfig>(initialConfig);
  const [isModified, setIsModified] = useState(false);

  // Helper to update a field by key or nested path
  const updateDetail = (pathStr: string, value: string) => {
    setDetails((prev) => {
      const next = JSON.parse(JSON.stringify(prev)) as BusinessDetailsConfig;
      const keys = pathStr.split('.');
      let current: any = next;
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;

      // Recompute telephone and WhatsApp links if phone numbers change
      if (pathStr === 'contact.phone') {
        const cleaned = value.replace(/[^\d+]/g, '');
        next.contact.phoneTelLink = cleaned ? `tel:${cleaned}` : '';
      }
      if (pathStr === 'contact.whatsapp') {
        const digits = value.replace(/\D/g, '');
        const prefill = encodeURIComponent(`Hello, I would like to know more about admissions at ${next.identity.name}.`);
        next.contact.whatsappChatLink = digits ? `https://wa.me/${digits}?text=${prefill}` : '';
      }

      setIsModified(true);
      return next;
    });
  };

  const resetToDefault = () => {
    setDetails(initialConfig);
    setIsModified(false);
  };

  const exportAsTxt = (): string => {
    return `# PRESCHOOL IDENTITY
Preschoolname=${details.identity.name}
Tagline=${details.identity.tagline}
Schooltype=${details.identity.schoolType}
Principalname=${details.identity.principalName}
Establishedyear=${details.identity.establishedYear}
Aboutpreschool=${details.identity.about}
LogoPath=${details.identity.logoPath}

# CONTACT INFORMATION
Preschoolphonenumber=${details.contact.phone}
WhatsAppnumber=${details.contact.whatsapp}
Emailaddress=${details.contact.email}
WebsiteURL=${details.contact.websiteUrl}

# ADDRESS
Addressline1=${details.address.line1}
Addressline2=${details.address.line2}
Area=${details.address.area}
City=${details.address.city}
State=${details.address.state}
Pincode=${details.address.pincode}
GoogleMapsURL=${details.address.googleMapsUrl}

# OPERATING HOURS
Openingtime=${details.hours.opening}
Closingtime=${details.hours.closing}
Workingdays=${details.hours.workingDays}
Holidayinformation=${details.hours.holidayInfo}

# PROGRAMS
Program1name=${details.programs[0]?.name || ''}
Program1agegroup=${details.programs[0]?.ageGroup || ''}
Program1description=${details.programs[0]?.description || ''}

Program2name=${details.programs[1]?.name || ''}
Program2agegroup=${details.programs[1]?.ageGroup || ''}
Program2description=${details.programs[1]?.description || ''}

Program3name=${details.programs[2]?.name || ''}
Program3agegroup=${details.programs[2]?.ageGroup || ''}
Program3description=${details.programs[2]?.description || ''}

Program4name=${details.programs[3]?.name || ''}
Program4agegroup=${details.programs[3]?.ageGroup || ''}
Program4description=${details.programs[3]?.description || ''}

# DAYCARE
Daycareavailable=${details.daycare.available ? 'Yes' : 'No'}
Daycareagegroup=${details.daycare.ageGroup}
Daycaredescription=${details.daycare.description}
Daycarehours=${details.daycare.hours}
Daycarefacilities=${details.daycare.facilities}

# LEARNING AND FACILITIES
Teachingapproach=${details.approachAndFacilities.teachingApproach}
Facilities=${details.approachAndFacilities.facilities}
Safetymeasures=${details.approachAndFacilities.safetyMeasures}
Foodandnutrition=${details.approachAndFacilities.foodAndNutrition}
Transportationdetails=${details.approachAndFacilities.transportation}
Admissionprocess=${details.approachAndFacilities.admissionProcess}
Documentsrequired=${details.approachAndFacilities.documentsRequired}
Schoolvisitinformation=${details.approachAndFacilities.schoolVisitInfo}

# ADDITIONAL CONTENT
Testimonial1name=${details.testimonials[0]?.name || ''}
Testimonial1text=${details.testimonials[0]?.text || ''}
Testimonial2name=${details.testimonials[1]?.name || ''}
Testimonial2text=${details.testimonials[1]?.text || ''}
Testimonial3name=${details.testimonials[2]?.name || ''}
Testimonial3text=${details.testimonials[2]?.text || ''}

FAQ1question=${details.faqs[0]?.question || ''}
FAQ1answer=${details.faqs[0]?.answer || ''}
FAQ2question=${details.faqs[1]?.question || ''}
FAQ2answer=${details.faqs[1]?.answer || ''}
FAQ3question=${details.faqs[2]?.question || ''}
FAQ3answer=${details.faqs[2]?.answer || ''}
FAQ4question=${details.faqs[3]?.question || ''}
FAQ4answer=${details.faqs[3]?.answer || ''}

# SOCIAL MEDIA
InstagramURL=${details.social.instagram}
FacebookURL=${details.social.facebook}
YouTubeURL=${details.social.youtube}

# WEBSITE SETTINGS
Primarycolour=${details.settings.primaryColour}
Secondarycolour=${details.settings.secondaryColour}
Accentcolour=${details.settings.accentColour}
Galleryfolder=${details.settings.galleryFolder}
`;
  };

  return (
    <BusinessDetailsContext.Provider
      value={{
        details,
        updateDetail,
        resetToDefault,
        isModified,
        exportAsTxt,
      }}
    >
      {children}
    </BusinessDetailsContext.Provider>
  );
};

export const useBusinessDetails = () => {
  const context = useContext(BusinessDetailsContext);
  if (!context) {
    throw new Error('useBusinessDetails must be used within a BusinessDetailsProvider');
  }
  return context;
};
