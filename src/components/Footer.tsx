import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react';
import { type PageId } from '../types';
import { useBusinessDetails } from '../context/BusinessDetailsContext';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { details } = useBusinessDetails();
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#172A3A] text-white pt-14 pb-24 sm:pb-14 border-t border-[#172A3A]/20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Identity & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#38A3A5] flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="14" r="5" fill="#FFC83D" />
                  <path d="M16 4V2M16 26V24M6 14H4M28 14H26" stroke="#FFC83D" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M9 22C11.5 19.5 14 20 16 22C18 20 20.5 19.5 23 22" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-extrabold text-white">{details.identity.name}</div>
                <div className="text-[10px] font-bold text-[#38A3A5] tracking-[0.2em] uppercase">{details.identity.schoolType}</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {details.identity.about ||
                'A caring space where little minds learn, explore, play, and grow — preschool programs and dependable daycare support for your family.'}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white/90">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#FFC83D] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#FFC83D] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('programs')} className="hover:text-[#FFC83D] transition-colors">
                  Programs
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('daycare')} className="hover:text-[#FFC83D] transition-colors">
                  Daycare
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('facilities')} className="hover:text-[#FFC83D] transition-colors">
                  Facilities
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-[#FFC83D] transition-colors">
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Programs & Information */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white/90">
              Preschool & Daycare
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {details.programs.map((p) => (
                <li key={p.id}>
                  <button onClick={() => handleNav('programs')} className="hover:text-[#FFC83D] transition-colors">
                    {p.name}
                  </button>
                </li>
              ))}
              <li>
                <button onClick={() => handleNav('daycare')} className="hover:text-[#FFC83D] transition-colors">
                  Daycare
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faqs')} className="hover:text-[#FFC83D] transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white/90">
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              {details.contact.phone ? (
                <a
                  href={details.contact.phoneTelLink || '#'}
                  className="flex items-start gap-2.5 hover:text-[#FFC83D] transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[#FFC83D] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">{details.contact.phone}</div>
                    <div className="text-xs text-slate-400">Tap to call the Principal</div>
                  </div>
                </a>
              ) : null}

              {details.contact.whatsapp ? (
                <a
                  href={details.contact.whatsappChatLink || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 hover:text-[#20A464] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#20A464] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">WhatsApp the Principal</div>
                    <div className="text-xs text-slate-400">Opens a chat with pre-filled message</div>
                  </div>
                </a>
              ) : null}

              {details.address.formattedFull ? (
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span className="text-xs leading-relaxed">{details.address.formattedFull}</span>
                </div>
              ) : null}

              {details.hours.formattedSummary ? (
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span className="text-xs leading-relaxed">{details.hours.formattedSummary}</span>
                </div>
              ) : null}

              {details.contact.email ? (
                <a
                  href={details.contact.emailMailto || '#'}
                  className="flex items-start gap-2.5 hover:text-[#FFC83D] transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span className="text-xs break-all">{details.contact.email}</span>
                </a>
              ) : null}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {currentYear} {details.identity.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <button
              onClick={() => handleNav('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNav('admissions')}
              className="hover:text-white transition-colors"
            >
              Admissions
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
