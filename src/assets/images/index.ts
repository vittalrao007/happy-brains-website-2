/**
 * Centralized image asset registry for the preschool website
 * Uses direct ESM imports so Vite automatically bundles and hashes images
 * into the production dist/assets/ folder upon building.
 */

import heroClassroom from './hero_preschool_classroom_1792569244406.jpg';
import artsCrafts from './preschool_arts_crafts_1792569244421.jpg';
import outdoorPlay from './preschool_outdoor_play_1792569244655.jpg';
import daycareNap from './daycare_peaceful_nap_1792569246802.jpg';
import daycareSnack from './daycare_healthy_snack_1792569245650.jpg';

export const siteImages = {
  heroClassroom,
  artsCrafts,
  outdoorPlay,
  daycareNap,
  daycareSnack,
  
  // Public static paths as additional fallback
  publicHero: '/images/hero_preschool_classroom.jpg',
  publicArts: '/images/preschool_arts_crafts.jpg',
  publicPlay: '/images/preschool_outdoor_play.jpg',
  publicNap: '/images/daycare_peaceful_nap.jpg',
  publicSnack: '/images/daycare_healthy_snack.jpg',
  logoSun: '/assets/logo.svg',
};

export default siteImages;
