import React from 'react';
import { Sun, Phone, MessageCircle, Navigation, MapPin, Clock, Mail, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { type PageId } from '../types';
import { useBusinessDetails } from '../context/BusinessDetailsContext';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const { details } = useBusinessDetails();

  return (
    <div className="space-y-12 sm:space-y-16 pb-12 pt-6 sm:pt-10">
      {/* 1. HERO SECTION (Screenshot Page 64) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-4">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C98D8] tracking-widest uppercase">
            <Sun className="w-3.5 h-3.5" />
            <span>CONTACT US</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172A3A] tracking-tight leading-tight">
            We'd love to hear from you
          </h1>
          <p className="text-sm sm:text-base text-[#172A3A]/85 leading-relaxed">
            Call, WhatsApp or visit — choosing a preschool is a big decision and a short conversation helps. We are happy to answer everything.
          </p>
        </div>
      </section>

      {/* 2. THREE PRIMARY CONTACT CARDS (Screenshots Page 64 - 66) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-4">
        {/* Yellow Phone Card */}
        {details.contact.phoneTelLink ? (
          <a
            href={details.contact.phoneTelLink}
            className="block bg-[#FFC83D] rounded-3xl p-6 sm:p-7 shadow-xs hover:brightness-95 active:scale-98 transition-all group"
          >
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-[#172A3A] mb-3">
              <Phone className="w-5 h-5 fill-[#172A3A]" />
            </div>
            <h2 className="text-base font-bold text-[#172A3A]">
              Call the Principal
            </h2>
            <div className="text-xl sm:text-2xl font-extrabold text-[#172A3A] mt-1 tracking-tight">
              {details.contact.phone || '[PRINCIPAL PHONE NUMBER]'}
            </div>
            <p className="text-xs text-[#172A3A]/75 font-semibold mt-1">
              Tap to open your phone’s dialer
            </p>
          </a>
        ) : (
          <div className="bg-[#FFC83D] rounded-3xl p-6 sm:p-7 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-[#172A3A] mb-3">
              <Phone className="w-5 h-5 fill-[#172A3A]" />
            </div>
            <h2 className="text-base font-bold text-[#172A3A]">
              Call the Principal
            </h2>
            <div className="text-xl sm:text-2xl font-extrabold text-[#172A3A] mt-1 tracking-tight">
              [PRINCIPAL PHONE NUMBER]
            </div>
            <p className="text-xs text-[#172A3A]/75 font-semibold mt-1">
              Phone number will be added once confirmed
            </p>
          </div>
        )}

        {/* Green WhatsApp Card */}
        {details.contact.whatsappChatLink ? (
          <a
            href={details.contact.whatsappChatLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#20A464] text-white rounded-3xl p-6 sm:p-7 shadow-xs hover:brightness-95 active:scale-98 transition-all group"
          >
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-3">
              <MessageCircle className="w-5 h-5 fill-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              WhatsApp the Principal
            </h2>
            <div className="text-sm font-bold text-white/95 mt-1">
              Start a chat
            </div>
            <p className="text-xs text-white/80 font-medium mt-1">
              Opens WhatsApp with a pre-filled message
            </p>
          </a>
        ) : null}

        {/* Sky Blue Directions Card */}
        {details.address.googleMapsUrl ? (
          <a
            href={details.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#DFF2FC] text-[#172A3A] rounded-3xl p-6 sm:p-7 shadow-xs hover:brightness-95 active:scale-98 transition-all group"
          >
            <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#2C98D8] mb-3">
              <Navigation className="w-5 h-5 fill-[#2C98D8]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#172A3A]">
              Get Directions
            </h2>
            <div className="text-sm font-bold text-[#2C98D8] mt-1">
              Open in Google Maps
            </div>
            <p className="text-xs text-[#687786] font-medium mt-1">
              Searches for the school’s location
            </p>
          </a>
        ) : null}
      </section>

      {/* 3. VISIT US & DETAILS (Screenshots Page 66 & 67) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-6">
        {/* Visit us card */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-[#FFEBE6] flex items-center justify-center text-[#FF6B6B]">
            <MapPin className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-extrabold text-[#172A3A]">Visit us</h3>
          <p className="text-sm text-[#172A3A]/90 font-medium leading-relaxed">
            {details.address.formattedFull || '[SCHOOL ADDRESS]'}
          </p>
          <p className="text-xs text-[#687786] leading-relaxed">
            {details.address.googleMapsUrl
              ? 'Visit during working hours or schedule an appointment to view the classrooms.'
              : '[GOOGLE MAPS LINK] — the map below will be connected once the school’s location link is confirmed.'}
          </p>

          {details.address.googleMapsUrl ? (
            <div className="pt-2">
              <a
                href={details.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-bold text-[#172A3A] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#FF6B6B]" />
                <span>Get Directions</span>
              </a>
            </div>
          ) : null}
        </div>

        {/* School Hours Table (Screenshot Page 67) */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-[#DDF5E8] flex items-center justify-center text-[#20A464]">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-extrabold text-[#172A3A]">School hours</h3>

          <div className="divide-y divide-slate-100 text-xs sm:text-sm">
            <div className="py-2.5 flex items-center justify-between">
              <span className="text-[#687786]">School timings</span>
              <span className="font-bold text-[#172A3A]">
                {details.hours.opening ? `${details.hours.opening} - 12:30 PM` : '[SCHOOL HOURS]'}
              </span>
            </div>
            <div className="py-2.5 flex items-center justify-between">
              <span className="text-[#687786]">Daycare timings</span>
              <span className="font-bold text-[#172A3A]">
                {details.daycare.hours || '[DAYCARE HOURS]'}
              </span>
            </div>
            <div className="py-2.5 flex items-center justify-between">
              <span className="text-[#687786]">Weekly holidays</span>
              <span className="font-bold text-[#172A3A]">
                {details.hours.holidayInfo || '[WEEKLY HOLIDAYS]'}
              </span>
            </div>
            <div className="py-2.5 flex items-center justify-between">
              <span className="text-[#687786]">Email</span>
              <span className="font-bold text-[#172A3A] break-all">
                {details.contact.email || '[SCHOOL EMAIL]'}
              </span>
            </div>
          </div>
        </div>

        {/* Map Notice / Embed Container (Screenshot Page 67) */}
        <div className="reference-notice-box p-6 text-center space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-[#DFF2FC] flex items-center justify-center text-[#2C98D8] mx-auto">
            <MapPin className="w-5 h-5" />
          </div>
          <p className="text-xs text-[#2C98D8] leading-relaxed max-w-sm mx-auto">
            {details.address.formattedFull
              ? `Located conveniently at ${details.address.formattedFull}. Directions can be accessed on Google Maps.`
              : 'Google Maps will appear here once the school’s verified address and map link are added. [GOOGLE MAPS LINK]'}
          </p>
          {details.address.googleMapsUrl && (
            <a
              href={details.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C98D8] hover:underline"
            >
              <span>Open Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* 4. HOW ADMISSION ENQUIRIES WORK (Screenshot Page 68) */}
        <div className="bg-[#172A3A] text-white rounded-3xl p-7 sm:p-8 space-y-4 shadow-sm">
          <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-[#FFC83D]">
            <Calendar className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-extrabold text-white">
            How admission enquiries work
          </h3>

          <ol className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-[#FFC83D]">1.</span>
              <span>Call or WhatsApp the Principal with your questions.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-[#FFC83D]">2.</span>
              <span>Discuss your child’s age and the right program.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-bold text-[#FFC83D]">3.</span>
              <span>
                Arrange a school visit and review fees and documents. [ADMISSION DETAILS]
              </span>
            </li>
          </ol>

          {details.contact.email ? (
            <div className="pt-2 flex items-start gap-2 text-xs text-slate-300">
              <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>
                Prefer to write? Email{' '}
                <a href={details.contact.emailMailto} className="text-[#FFC83D] underline">
                  {details.contact.email}
                </a>{' '}
                and we will get back to you.
              </span>
            </div>
          ) : null}

          {details.contact.whatsappChatLink ? (
            <div className="pt-2">
              <a
                href={details.contact.whatsappChatLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#20A464] text-white font-bold text-sm inline-flex items-center justify-center gap-2 hover:brightness-95 active:scale-98 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp the Principal</span>
              </a>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};
