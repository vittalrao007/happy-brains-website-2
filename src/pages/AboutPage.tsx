import React from 'react';
import { Sun, Shapes, Palette, Heart, Users, Pencil, Quote } from 'lucide-react';
import { type PageId } from '../types';
import { useBusinessDetails } from '../context/BusinessDetailsContext';
import { siteImages } from '../assets/images';
import { YellowCTA } from '../components/YellowCTA';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { details } = useBusinessDetails();

  return (
    <div className="space-y-14 sm:space-y-20 pb-12 pt-6 sm:pt-10">
      {/* 1. HERO SECTION (Screenshot Page 21) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C98D8] tracking-widest uppercase">
            <Sun className="w-3.5 h-3.5" />
            <span>ABOUT US</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172A3A] tracking-tight leading-tight">
            A happy place to learn and grow
          </h1>
          <p className="text-sm sm:text-base text-[#172A3A]/85 leading-relaxed">
            {details.identity.name} is a caring space where little minds learn, explore, play, and grow — supported by educators who love what they do.
          </p>
        </div>

        {/* Arch Collage (Screenshot Page 22) */}
        <div className="relative pt-4">
          <div className="rounded-t-[120px] rounded-b-3xl overflow-hidden aspect-4/5 bg-slate-100 shadow-sm">
            <img
              src={siteImages.heroClassroom}
              alt="Teacher guiding young children in classroom"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-2 sm:left-4 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-white">
            <img
              src={siteImages.outdoorPlay}
              alt="Children playing together on climbing frame"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE (Screenshot Page 22 & 23) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto pt-6 space-y-5">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C98D8] tracking-widest uppercase">
          <Sun className="w-3.5 h-3.5" />
          <span>WHO WE ARE</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172A3A] tracking-tight">
          Built around how young children actually learn
        </h2>

        <div className="space-y-4 text-sm sm:text-base text-[#172A3A]/85 leading-relaxed">
          <p>
            {details.identity.name} offers early education and daycare for young children in a warm, safe and stimulating environment. Our days are structured enough to feel secure, and playful enough to feel like a second home.
          </p>
          <p>
            The early years matter enormously. Between birth and six, children build the language, motor, social and thinking skills that everything else stands on. That is why we take play seriously — it is how young children make sense of numbers, words, friendship and feelings.
          </p>
          <p>
            Every child arrives with their own personality and pace. Our job is to notice it, nurture it, and send each child home tired, happy and a little braver than yesterday.
          </p>
        </div>
      </section>

      {/* 3. MISSION & PHILOSOPHY (Screenshot Page 23 - 25) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C98D8] tracking-widest uppercase">
            <Sun className="w-3.5 h-3.5" />
            <span>MISSION & PHILOSOPHY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172A3A] tracking-tight">
            Our approach, in four ideas
          </h2>
          <p className="text-sm sm:text-base text-[#687786] leading-relaxed">
            Simple principles that shape everything from circle time to snack time.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-2.5">
            <div className="w-10 h-10 rounded-2xl bg-[#DFF2FC] flex items-center justify-center text-[#2C98D8]">
              <Shapes className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#172A3A]">Play-based learning</h3>
            <p className="text-sm text-[#687786] leading-relaxed">
              Children learn best by doing. Games, blocks, sand, stories and songs turn every day into discovery.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-2.5">
            <div className="w-10 h-10 rounded-2xl bg-[#DDF5E8] flex items-center justify-center text-[#20A464]">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#172A3A]">Creativity & exploration</h3>
            <p className="text-sm text-[#687786] leading-relaxed">
              Art, music and open-ended play give children room to experiment, imagine and express themselves.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-2.5">
            <div className="w-10 h-10 rounded-2xl bg-[#FFEBE6] flex items-center justify-center text-[#FF6B6B]">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#172A3A]">Warm, caring guidance</h3>
            <p className="text-sm text-[#687786] leading-relaxed">
              Young children thrive with patient, attentive adults. Our educators guide gently and celebrate effort.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-2.5">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF6D6] flex items-center justify-center text-[#FFC83D]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#172A3A]">Partnership with parents</h3>
            <p className="text-sm text-[#687786] leading-relaxed">
              You are your child's first teacher. We keep communication open and welcome your questions and feedback.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PRINCIPAL'S MESSAGE (Screenshot Page 26) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto">
        <div className="reference-notice-box p-7 sm:p-8 space-y-4 text-center sm:text-left">
          <div className="text-3xl font-serif text-[#2C98D8] font-bold">
            “
          </div>
          <p className="text-sm sm:text-base text-[#172A3A] font-medium leading-relaxed italic">
            {details.identity.principalName
              ? `“Welcome to ${details.identity.name}! We believe that preschool should be an extension of a child's home — warm, safe, curious, and filled with gentle encouragement. Come visit us and see our classrooms in action.”`
              : `"[PRINCIPAL'S MESSAGE — a short, personal welcome note from the Principal will be added here once written.]"`}
          </p>
          <div className="flex items-center justify-center sm:justify-start gap-2 pt-2 text-xs font-bold text-[#2C98D8]">
            <Pencil className="w-4 h-4 shrink-0" />
            <span>
              {details.identity.principalName || "[PRINCIPAL'S NAME]"}, Principal — {details.identity.name}
            </span>
          </div>
        </div>
      </section>

      {/* 5. YELLOW CTA BANNER (Screenshot Page 27) */}
      <YellowCTA
        title="We would love to show you around"
        subtitle="The best way to understand our approach is to see it. Arrange a school visit — we will walk you through a normal day."
      />
    </div>
  );
};
