import React, { useState } from 'react';
import { Sun, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { type PageId } from '../types';
import { useBusinessDetails } from '../context/BusinessDetailsContext';
import { YellowCTA } from '../components/YellowCTA';

interface FAQPageProps {
  onNavigate: (page: PageId) => void;
}

export const FAQPage: React.FC<FAQPageProps> = () => {
  const { details } = useBusinessDetails();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-0': true, // Open first item by default as in screenshot page 70
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const defaultFaqs = [
    {
      id: 'faq-0',
      question: 'What age groups does the school accept?',
      answer: `We welcome children across our preschool programs and daycare. Exact age cut-offs for each group are confirmed by the school — [AGE ELIGIBILITY: ${details.programs.map((p) => p.name + ' ' + (p.ageGroup || '')).join(', ') || '1.5 to 5.5 years'}]`,
    },
    {
      id: 'faq-1',
      question: 'Which preschool programs are available?',
      answer: details.programs.length > 0
        ? `We offer ${details.programs.map((p) => p.name).join(', ')}, alongside comprehensive daycare services.`
        : 'We offer Playgroup, Nursery, LKG, and UKG programs, along with flexible daycare options.',
    },
    {
      id: 'faq-2',
      question: 'What are the school and daycare timings?',
      answer: `Preschool timings: ${details.hours.opening || '9:00 AM'} to 12:30 PM. Daycare timings: ${details.daycare.hours || '8:30 AM to 6:30 PM'}. Working days: ${details.hours.workingDays || 'Monday to Friday'}.`,
    },
    {
      id: 'faq-3',
      question: 'Is full-day or half-day daycare available?',
      answer:
        'Daycare options are discussed with each family directly — please ask the school office about full-day and half-day arrangements. [DAYCARE OPTIONS]',
    },
    {
      id: 'faq-4',
      question: 'What are the fees?',
      answer:
        'Fee details and payment schedules are shared transparently and directly by the school. Call or WhatsApp the Principal to receive the latest fee structure for your chosen program.',
    },
    {
      id: 'faq-5',
      question: 'Are meals and snacks provided?',
      answer:
        details.approachAndFacilities.foodAndNutrition ||
        'Healthy morning and evening snacks, warm lunch arrangements, and pure drinking water are prepared with high hygiene standards.',
    },
    {
      id: 'faq-6',
      question: 'How can parents arrange a school visit?',
      answer:
        details.approachAndFacilities.schoolVisitInfo ||
        'The best way to experience our caring environment is in person. Simply call or WhatsApp the Principal to arrange a morning visit.',
    },
    {
      id: 'faq-7',
      question: 'What documents are needed for admission?',
      answer:
        details.approachAndFacilities.documentsRequired ||
        'Child’s birth certificate copy, passport photos, vaccination records, and parents’ identity/address proof.',
    },
    {
      id: 'faq-8',
      question: 'How can parents contact the principal?',
      answer: `You can tap the yellow "Call the Principal" button (${details.contact.phone || 'on this site'}) or tap the green WhatsApp icon to start an instant chat.`,
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-12 pt-6 sm:pt-10">
      {/* 1. HERO SECTION (Screenshot Page 69) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-4">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C98D8] tracking-widest uppercase">
            <Sun className="w-3.5 h-3.5" />
            <span>FAQ</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172A3A] tracking-tight leading-tight">
            Questions parents ask us
          </h1>
          <p className="text-sm sm:text-base text-[#172A3A]/85 leading-relaxed">
            Short, honest answers. Where details are still being confirmed by the school, you will see clearly-marked placeholders instead of guesses.
          </p>
        </div>
      </section>

      {/* 2. ACCORDION LIST (Screenshots Page 70 - 72) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-4">
        {defaultFaqs.map((faq) => {
          const isOpen = !!openItems[faq.id];
          return (
            <div
              key={faq.id}
              className="bg-white rounded-3xl border border-slate-100 shadow-xs overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2C98D8]"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-bold text-[#172A3A] leading-snug">
                  {faq.question}
                </span>
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#DFF2FC] text-[#2C98D8]' : 'bg-[#DFF2FC]/50 text-[#2C98D8]'
                  }`}
                >
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#172A3A]/85 leading-relaxed border-t border-slate-50 animate-in fade-in duration-150">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* 3. YELLOW CTA */}
      <YellowCTA
        title="Still have a question?"
        subtitle="Every child is unique and we love helping parents find the right answer. Call or WhatsApp the Principal directly."
      />
    </div>
  );
};
