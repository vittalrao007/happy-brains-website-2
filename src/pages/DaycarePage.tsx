import React from 'react';
import { Sun, Phone, MessageCircle, Clock, ShieldCheck, Apple, Bed, CheckCircle2, Pencil, Calendar } from 'lucide-react';
import { type PageId } from '../types';
import { useBusinessDetails } from '../context/BusinessDetailsContext';
import { siteImages } from '../assets/images';

interface DaycarePageProps {
  onNavigate: (page: PageId) => void;
}

export const DaycarePage: React.FC<DaycarePageProps> = ({ onNavigate }) => {
  const { details } = useBusinessDetails();

  return (
    <div className="space-y-12 sm:space-y-16 pb-12 pt-6 sm:pt-10">
      {/* 1. HERO SECTION (Screenshot Page 36) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C98D8] tracking-widest uppercase">
            <Sun className="w-3.5 h-3.5" />
            <span>DAYCARE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172A3A] tracking-tight leading-tight">
            Dependable daycare for working families
          </h1>
          <p className="text-sm sm:text-base text-[#172A3A]/85 leading-relaxed">
            Knowing your little one is safe, fed and happily occupied changes your whole day. Our daycare gives children supervised care, play and rest — and gives you peace of mind.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
          {details.contact.phoneTelLink ? (
            <a
              href={details.contact.phoneTelLink}
              className="h-13 px-7 rounded-full bg-[#FFC83D] text-[#172A3A] font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-sm active:scale-98 transition-transform"
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
              className="h-13 px-7 rounded-full bg-[#20A464] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-sm active:scale-98 transition-transform"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Enquire About Daycare</span>
            </a>
          ) : null}
        </div>
      </section>

      {/* 2. THE ESSENTIALS (Screenshot Page 37 & 38) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C98D8] tracking-widest uppercase">
            <Sun className="w-3.5 h-3.5" />
            <span>THE ESSENTIALS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172A3A] tracking-tight">
            What families usually ask first
          </h2>
          <p className="text-sm text-[#687786]">
            These fields are editable — the school fills in the confirmed details.
          </p>
        </div>

        <div className="space-y-4 pt-2">
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-[#DDF5E8] flex items-center justify-center text-[#20A464]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#172A3A]">Age eligibility</h3>
            <p className="text-sm text-[#687786]">
              {details.daycare.ageGroup || '[AGE ELIGIBILITY]'}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-[#DFF2FC] flex items-center justify-center text-[#2C98D8]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#172A3A]">Days & hours</h3>
            <p className="text-sm text-[#687786]">
              {details.daycare.hours || '[DAYCARE HOURS]'}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF6D6] flex items-center justify-center text-[#FFC83D]">
              <Sun className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#172A3A]">Full-day & half-day options</h3>
            <p className="text-sm text-[#687786]">
              [DAYCARE OPTIONS — e.g. both available, to be confirmed]
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-[#FFEBE6] flex items-center justify-center text-[#FF6B6B]">
              <Apple className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#172A3A]">Meals, snacks & water</h3>
            <p className="text-sm text-[#687786]">
              {details.approachAndFacilities.foodAndNutrition || '[MEALS & SNACKS ARRANGEMENT]'}
            </p>
          </div>
        </div>
      </section>

      {/* 3. A DAY IN DAYCARE (Screenshot Page 38 - 41) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C98D8] tracking-widest uppercase">
            <Sun className="w-3.5 h-3.5" />
            <span>A DAY IN DAYCARE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172A3A] tracking-tight">
            A gentle, predictable rhythm
          </h2>
          <p className="text-sm text-[#687786]">
            Children settle best when they know what comes next.
          </p>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#DFF2FC] space-y-8 pt-4">
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-white border-2 border-[#2C98D8] flex items-center justify-center text-[#2C98D8]">
              <Sun className="w-4 h-4" />
            </div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#2C98D8] text-white text-[10px] font-extrabold uppercase">
              MORNING
            </span>
            <h3 className="text-base font-bold text-[#172A3A]">Arrival & free play</h3>
            <p className="text-sm text-[#687786]">
              A calm start with familiar faces and free choice of toys.
            </p>
          </div>

          <div className="relative space-y-2">
            <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-white border-2 border-[#20A464] flex items-center justify-center text-[#20A464]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#20A464] text-white text-[10px] font-extrabold uppercase">
              MID-MORNING
            </span>
            <h3 className="text-base font-bold text-[#172A3A]">Supervised activities</h3>
            <p className="text-sm text-[#687786]">
              Songs, stories, blocks and simple group games.
            </p>
          </div>

          <div className="relative space-y-2">
            <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-white border-2 border-[#FF6B6B] flex items-center justify-center text-[#FF6B6B]">
              <Apple className="w-4 h-4" />
            </div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#FF6B6B] text-white text-[10px] font-extrabold uppercase">
              MIDDAY
            </span>
            <h3 className="text-base font-bold text-[#172A3A]">Meal & quiet time</h3>
            <p className="text-sm text-[#687786]">
              Eating together, then looking at books and winding down.
            </p>
          </div>

          <div className="relative space-y-2">
            <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-white border-2 border-[#2C98D8] flex items-center justify-center text-[#2C98D8]">
              <Bed className="w-4 h-4" />
            </div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#2C98D8] text-white text-[10px] font-extrabold uppercase">
              AFTERNOON
            </span>
            <h3 className="text-base font-bold text-[#172A3A]">Rest & nap arrangements</h3>
            <p className="text-sm text-[#687786]">
              A quiet space for naps, with supervision throughout.
            </p>
          </div>

          <div className="relative space-y-2">
            <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-white border-2 border-[#FFC83D] flex items-center justify-center text-[#FFC83D]">
              <Sun className="w-4 h-4" />
            </div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#FFC83D] text-[#172A3A] text-[10px] font-extrabold uppercase">
              LATE AFTERNOON
            </span>
            <h3 className="text-base font-bold text-[#172A3A]">Evening play & snack</h3>
            <p className="text-sm text-[#687786]">
              Gentle play, a snack, and getting ready to go home.
            </p>
          </div>

          <div className="relative space-y-2">
            <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-white border-2 border-[#20A464] flex items-center justify-center text-[#20A464]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#20A464] text-white text-[10px] font-extrabold uppercase">
              EVENING
            </span>
            <h3 className="text-base font-bold text-[#172A3A]">Pickup & handover</h3>
            <p className="text-sm text-[#687786]">
              Children are handed over to parents or authorised guardians only.
            </p>
          </div>
        </div>

        <div className="reference-notice-box p-5 space-y-2">
          <div className="flex items-start gap-3">
            <Pencil className="w-5 h-5 text-[#2C98D8] shrink-0 mt-0.5" />
            <p className="text-xs text-[#2C98D8] leading-relaxed">
              This daily routine is an illustrative example for the administrator — the school confirms its actual schedule and timings. [{details.daycare.hours || 'DAYCARE HOURS'}]
            </p>
          </div>
        </div>
      </section>

      {/* 4. CARE, SAFETY & HANDOVER (Screenshot Page 41 - 43) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C98D8] tracking-widest uppercase">
            <Sun className="w-3.5 h-3.5" />
            <span>CARE, SAFETY & HANDOVER</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172A3A] tracking-tight">
            Small details that matter to parents
          </h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3.5 p-4 bg-white rounded-2xl border border-slate-100">
            <ShieldCheck className="w-5 h-5 text-[#20A464] shrink-0 mt-0.5" />
            <p className="text-sm text-[#172A3A]/85 leading-relaxed">
              Children are supervised at all times by the daycare staff.
            </p>
          </div>

          <div className="flex items-start gap-3.5 p-4 bg-white rounded-2xl border border-slate-100">
            <ShieldCheck className="w-5 h-5 text-[#20A464] shrink-0 mt-0.5" />
            <p className="text-sm text-[#172A3A]/85 leading-relaxed">
              Pickup is only to parents or guardians the school has been told about — please share authorised pickup details with the office.
            </p>
          </div>

          <div className="flex items-start gap-3.5 p-4 bg-white rounded-2xl border border-slate-100">
            <ShieldCheck className="w-5 h-5 text-[#20A464] shrink-0 mt-0.5" />
            <p className="text-sm text-[#172A3A]/85 leading-relaxed">
              Emergency contact procedures apply: if something happens, parents are contacted immediately using the numbers on file.
            </p>
          </div>

          <div className="flex items-start gap-3.5 p-4 bg-white rounded-2xl border border-slate-100">
            <ShieldCheck className="w-5 h-5 text-[#20A464] shrink-0 mt-0.5" />
            <p className="text-sm text-[#172A3A]/85 leading-relaxed">
              Rest and nap arrangements for daycare children are available during the day.
            </p>
          </div>

          <div className="flex items-start gap-3.5 p-4 bg-white rounded-2xl border border-slate-100">
            <ShieldCheck className="w-5 h-5 text-[#20A464] shrink-0 mt-0.5" />
            <p className="text-sm text-[#172A3A]/85 leading-relaxed">
              Indoor and outdoor play facilities are used for supervised activity — {details.approachAndFacilities.facilities || '[FACILITIES TO BE CONFIRMED BY THE SCHOOL]'}.
            </p>
          </div>
        </div>

        <div className="reference-notice-box p-5 space-y-2">
          <div className="flex items-start gap-3">
            <Pencil className="w-5 h-5 text-[#2C98D8] shrink-0 mt-0.5" />
            <p className="text-xs text-[#2C98D8] leading-relaxed">
              Pickup and drop-off arrangements, emergency procedures and enrollment requirements are confirmed by the school office. [PICKUP & DROP-OFF DETAILS] [ADMISSION DETAILS]
            </p>
          </div>
        </div>

        {/* Photos Collage (Screenshot Page 43) */}
        <div className="relative pt-4">
          <div className="rounded-3xl overflow-hidden aspect-4/3 bg-slate-100 shadow-sm">
            <img
              src={siteImages.daycareNap}
              alt="Daycare rest and quiet nap area"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 sm:right-4 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-white">
            <img
              src={siteImages.daycareSnack}
              alt="Toddler having healthy snack at daycare"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. FEES & ENROLLMENT (Screenshot Page 44) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto pt-8">
        <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-100 shadow-xs space-y-4 text-center">
          <div className="w-12 h-12 rounded-2xl bg-[#FFF6D6] flex items-center justify-center text-[#FFC83D] mx-auto">
            <Calendar className="w-6 h-6" />
          </div>

          <h3 className="text-2xl font-extrabold text-[#172A3A]">
            Fees & enrollment
          </h3>

          <p className="text-sm text-[#172A3A]/85 leading-relaxed max-w-md mx-auto">
            Fee details and enrollment requirements are shared directly by the school. [FEE DETAILS] Call or WhatsApp to request the current fee structure and to check seats.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            {details.contact.phoneTelLink ? (
              <a
                href={details.contact.phoneTelLink}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FFC83D] text-[#172A3A] font-extrabold text-sm flex items-center justify-center gap-2 active:scale-98 transition-transform"
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
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#20A464] text-white font-extrabold text-sm flex items-center justify-center gap-2 active:scale-98 transition-transform"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp the Principal</span>
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
};
