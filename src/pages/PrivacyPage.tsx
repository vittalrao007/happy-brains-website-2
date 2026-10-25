import React from 'react';
import { Sun, Shield, Lock, Camera, HelpCircle, ArrowRight } from 'lucide-react';
import { type PageId } from '../types';
import { useBusinessDetails } from '../context/BusinessDetailsContext';

interface PrivacyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  const { details } = useBusinessDetails();

  return (
    <div className="space-y-12 sm:space-y-16 pb-14 pt-6 sm:pt-10">
      {/* 1. HERO SECTION (Screenshot Page 73) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-4">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C98D8] tracking-widest uppercase">
            <Sun className="w-3.5 h-3.5" />
            <span>PRIVACY POLICY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172A3A] tracking-tight leading-tight">
            Your privacy matters to us
          </h1>
          <p className="text-sm sm:text-base text-[#172A3A]/85 leading-relaxed">
            A simple, honest summary of how this website handles information.
          </p>
        </div>
      </section>

      {/* 2. POLICY CARDS (Screenshots Page 74 & 75) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-4">
        {/* Card 1: Information Collected */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-[#DFF2FC] flex items-center justify-center text-[#2C98D8]">
            <Lock className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-[#172A3A]">
            Information this website collects
          </h2>
          <p className="text-sm text-[#172A3A]/85 leading-relaxed">
            This website is informational. It does not include forms that send messages, and it does not ask parents to create accounts. Clicking the call or WhatsApp buttons simply opens your phone’s dialer or the WhatsApp app — you choose whether to call or send a message.
          </p>
        </div>

        {/* Card 2: Photos of Children */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-[#FFEBE6] flex items-center justify-center text-[#FF6B6B]">
            <Camera className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-[#172A3A]">
            Photographs of children
          </h2>
          <p className="text-sm text-[#172A3A]/85 leading-relaxed">
            Photographs of children are published only with appropriate parental or guardian permission. The school keeps permission records for any photo it shares.
          </p>
          <div className="text-xs text-slate-400 font-mono tracking-wider">
            [PRIVACY DETAILS]
          </div>
        </div>

        {/* Card 3: Questions */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-[#DDF5E8] flex items-center justify-center text-[#20A464]">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-[#172A3A]">
            Questions
          </h2>
          <p className="text-sm text-[#172A3A]/85 leading-relaxed">
            For any privacy question, contact the school directly using the details on the{' '}
            <button
              onClick={() => onNavigate('contact')}
              className="text-[#2C98D8] font-bold underline hover:text-[#172A3A] cursor-pointer"
            >
              Contact page
            </button>
            .
          </p>
        </div>
      </section>
    </div>
  );
};
