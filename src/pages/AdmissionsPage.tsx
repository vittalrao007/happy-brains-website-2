import React from 'react';
import { Sun, Calendar, Users, FileText, CheckCircle2, Pencil } from 'lucide-react';
import { type PageId } from '../types';
import { useBusinessDetails } from '../context/BusinessDetailsContext';
import { YellowCTA } from '../components/YellowCTA';

interface AdmissionsPageProps {
  onNavigate: (page: PageId) => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = () => {
  const { details } = useBusinessDetails();

  const steps = [
    {
      num: 1,
      title: 'Contact the school',
      desc: 'Call or WhatsApp the Principal to express your interest and ask initial questions.',
    },
    {
      num: 2,
      title: 'Discuss age & program',
      desc: 'Share your child’s age and we will suggest the suitable program group.',
    },
    {
      num: 3,
      title: 'Arrange a school visit',
      desc: 'See the classrooms, meet the educators and get a feel for a normal day.',
    },
    {
      num: 4,
      title: 'Review fees & documents',
      desc: 'Go through timings, the fee structure and the documents required.',
    },
    {
      num: 5,
      title: 'Complete enrollment',
      desc: 'Finish the school’s enrollment process and welcome your child aboard.',
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-12 pt-6 sm:pt-10">
      {/* 1. HERO SECTION (Screenshot Page 56) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-4">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C98D8] tracking-widest uppercase">
            <Sun className="w-3.5 h-3.5" />
            <span>ADMISSIONS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172A3A] tracking-tight leading-tight">
            Enrolling your child is easier than you think
          </h1>
          <p className="text-sm sm:text-base text-[#172A3A]/85 leading-relaxed">
            Five friendly steps from your first phone call to your child’s first day. No forms on this website — just a direct conversation with the Principal.
          </p>
        </div>
      </section>

      {/* 2. FIVE SIMPLE STEPS (Screenshots Page 56 - 59) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C98D8] tracking-widest uppercase">
            <Sun className="w-3.5 h-3.5" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172A3A] tracking-tight">
            Five simple steps
          </h2>
        </div>

        <div className="space-y-4 pt-1">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xs relative overflow-hidden space-y-2"
            >
              <div className="text-4xl font-extrabold text-[#DFF2FC] select-none">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-[#172A3A]">
                {step.title}
              </h3>
              <p className="text-sm text-[#687786] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. THE DETAILS (Screenshots Page 59 - 62) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C98D8] tracking-widest uppercase">
            <Sun className="w-3.5 h-3.5" />
            <span>THE DETAILS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172A3A] tracking-tight">
            What to ask the school office
          </h2>
          <p className="text-sm text-[#687786]">
            These fields are completed by the school as information is confirmed.
          </p>
        </div>

        <div className="space-y-4 pt-1">
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-[#DFF2FC] flex items-center justify-center text-[#2C98D8]">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#172A3A]">Admission availability</h3>
            <p className="text-sm text-[#687786]">
              [ADMISSION DETAILS — current availability to be confirmed by the school]
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-[#DDF5E8] flex items-center justify-center text-[#20A464]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#172A3A]">Age eligibility</h3>
            <p className="text-sm text-[#687786]">
              [AGE ELIGIBILITY — per program, to be confirmed]
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF6D6] flex items-center justify-center text-[#FFC83D]">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#172A3A]">Academic session</h3>
            <p className="text-sm text-[#687786]">
              [ACADEMIC SESSION DATES]
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-[#FFEBE6] flex items-center justify-center text-[#FF6B6B]">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#172A3A]">Required documents</h3>
            <p className="text-sm text-[#687786]">
              {details.approachAndFacilities.documentsRequired ||
                '[REQUIRED DOCUMENTS — e.g. birth certificate, photos; the school office confirms the exact list]'}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-[#DFF2FC] flex items-center justify-center text-[#2C98D8]">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#172A3A]">Fee information</h3>
            <p className="text-sm text-[#687786]">
              [FEE DETAILS — call or WhatsApp to request the current fee structure]
            </p>
          </div>
        </div>

        {/* Notice box matching Screenshot Page 62 */}
        <div className="bg-[#FFF4F1] border border-[#FFC83D]/40 rounded-3xl p-6 space-y-2 text-center sm:text-left">
          <div className="flex items-start gap-3">
            <Pencil className="w-5 h-5 text-[#172A3A]/70 shrink-0 mt-0.5" />
            <p className="text-xs text-[#172A3A]/85 leading-relaxed font-medium">
              No admission deadlines, discounts or seat counts are published on this website. Anything not listed here is confirmed directly by the school.
            </p>
          </div>
        </div>
      </section>

      {/* 4. YELLOW CTA BANNER (Screenshot Page 63) */}
      <YellowCTA
        title="Enquire About Admissions"
        subtitle="A short call is all it takes to start. Ask about programs, timings, documents and fees — we are happy to help."
        whatsappLabel="WhatsApp the Principal"
      />
    </div>
  );
};
