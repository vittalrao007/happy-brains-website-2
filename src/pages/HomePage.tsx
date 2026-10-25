import React from 'react';
import { Phone, MessageCircle, ArrowRight, Sun, Sparkles, Heart, School, Compass, Shapes, Users, Puzzle, MessageSquare, Home as HomeIcon, Clock, Pencil, Quote } from 'lucide-react';
import { type PageId } from '../types';
import { useBusinessDetails } from '../context/BusinessDetailsContext';
import { siteImages } from '../assets/images';
import { YellowCTA } from '../components/YellowCTA';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { details } = useBusinessDetails();

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      {/* 1. HERO SECTION (Screenshots Page 1 & 2) */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 pb-12 sm:pb-20 px-4 sm:px-6 bg-[#FFF4F1]/60">
        {/* Soft pastel decorative background elements */}
        <div
          className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-[#DFF2FC]/70 blur-2xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-[#FFC83D]/20 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-xl mx-auto text-left sm:text-center space-y-6 relative z-10">
          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172A3A] tracking-tight leading-[1.18] text-balance">
            Little Steps Today, Bright Futures Tomorrow!
          </h1>

          {/* Subtitle / Intro */}
          <p className="text-base sm:text-lg text-[#172A3A]/85 leading-relaxed font-normal">
            A caring space where little minds learn, explore, play, and grow. Discover a joyful preschool experience and dependable daycare support for your family.
          </p>

          {/* Large CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
            {details.contact.phoneTelLink ? (
              <a
                href={details.contact.phoneTelLink}
                className="h-13 px-8 rounded-full bg-[#FFC83D] text-[#172A3A] font-extrabold text-base flex items-center justify-center gap-2.5 shadow-sm hover:brightness-95 active:scale-98 transition-all"
              >
                <Phone className="w-5 h-5 fill-[#172A3A]" />
                <span>Call the Principal</span>
              </a>
            ) : null}

            {details.contact.whatsappChatLink ? (
              <a
                href={details.contact.whatsappChatLink}
                target="_blank"
                rel="noopener noreferrer"
                className="h-13 px-8 rounded-full bg-[#20A464] text-white font-extrabold text-base flex items-center justify-center gap-2.5 shadow-sm hover:brightness-95 active:scale-98 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            ) : null}
          </div>

          {/* Explore Our Programs Link */}
          <div className="pt-1">
            <button
              onClick={() => onNavigate('programs')}
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#2C98D8] hover:text-[#172A3A] transition-colors group cursor-pointer"
            >
              <span>Explore Our Programs</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Hero Image with Floating Badges (Screenshot Page 2) */}
        <div className="max-w-xl mx-auto mt-10 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-sm bg-white border border-slate-100 aspect-4/3">
            <img
              src={siteImages.heroClassroom}
              alt="Preschool teacher reading stories to children in a warm classroom"
              className="w-full h-full object-cover"
              loading="eager"
            />

            {/* Overlapping Floating Pill Badges */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2 text-xs font-bold text-[#2C98D8]">
              <Sparkles className="w-3.5 h-3.5 text-[#2C98D8]" />
              <span>Play-based learning</span>
            </div>

            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2 text-xs font-bold text-[#FF6B6B]">
              <Heart className="w-3.5 h-3.5 fill-[#FF6B6B]" />
              <span>Caring educators</span>
            </div>
          </div>

          {/* 4 Feature Cards (2x2 Grid from Screenshot Page 2) */}
          <div className="grid grid-cols-2 gap-3.5 mt-5">
            <div className="bg-white rounded-2xl p-4.5 border border-slate-100/80 shadow-xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#DDF5E8] flex items-center justify-center shrink-0 text-[#20A464]">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#172A3A] leading-snug">
                Play-based learning
              </span>
            </div>

            <div className="bg-white rounded-2xl p-4.5 border border-slate-100/80 shadow-xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FFEBE6] flex items-center justify-center shrink-0 text-[#FF6B6B]">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#172A3A] leading-snug">
                Caring educators
              </span>
            </div>

            <div className="bg-white rounded-2xl p-4.5 border border-slate-100/80 shadow-xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#DFF2FC] flex items-center justify-center shrink-0 text-[#2C98D8]">
                <School className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#172A3A] leading-snug">
                Preschool and daycare
              </span>
            </div>

            <div className="bg-white rounded-2xl p-4.5 border border-slate-100/80 shadow-xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FFF6D6] flex items-center justify-center shrink-0 text-[#FFC83D]">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#172A3A] leading-snug">
                Learning through exploration
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SCALLOP BANNER (Screenshot Page 3) */}
      <section className="px-4">
        <div className="max-w-xl mx-auto scallop-banner py-3.5 px-6 rounded-2xl shadow-xs">
          <div className="flex items-center justify-around text-center text-xs sm:text-sm font-extrabold tracking-widest text-[#172A3A]">
            <span>EXPLORE</span>
            <Sun className="w-4 h-4 text-[#172A3A] shrink-0" />
            <span>CREATE</span>
            <Sun className="w-4 h-4 text-[#172A3A] shrink-0" />
            <span>IMAGINE</span>
          </div>
        </div>
      </section>

      {/* 3. IMAGE COLLAGE & WHO WE ARE (Screenshot Page 3 & 4) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-8">
        {/* Curved Arch Collage */}
        <div className="relative pt-4">
          <div className="rounded-t-[120px] rounded-b-3xl overflow-hidden aspect-4/5 bg-slate-100 shadow-sm">
            <img
              src={siteImages.heroClassroom}
              alt="Teacher guiding preschool child in learning activity"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Overlapping child photo */}
          <div className="absolute -bottom-6 -right-2 sm:right-4 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-white">
            <img
              src={siteImages.artsCrafts}
              alt="Preschool student immersed in creative painting"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text Section (Screenshot Page 4) */}
        <div className="pt-8 space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172A3A] tracking-tight">
            A joyful start to a lifetime of learning
          </h2>

          <p className="text-sm sm:text-base text-[#172A3A]/85 leading-relaxed">
            {details.identity.name} is a caring space where young children are known by name, encouraged to ask questions, and given room to be themselves.
          </p>

          <div className="space-y-3.5 pt-1 text-sm sm:text-base text-[#172A3A]/85">
            <div className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFC83D] mt-1.5 shrink-0" />
              <span>
                Early childhood is the foundation years — what children experience now shapes how they learn later.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFC83D] mt-1.5 shrink-0" />
              <span>
                Play, creativity, exploration and social interaction are how young children understand their world.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFC83D] mt-1.5 shrink-0" />
              <span>
                We work hand-in-hand with parents, sharing the journey and keeping communication open.
              </span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#2C98D8] hover:text-[#172A3A] transition-colors group cursor-pointer"
            >
              <span>More About Us</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. PROGRAMS & AGE GROUPS (Screenshots Page 5 - 7) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C98D8] tracking-widest uppercase">
            <Sun className="w-3.5 h-3.5" />
            <span>PROGRAMS & AGE GROUPS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172A3A] tracking-tight">
            The right group for every little step
          </h2>
          <p className="text-sm sm:text-base text-[#687786] leading-relaxed">
            From first separation to primary-school readiness — each program meets children where they are.
          </p>
          <div>
            <button
              onClick={() => onNavigate('programs')}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2C98D8] hover:text-[#172A3A] transition-colors group cursor-pointer"
            >
              <span>View All Programs</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Program Cards */}
        <div className="space-y-4 pt-2">
          {details.programs.map((prog, idx) => {
            const colors = [
              'text-[#2C98D8]',
              'text-[#FFC83D]',
              'text-[#FF6B6B]',
              'text-[#38A3A5]',
            ];
            const titleColor = colors[idx % colors.length];

            return (
              <div
                key={prog.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className={`text-xl font-extrabold ${titleColor}`}>
                    {prog.name}
                  </h3>
                </div>
                {prog.ageGroup ? (
                  <div className="text-xs font-bold text-slate-400 tracking-wider uppercase">
                    [{prog.ageGroup.toUpperCase()}]
                  </div>
                ) : (
                  <div className="text-xs font-bold text-slate-400 tracking-wider uppercase">
                    [AGE ELIGIBILITY]
                  </div>
                )}
                <p className="text-sm text-[#172A3A]/85 leading-relaxed">
                  {prog.description}
                </p>
                <div>
                  <button
                    onClick={() => onNavigate('programs')}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#2C98D8] hover:text-[#172A3A] transition-colors group cursor-pointer"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Daycare Card */}
          {details.daycare.available && (
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xs space-y-3">
              <h3 className="text-xl font-extrabold text-[#172A3A]">Daycare</h3>
              <div className="text-xs font-bold text-slate-400 tracking-wider uppercase">
                [{details.daycare.ageGroup || 'AGE ELIGIBILITY'}]
              </div>
              <p className="text-sm text-[#172A3A]/85 leading-relaxed">
                {details.daycare.description ||
                  'Supervised care, play, rest and age-appropriate activities during working hours.'}
              </p>
              <div>
                <button
                  onClick={() => onNavigate('daycare')}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#2C98D8] hover:text-[#172A3A] transition-colors group cursor-pointer"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          )}

          {/* Dark Navy Consultation Card (Screenshot Page 7) */}
          <div className="bg-[#172A3A] text-white rounded-3xl p-7 space-y-3 shadow-sm">
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              Not sure which program fits?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Discuss the right program for your child with the Principal.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FFC83D] hover:underline cursor-pointer"
              >
                <span>Ask us directly</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY KIDDIES WORLD (Screenshots Page 8 - 10) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C98D8] tracking-widest uppercase">
            <Sun className="w-3.5 h-3.5" />
            <span>WHY {details.identity.name.toUpperCase()}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172A3A] tracking-tight">
            What we focus on, every single day
          </h2>
          <p className="text-sm sm:text-base text-[#687786] leading-relaxed">
            An honest description of how we work — no big promises, just a caring, consistent approach.
          </p>
        </div>

        {/* 6 Pastel Feature Cards */}
        <div className="space-y-4 pt-1">
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#DFF2FC] flex items-center justify-center text-[#2C98D8]">
              <Sun className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#172A3A]">A welcoming environment</h3>
            <p className="text-sm text-[#687786] leading-relaxed">
              A warm, friendly space where young learners feel safe, noticed and happy to come back every day.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#DDF5E8] flex items-center justify-center text-[#20A464]">
              <Shapes className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#172A3A]">Learning through play</h3>
            <p className="text-sm text-[#687786] leading-relaxed">
              Play is a young child's most serious work — our activities turn curiosity into confidence and skills.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFEBE6] flex items-center justify-center text-[#FF6B6B]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#172A3A]">Social & communication skills</h3>
            <p className="text-sm text-[#687786] leading-relaxed">
              Circle time, group play and storytelling give children daily practice in sharing and expressing themselves.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF6D6] flex items-center justify-center text-[#FFC83D]">
              <Puzzle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#172A3A]">Age-appropriate activities</h3>
            <p className="text-sm text-[#687786] leading-relaxed">
              Every activity is matched to the child's stage, so learning feels like fun — never pressure.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#DFF2FC] flex items-center justify-center text-[#2C98D8]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#172A3A]">Communication with parents</h3>
            <p className="text-sm text-[#687786] leading-relaxed">
              We keep the door open for conversations about your child's day, progress and needs.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#DDF5E8] flex items-center justify-center text-[#20A464]">
              <HomeIcon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#172A3A]">Preschool + daycare together</h3>
            <p className="text-sm text-[#687786] leading-relaxed">
              Early education and dependable care under one roof — convenient for working families.
            </p>
          </div>
        </div>
      </section>

      {/* 6. A TYPICAL DAY (Screenshots Page 10 - 13) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C98D8] tracking-widest uppercase">
            <Sun className="w-3.5 h-3.5" />
            <span>A TYPICAL DAY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172A3A] tracking-tight">
            From morning hellos to happy goodbyes
          </h2>
          <p className="text-sm sm:text-base text-[#687786] leading-relaxed">
            A glimpse into the rhythm of a day at {details.identity.name}.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#DFF2FC] space-y-8 pt-4">
          {/* Step 1 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-white border-2 border-[#2C98D8] flex items-center justify-center text-[#2C98D8]">
              <Sun className="w-4 h-4" />
            </div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#2C98D8] text-white text-[10px] font-extrabold tracking-wider uppercase">
              MORNING
            </span>
            <h3 className="text-base font-bold text-[#172A3A]">Arrival & settling in</h3>
            <p className="text-sm text-[#687786]">
              A warm welcome at the door and time to ease into the day.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-white border-2 border-[#FFC83D] flex items-center justify-center text-[#FFC83D]">
              <Users className="w-4 h-4" />
            </div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#FFC83D] text-[#172A3A] text-[10px] font-extrabold tracking-wider uppercase">
              MORNING
            </span>
            <h3 className="text-base font-bold text-[#172A3A]">Circle time & conversation</h3>
            <p className="text-sm text-[#687786]">
              Songs, stories and sharing — building language and confidence.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-white border-2 border-[#20A464] flex items-center justify-center text-[#20A464]">
              <Shapes className="w-4 h-4" />
            </div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#20A464] text-white text-[10px] font-extrabold tracking-wider uppercase">
              MID-MORNING
            </span>
            <h3 className="text-base font-bold text-[#172A3A]">Learning through play</h3>
            <p className="text-sm text-[#687786]">
              Blocks, puzzles and hands-on activities that build early skills.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-white border-2 border-[#FF6B6B] flex items-center justify-center text-[#FF6B6B]">
              <Clock className="w-4 h-4" />
            </div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#FF6B6B] text-white text-[10px] font-extrabold tracking-wider uppercase">
              MIDDAY
            </span>
            <h3 className="text-base font-bold text-[#172A3A]">Snack & meal time</h3>
            <p className="text-sm text-[#687786]">
              Washing hands, eating together and practising table manners.
            </p>
          </div>

          {/* Step 5 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-white border-2 border-[#2C98D8] flex items-center justify-center text-[#2C98D8]">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#2C98D8] text-white text-[10px] font-extrabold tracking-wider uppercase">
              AFTERNOON
            </span>
            <h3 className="text-base font-bold text-[#172A3A]">Creative play & storytelling</h3>
            <p className="text-sm text-[#687786]">
              Art, imagination and quiet story moments.
            </p>
          </div>

          {/* Step 6 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-white border-2 border-[#38A3A5] flex items-center justify-center text-[#38A3A5]">
              <Heart className="w-4 h-4" />
            </div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#38A3A5] text-white text-[10px] font-extrabold tracking-wider uppercase">
              AFTERNOON
            </span>
            <h3 className="text-base font-bold text-[#172A3A]">Play & winding down</h3>
            <p className="text-sm text-[#687786]">
              Indoor or outdoor play, then calm time before handover.
            </p>
          </div>
        </div>

        {/* Notice Box matching reference Screenshot Page 13 */}
        <div className="reference-notice-box p-5 mt-6 flex items-start gap-3">
          <Pencil className="w-5 h-5 text-[#2C98D8] shrink-0 mt-0.5" />
          <p className="text-xs text-[#2C98D8] leading-relaxed">
            This schedule is illustrative until the school confirms its actual timings. Timings and activities can be edited or removed by the administrator. [{details.hours.formattedSummary || 'SCHOOL HOURS'}]
          </p>
        </div>
      </section>

      {/* 7. LEARNING ENVIRONMENT PREVIEW (Screenshot Page 13 & 14) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-5">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C98D8] tracking-widest uppercase">
            <Sun className="w-3.5 h-3.5" />
            <span>LEARNING ENVIRONMENT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172A3A] tracking-tight">
            Spaces made with little people in mind
          </h2>
          <div>
            <button
              onClick={() => onNavigate('facilities')}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2C98D8] hover:text-[#172A3A] transition-colors group cursor-pointer"
            >
              <span>See All Facilities</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 2-column photos */}
        <div className="grid grid-cols-2 gap-3.5 pt-2">
          <div className="rounded-2xl overflow-hidden aspect-square bg-slate-100 shadow-xs">
            <img
              src={siteImages.artsCrafts}
              alt="Preschool hands-on art learning space"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-square bg-slate-100 shadow-xs">
            <img
              src={siteImages.outdoorPlay}
              alt="Safe playground climbing structure"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 8. WHAT PARENTS SAY (Screenshots Page 14 - 16) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172A3A] tracking-tight">
          What Parents Say
        </h2>

        {/* Notice box matching reference Screenshot Page 14 */}
        <div className="reference-notice-box p-5 flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <Pencil className="w-5 h-5 text-[#FF6B6B] shrink-0 mt-0.5" />
            <p className="text-xs text-[#FF6B6B] leading-relaxed">
              This section is intentionally left as clearly-labelled placeholders. Genuine parent reviews will be published only once the school has received them — with each parent's permission.
            </p>
          </div>
          <span className="text-[10px] font-bold text-[#FF6B6B] uppercase tracking-wider shrink-0">
            [TESTIMONIALS]
          </span>
        </div>

        {/* Testimonials Cards matching screenshots */}
        <div className="space-y-4">
          {details.testimonials.length > 0 ? (
            details.testimonials.map((t, idx) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xs space-y-3 relative"
              >
                <div className="text-2xl font-serif text-[#2C98D8]/40 font-black">
                  ““
                </div>
                <p className="text-sm text-[#172A3A]/85 leading-relaxed italic">
                  {t.text}
                </p>
                <div className="text-xs font-bold text-[#687786]">
                  — {t.name}
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-3">
                <div className="text-2xl font-serif text-slate-300 font-black">99</div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Reserved for a genuine parent review. Share your experience with the school office to feature it here.
                </p>
                <div className="text-xs font-semibold text-slate-400">
                  — A waiting space for a review from a Playgroup parent
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-3">
                <div className="text-2xl font-serif text-slate-300 font-black">99</div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Reserved for a genuine parent review. Share your experience with the school office to feature it here.
                </p>
                <div className="text-xs font-semibold text-slate-400">
                  — A waiting space for a review from a Nursery or LKG parent
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* 9. YELLOW CTA BANNER (Screenshot Page 17) */}
      <YellowCTA
        title="Come and see us in person"
        subtitle="The best way to choose a preschool is to visit. Call the Principal or send us a WhatsApp message to arrange a time."
      />
    </div>
  );
};
