import React, { useState } from 'react';
import { Sun, Camera, X, ZoomIn } from 'lucide-react';
import { type PageId } from '../types';
import { useBusinessDetails } from '../context/BusinessDetailsContext';
import { siteImages } from '../assets/images';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
}

interface GalleryPhoto {
  id: string;
  category: 'Classrooms' | 'Learning' | 'Art & Craft' | 'Play' | 'Daycare';
  title: string;
  image: string;
}

export const GalleryPage: React.FC<GalleryPageProps> = () => {
  const { details } = useBusinessDetails();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const categories = ['All', 'Classrooms', 'Learning', 'Art & Craft', 'Play', 'Daycare'];

  const photos: GalleryPhoto[] = [
    {
      id: 'photo-1',
      category: 'Classrooms',
      title: 'Story circle with caring educators',
      image: siteImages.heroClassroom,
    },
    {
      id: 'photo-2',
      category: 'Learning',
      title: 'Interactive circle discussion',
      image: siteImages.heroClassroom,
    },
    {
      id: 'photo-3',
      category: 'Learning',
      title: 'Numeracy & shape sorting blocks',
      image: siteImages.heroClassroom,
    },
    {
      id: 'photo-4',
      category: 'Art & Craft',
      title: 'Vibrant finger painting & sensory play',
      image: siteImages.artsCrafts,
    },
    {
      id: 'photo-5',
      category: 'Art & Craft',
      title: 'Fine motor brush exploration',
      image: siteImages.artsCrafts,
    },
    {
      id: 'photo-6',
      category: 'Play',
      title: 'Climbing rope adventure in the garden',
      image: siteImages.outdoorPlay,
    },
    {
      id: 'photo-7',
      category: 'Play',
      title: 'Outdoor sand & climbing fun',
      image: siteImages.outdoorPlay,
    },
    {
      id: 'photo-8',
      category: 'Daycare',
      title: 'Restful afternoon nap in cozy cot',
      image: siteImages.daycareNap,
    },
    {
      id: 'photo-9',
      category: 'Daycare',
      title: 'Healthy fruit snacks & quiet lunch',
      image: siteImages.daycareSnack,
    },
  ];

  const filteredPhotos =
    selectedCategory === 'All'
      ? photos
      : photos.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-10 sm:space-y-14 pb-14 pt-6 sm:pt-10">
      {/* 1. HERO SECTION (Screenshot Page 52 & 53) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto space-y-5">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C98D8] tracking-widest uppercase">
            <Sun className="w-3.5 h-3.5" />
            <span>GALLERY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172A3A] tracking-tight leading-tight">
            Moments from our school
          </h1>
          <p className="text-sm sm:text-base text-[#172A3A]/85 leading-relaxed">
            A peek into everyday life at {details.identity.name} — learning, playing, creating and resting.
          </p>
        </div>

        {/* Notice box */}
        <div className="reference-notice-box p-5 space-y-2">
          <div className="flex items-start gap-3">
            <Camera className="w-5 h-5 text-[#2C98D8] shrink-0 mt-0.5" />
            <p className="text-xs text-[#2C98D8] leading-relaxed">
              Sample photographs are shown until real school photos are provided. Photographs of children are only published with appropriate parental or guardian permission.
            </p>
          </div>
        </div>

        {/* Filter Badges / Tabs (Screenshot Page 53) */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#172A3A] text-white shadow-xs'
                    : 'bg-white text-[#172A3A] border border-slate-200/80 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. PHOTO GRID (Screenshots Page 53 - 55) */}
      <section className="px-4 sm:px-6 max-w-xl mx-auto">
        <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
          {filteredPhotos.map((photo) => (
            <button
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-square bg-slate-100 shadow-xs border border-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC83D] cursor-pointer text-left"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-[11px] font-semibold text-white line-clamp-1">
                  {photo.title}
                </span>
                <ZoomIn className="w-4 h-4 text-white ml-auto shrink-0 mb-0.5" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 3. LIGHTBOX MODAL */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-4/3 bg-slate-900">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#2C98D8]">
                  {activePhoto.category}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-[#172A3A]">
                  {activePhoto.title}
                </h4>
              </div>
              <button
                onClick={() => setActivePhoto(null)}
                className="px-4 py-1.5 rounded-full bg-slate-100 text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
