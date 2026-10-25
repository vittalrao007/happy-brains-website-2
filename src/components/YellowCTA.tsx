import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { useBusinessDetails } from '../context/BusinessDetailsContext';

interface YellowCTAProps {
  title?: string;
  subtitle?: string;
  callLabel?: string;
  whatsappLabel?: string;
}

export const YellowCTA: React.FC<YellowCTAProps> = ({
  title = 'Come and see us in person',
  subtitle = 'The best way to choose a preschool is to visit. Call the Principal or send us a WhatsApp message to arrange a time.',
  callLabel = 'Call the Principal',
  whatsappLabel = 'WhatsApp Us',
}) => {
  const { details } = useBusinessDetails();

  return (
    <section className="px-4 py-8 max-w-xl mx-auto">
      <div className="relative overflow-hidden bg-[#FFC83D] rounded-3xl p-7 sm:p-9 text-center shadow-sm">
        {/* Decorative soft coral accent circle as seen in reference */}
        <div
          className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#F8B4A6]/40 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172A3A] tracking-tight leading-snug">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-[#172A3A]/85 font-medium leading-relaxed max-w-md mx-auto">
            {subtitle}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            {details.contact.phoneTelLink ? (
              <a
                href={details.contact.phoneTelLink}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#172A3A] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-sm hover:bg-[#172A3A]/90 active:scale-98 transition-all"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>{callLabel}</span>
              </a>
            ) : null}

            {details.contact.whatsappChatLink ? (
              <a
                href={details.contact.whatsappChatLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#20A464] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-sm hover:brightness-95 active:scale-98 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{whatsappLabel}</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
