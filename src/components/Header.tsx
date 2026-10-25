import React, { useState } from 'react';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';
import { NAV_ITEMS, type PageId } from '../types';
import { useBusinessDetails } from '../context/BusinessDetailsContext';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { details } = useBusinessDetails();

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FFF9F7]/95 backdrop-blur-md border-b border-[#172A3A]/5 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
          {/* Logo & Identity */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC83D] rounded-xl p-1 -ml-1 transition-transform active:scale-98"
            aria-label={`${details.identity.name} Home`}
          >
            {/* Sun & Book Icon Box */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#38A3A5] flex items-center justify-center shrink-0 shadow-sm relative overflow-hidden">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="14" r="5.5" fill="#FFC83D" />
                <path d="M16 4V2M16 26V24M6 14H4M28 14H26M8.9 6.9L7.5 5.5M24.5 22.5L23.1 21.1M8.9 21.1L7.5 22.5M24.5 6.9L23.1 8.3" stroke="#FFC83D" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M9 22C11.5 19.5 14 20 16 22C18 20 20.5 19.5 23 22" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold text-[#172A3A] tracking-tight leading-tight">
                {details.identity.name}
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-[#2C98D8] tracking-[0.2em] uppercase">
                {details.identity.schoolType}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-full transition-all ${
                    isActive
                      ? 'bg-[#DFF2FC] text-[#172A3A] font-bold shadow-xs'
                      : 'text-[#687786] hover:text-[#172A3A] hover:bg-[#172A3A]/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Phone Dial Button */}
            {details.contact.phoneTelLink ? (
              <a
                href={details.contact.phoneTelLink}
                className="w-11 h-11 rounded-full bg-[#FFC83D] text-[#172A3A] flex items-center justify-center shadow-sm hover:brightness-95 active:scale-95 transition-all"
                title={`Call ${details.identity.principalName || 'the Principal'}`}
                aria-label={`Call ${details.identity.principalName || 'the Principal'} at ${details.contact.phone}`}
              >
                <Phone className="w-5 h-5 fill-[#172A3A]" />
              </a>
            ) : null}

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-11 h-11 rounded-full bg-[#FAF3F0] text-[#172A3A] border border-[#172A3A]/10 flex items-center justify-center hover:bg-[#172A3A]/5 active:scale-95 transition-all"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (Faithfully recreates Screenshot Page 20) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#FFF9F7] animate-in fade-in duration-200">
          {/* Drawer Header */}
          <div className="px-4 py-4 flex items-center justify-between border-b border-[#172A3A]/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#38A3A5] flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="14" r="5" fill="#FFC83D" />
                  <path d="M16 4V2M16 26V24M6 14H4M28 14H26" stroke="#FFC83D" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M9 22C11.5 19.5 14 20 16 22C18 20 20.5 19.5 23 22" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="text-base font-extrabold text-[#172A3A]">{details.identity.name}</div>
                <div className="text-[10px] font-bold text-[#2C98D8] tracking-[0.2em] uppercase">{details.identity.schoolType}</div>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white border border-[#172A3A]/10 flex items-center justify-center text-[#172A3A] active:scale-95 transition-transform"
              aria-label="Close Navigation Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Menu Items */}
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-2">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-5 py-3.5 rounded-2xl text-base font-bold transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-[#DFF2FC] text-[#172A3A]'
                      : 'text-[#172A3A] hover:bg-[#172A3A]/5'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Drawer Bottom Action Buttons (Matching Screenshot Page 20) */}
          <div className="p-5 border-t border-[#172A3A]/5 space-y-3 bg-[#FFF4F1]/60">
            {details.contact.phoneTelLink ? (
              <a
                href={details.contact.phoneTelLink}
                className="w-full h-13 rounded-full bg-[#FFC83D] text-[#172A3A] font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-sm active:scale-98 transition-transform"
              >
                <Phone className="w-4 h-4 fill-[#172A3A]" />
                <span>Call the Principal</span>
              </a>
            ) : null}

            {details.contact.whatsappChatLink ? (
              <a
                href={details.contact.whatsappChatLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-13 rounded-full bg-[#20A464] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-sm active:scale-98 transition-transform"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};
