import React from 'react';
import { Sun, Sparkles, BookOpen, Palette, Shapes, Moon, Droplets, ShieldCheck, Camera } from 'lucide-react';
import { type PageId } from '../types';
import { useBusinessDetails } from '../context/BusinessDetailsContext';
import { siteImages } from '../assets/images';
import { YellowCTA } from '../components/YellowCTA';

interface FacilitiesPageProps {
  onNavigate: (page: PageId) => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ onNavigate }) => {
  const { details } = useBusinessDetails();

  const facilitiesList = [
    {
      title: 'Classrooms & learning spaces',
      description: 'Bright, child-friendly rooms where children gather for circle time, stories and hands-on learning.',
      image: siteImages.heroClassroom,
      icon: <Sparkles className="w-5 h-5 text-[#2C98D8]" />,
      bg: 'bg-[#DFF2FC]',
    },
    {
      title: 'Toys, books & materials',
      description: 'Picture books, puzzles and age-appropriate materials that invite little hands to explore.',
      image: siteImages.artsCrafts,
      icon: <BookOpen className="w-5 h-5 text-[#2C98D8]" />,
      bg: 'bg-[#DFF2FC]',
    },
    {
      title: 'Art & creative activities',
      description: 'Paint, crayons, glue and glitter — creative mess is how ideas take shape.',
      image: siteImages.artsCrafts,
      icon: <Palette className="w-5 h-5 text-[#2C98D8]" />,
      bg: 'bg-[#DFF2FC]',
    },
    {
      title: 'Indoor & outdoor play areas',
      description: 'Space to run, climb and play — supervised and suited to young children.',
      image: siteImages.outdoorPlay,
      icon: <Shapes className="w-5 h-5 text-[#2C98D8]" />,
      bg: 'bg-[#DFF2FC]',
    },
    {
      title: 'Rest areas for daycare children',
      description: 'A quiet, comfortable spot where daycare children can nap and recharge.',
      image: siteImages.daycareNap,
      icon: <Moon className="w-5 h-5 text-[#2C98D8]" />,
      bg: 'bg-[#DFF2FC]',
    },
    {
      title: 'Hygiene & sanitation',
      description: 'Hand-washing routines and clean, child-height facilities are part of the daily rhythm.',
      image: siteImages.daycareSnack,
      icon: <Droplets className="w-5 h-5 text-[#2C98D8]" />,
      bg: 'bg-[#DFF2FC]',
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-12 pt-6 sm:pt-10">
      {/* 1. HERO SECTION (Screenshot Page 45) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-5">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C98D8] tracking-widest uppercase">
            <Sun className="w-3.5 h-3.5" />
            <span>FACILITIES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172A3A] tracking-tight leading-tight">
            Our learning environment
          </h1>
          <p className="text-sm sm:text-base text-[#172A3A]/85 leading-relaxed">
            A look around the spaces where children learn, play, create and rest at {details.identity.name}.
          </p>
        </div>

        {/* Notice box (Screenshot Page 45 & 46) */}
        <div className="reference-notice-box p-5 space-y-2">
          <div className="flex items-start gap-3">
            <Camera className="w-5 h-5 text-[#2C98D8] shrink-0 mt-0.5" />
            <p className="text-xs text-[#2C98D8] leading-relaxed">
              The photographs below are replaceable samples. Real school photographs will be used once provided — with parental permission for any image showing children.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FACILITIES CARDS (Screenshots Page 46 - 50) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-8">
        {facilitiesList.map((item, index) => (
          <div key={index} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xs space-y-4 pb-6">
            <div className="aspect-4/3 overflow-hidden bg-slate-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="px-6 space-y-2.5">
              <div className={`w-10 h-10 rounded-2xl ${item.bg} flex items-center justify-center`}>
                {item.icon}
              </div>
              <h2 className="text-xl font-extrabold text-[#172A3A]">
                {item.title}
              </h2>
              <p className="text-sm text-[#687786] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}

        {/* 3. SAFETY CARD (Screenshot Page 51) */}
        <div className="bg-[#172A3A] text-white rounded-3xl p-7 sm:p-8 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-[#FFC83D]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-extrabold text-white">
            Child safety & visitor management
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Supervised handover at pickup, controlled entry and attentive staff are part of our daily routine. Specific safety practices are described by the school office on request.
          </p>
          <div className="text-xs text-[#FFC83D] font-mono tracking-wider pt-1">
            [SAFETY PRACTICES: {details.approachAndFacilities.safetyMeasures || 'Controlled verified guardian pickup'}]
          </div>
        </div>
      </section>

      {/* 4. YELLOW CTA BANNER (Screenshot Page 51) */}
      <YellowCTA
        title="See it for yourself"
        subtitle="Photos only tell part of the story. Arrange a visit and experience the classrooms, play areas and warm atmosphere in person."
      />
    </div>
  );
};
