import React from 'react';
import { Sun, MessageCircle, ArrowRight, Pencil, Smile, BookOpen, GraduationCap, Heart, Clock } from 'lucide-react';
import { type PageId } from '../types';
import { useBusinessDetails } from '../context/BusinessDetailsContext';
import { YellowCTA } from '../components/YellowCTA';

interface ProgramsPageProps {
  onNavigate: (page: PageId) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onNavigate }) => {
  const { details } = useBusinessDetails();

  const programActivities: Record<string, string[]> = {
    Playgroup: [
      'Meeting and playing with other children',
      'Sensory play with colours, textures and sounds',
      'Gentle settling-in, at each child’s own pace',
      'Songs, rhymes and first classroom routines',
    ],
    Nursery: [
      'Early language and vocabulary through stories',
      'First numbers, shapes and sorting games',
      'Fine motor skills: colouring, pasting, building',
      'Making friends and learning to share',
    ],
    LKG: [
      'Letter sounds and early reading readiness',
      'Counting, patterns and early maths concepts',
      'Creative art, craft and music activities',
      'Following instructions and working in groups',
    ],
    UKG: [
      'Confident speaking, listening and comprehension',
      'Early reading, writing and number work',
      'Independence, self-care and responsibility',
      'Primary-school readiness, step by step',
    ],
  };

  const getProgramIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Smile className="w-5 h-5 text-[#2C98D8]" />;
      case 1:
        return <BookOpen className="w-5 h-5 text-[#FFC83D]" />;
      case 2:
        return <GraduationCap className="w-5 h-5 text-[#FF6B6B]" />;
      default:
        return <Sun className="w-5 h-5 text-[#38A3A5]" />;
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-12 pt-6 sm:pt-10">
      {/* 1. HERO SECTION (Screenshot Page 28) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-5">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C98D8] tracking-widest uppercase">
            <Sun className="w-3.5 h-3.5" />
            <span>PROGRAMS & AGE GROUPS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172A3A] tracking-tight leading-tight">
            The right group for every little step
          </h1>
          <p className="text-sm sm:text-base text-[#172A3A]/85 leading-relaxed">
            Each program is designed for a stage of early childhood — meeting children where they are and helping them take the next step with confidence.
          </p>
        </div>

        {/* Notice box matching Screenshot Page 28 & 29 */}
        <div className="reference-notice-box p-5 space-y-2">
          <div className="flex items-start gap-3">
            <Pencil className="w-5 h-5 text-[#FF6B6B] shrink-0 mt-0.5" />
            <p className="text-xs text-[#FF6B6B] leading-relaxed">
              Program names, ages, timings and descriptions below are editable samples. The school can remove or modify anything that does not apply, and will display the confirmed age range for each program.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-[#FF6B6B] uppercase tracking-wider pl-8">
            <span>[AGE ELIGIBILITY]</span>
            <span>·</span>
            <span>[PROGRAMS OFFERED]</span>
          </div>
        </div>
      </section>

      {/* 2. PROGRAM CARDS (Screenshot Page 29 - 33) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-6">
        {details.programs.map((program, idx) => {
          const activities = programActivities[program.name] || [
            'Interactive guided group exploration',
            'Creative and imaginative sensory activities',
            'Socialization and foundational motor skills',
          ];

          return (
            <div
              key={program.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xs space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-[#DFF2FC] flex items-center justify-center">
                  {getProgramIcon(idx)}
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#FFF9F7] border border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                    {program.ageGroup || '[AGE ELIGIBILITY]'}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#FFF9F7] border border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                    {details.hours.opening ? `${details.hours.opening} - 12:30 PM` : '[SCHOOL HOURS]'}
                  </span>
                </div>
              </div>

              <h2 className="text-2xl font-extrabold text-[#172A3A]">
                {program.name}
              </h2>

              <p className="text-sm text-[#172A3A]/85 leading-relaxed">
                {program.description}
              </p>

              {/* What your child will do */}
              <div className="pt-2 space-y-2.5">
                <div className="text-[11px] font-extrabold text-[#687786] uppercase tracking-wider">
                  WHAT YOUR CHILD WILL DO
                </div>
                <ul className="space-y-2 text-sm text-[#172A3A]/85">
                  {activities.map((act, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#2C98D8] mt-1.5 shrink-0" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}

        {/* Daycare Card (Screenshot Page 32 & 33) */}
        {details.daycare.available && (
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-2xl bg-[#DFF2FC] flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#2C98D8]" />
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-[#FFF9F7] border border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                  {details.daycare.ageGroup || '[AGE ELIGIBILITY]'}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#FFF9F7] border border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                  {details.daycare.hours || '[DAYCARE HOURS]'}
                </span>
              </div>
            </div>

            <h2 className="text-2xl font-extrabold text-[#172A3A]">
              Daycare
            </h2>

            <p className="text-sm text-[#172A3A]/85 leading-relaxed">
              {details.daycare.description ||
                'Supervised care, play, rest and age-appropriate activities for children of working parents, during the school’s stated operating hours.'}
            </p>

            <div className="pt-2 space-y-2.5">
              <div className="text-[11px] font-extrabold text-[#687786] uppercase tracking-wider">
                WHAT YOUR CHILD WILL DO
              </div>
              <ul className="space-y-2 text-sm text-[#172A3A]/85">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#2C98D8] mt-1.5 shrink-0" />
                  <span>Caring supervision by familiar faces</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#2C98D8] mt-1.5 shrink-0" />
                  <span>Free play and quiet activities</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#2C98D8] mt-1.5 shrink-0" />
                  <span>Rest and nap arrangements</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#2C98D8] mt-1.5 shrink-0" />
                  <span>Handover to parents or authorised guardians</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Dark Navy Card (Screenshot Page 34) */}
        <div className="bg-[#172A3A] text-white rounded-3xl p-7 sm:p-8 space-y-4 shadow-sm text-center sm:text-left">
          <h3 className="text-2xl font-extrabold text-white">
            Discuss the Right Program for Your Child
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Every child is different. Tell us a little about yours and we will happily suggest the group where they will flourish.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            {details.contact.whatsappChatLink ? (
              <a
                href={details.contact.whatsappChatLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#20A464] text-white font-bold text-sm flex items-center justify-center gap-2 hover:brightness-95 active:scale-98 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp the Principal</span>
              </a>
            ) : null}

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>See contact options</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. YELLOW CTA BANNER (Screenshot Page 35) */}
      <YellowCTA
        title="Come and see the classrooms"
        subtitle="Programs look different in person. Arrange a visit and watch a normal morning unfold."
      />
    </div>
  );
};
