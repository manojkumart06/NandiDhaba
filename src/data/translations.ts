export type Locale = 'en' | 'kn';

export interface TranslationKeys {
  // Nav
  navHome: string;
  navSeafood: string;
  navSpecials: string;
  navExperience: string;
  navGallery: string;
  navMenu: string;
  navVisit: string;
  reserveTable: string;

  // Hero
  heroEyebrow: string;
  heroHeadline1: string;
  heroHeadline2: string;
  heroSubheadline: string;
  exploreMenu: string;
  scrollToBegin: string;

  // Showcase
  showcaseEyebrow: string;
  showcaseHeadline: string;
  showcaseSub: string;
  freshCatch: string;

  // Grill
  grillEyebrow: string;
  grillHeadline: string;
  grillSub: string;

  // Dhaba
  dhabaEyebrow: string;
  dhabaHeadline: string;
  dhabaSub: string;

  // Menu
  menuEyebrow: string;
  menuHeadline: string;
  menuSub: string;
  allCategories: string;

  // Gallery
  galleryEyebrow: string;
  galleryHeadline: string;

  // Visit
  visitEyebrow: string;
  visitHeadline: string;
  address: string;
  hours: string;
  hoursValue: string;
  callUs: string;
  whatsapp: string;
  getDirections: string;

  // Reservation
  reservationTitle: string;
  reservationSub: string;
  fullName: string;
  phoneNumber: string;
  guests: string;
  dateTime: string;
  specialRequests: string;
  confirmReservation: string;
  cancel: string;

  // Footer
  footerTagline: string;
  followUs: string;
  rightsReserved: string;

  // Categories
  catPrawns: string;
  catCrab: string;
  catBoneless: string;
  catFishCurry: string;
  catBangda: string;
  catAnjal: string;
  catPamphlet: string;
  catKhane: string;
  catChickenDry: string;
  catChickenGravy: string;
  catNatiChicken: string;
  catTandoori: string;
  catKauju: string;
  catEggDry: string;
  catEggMasala: string;
  catMuttonDry: string;
  catMuttonGravy: string;
  catVegDry: string;
  catVegGravy: string;
  catVegRice: string;
  catNonVegRice: string;
  catRoti: string;
  catJuice: string;
  catSilverFish: string;
  catMathiFish: string;
  catFishBiriyani: string;
}

export const translations: Record<Locale, TranslationKeys> = {
  en: {
    navHome: 'Home',
    navSeafood: 'Seafood',
    navSpecials: 'Specials',
    navExperience: 'Experience',
    navGallery: 'Gallery',
    navMenu: 'Menu',
    navVisit: 'Visit Us',
    reserveTable: 'Reserve Table',

    heroEyebrow: 'Devanahalli · Karahalli · Karnataka',
    heroHeadline1: 'Where Fire Meets',
    heroHeadline2: 'Fresh Catch.',
    heroSubheadline:
      'Fresh seafood, authentic dhaba flavors, smoky grills and unforgettable dining moments — minutes from the heart of Devanahalli.',
    exploreMenu: 'Explore Menu',
    scrollToBegin: 'Scroll to begin the story',

    showcaseEyebrow: 'The Catch',
    showcaseHeadline: 'Fresh From Water To Flame.',
    showcaseSub:
      'Hand-picked from the coast each morning. Cleaned, marinated and kissed by fire — the way the coast intends.',
    freshCatch: 'Fresh today',

    grillEyebrow: 'The Fire',
    grillHeadline: 'Cooked Over Flame. Served With Soul.',
    grillSub:
      'Open-flame grilling with hand-ground masalas. Smoke, char, and char-line — every plate carries the breath of fire.',

    dhabaEyebrow: 'The Dhaba',
    dhabaHeadline: 'A Highway Of Hospitality.',
    dhabaSub:
      'Warm lamps, slow evenings, family long-tables and stories that never finish. The kind of place you don\'t leave — you return to.',

    menuEyebrow: 'The Menu',
    menuHeadline: 'A Coastal Manifesto.',
    menuSub:
      'Eighty plates, one philosophy: respect the catch, honor the fire, feed the soul.',
    allCategories: 'All',

    galleryEyebrow: 'The Frames',
    galleryHeadline: 'Moments In Smoke & Light.',

    visitEyebrow: 'The Place',
    visitHeadline: 'Visit Us.',
    address: 'Devanahalli Main Road, Karahalli, Karnataka',
    hours: 'Open',
    hoursValue: 'Daily · 11:00 AM — 11:30 PM',
    callUs: 'Call Restaurant',
    whatsapp: 'WhatsApp Booking',
    getDirections: 'Get Directions',

    reservationTitle: 'Reserve A Table',
    reservationSub: 'Tell us when you\'re coming. We\'ll keep the fire ready.',
    fullName: 'Full Name',
    phoneNumber: 'Phone Number',
    guests: 'Number of Guests',
    dateTime: 'Date & Time',
    specialRequests: 'Special Requests',
    confirmReservation: 'Confirm Reservation',
    cancel: 'Cancel',

    footerTagline: 'Where the coast comes to dine.',
    followUs: 'Follow the smoke',
    rightsReserved: 'All rights reserved.',

    catPrawns: 'Prawns',
    catCrab: 'Crab',
    catBoneless: 'Boneless Fish',
    catFishCurry: 'Fish Curry',
    catFishBiriyani: 'Fish Biriyani',
    catBangda: 'Bangda Fish',
    catAnjal: 'Angal Fish',
    catPamphlet: 'Pamphlet Fish',
    catKhane: 'Khane Fish',
    catSilverFish: 'Silver Fish',
    catMathiFish: 'Mathi Fish',
    catChickenDry: 'Chicken Dry',
    catChickenGravy: 'Chicken Gravy',
    catNatiChicken: 'Nati Chicken',
    catTandoori: 'Tandoori',
    catKauju: 'Kauju Specials',
    catEggDry: 'Egg Dry',
    catEggMasala: 'Egg Masala',
    catMuttonDry: 'Mutton & Boti Dry',
    catMuttonGravy: 'Mutton & Boti Gravy',
    catVegDry: 'Veg Dry',
    catVegGravy: 'Veg Gravy',
    catVegRice: 'Veg Rice',
    catNonVegRice: 'Non-Veg Rice',
    catRoti: 'Roti & Naan',
    catJuice: 'Fresh Juice',
  },
  kn: {
    navHome: 'ಮುಖಪುಟ',
    navSeafood: 'ಮೀನು',
    navSpecials: 'ವಿಶೇಷಗಳು',
    navExperience: 'ಅನುಭವ',
    navGallery: 'ಚಿತ್ರಸಂಗ್ರಹ',
    navMenu: 'ಮೆನು',
    navVisit: 'ಭೇಟಿ ನೀಡಿ',
    reserveTable: 'ಟೇಬಲ್ ಕಾಯ್ದಿರಿಸಿ',

    heroEyebrow: 'ದೇವನಹಳ್ಳಿ · ಕರಹಳ್ಳಿ · ಕರ್ನಾಟಕ',
    heroHeadline1: 'ಬೆಂಕಿ ಭೇಟಿಯಾಗುವಲ್ಲಿ',
    heroHeadline2: 'ತಾಜಾ ಮೀನು.',
    heroSubheadline:
      'ತಾಜಾ ಸಮುದ್ರಾಹಾರ, ಪ್ರಾಮಾಣಿಕ ಧಾಬಾ ರುಚಿ, ಹೊಗೆಯ ಗ್ರಿಲ್‌ಗಳು ಮತ್ತು ಮರೆಯಲಾಗದ ಊಟದ ಕ್ಷಣಗಳು — ದೇವನಹಳ್ಳಿಯ ಹೃದಯದಿಂದ ಕೆಲವೇ ನಿಮಿಷಗಳ ದೂರ.',
    exploreMenu: 'ಮೆನು ನೋಡಿ',
    scrollToBegin: 'ಕಥೆ ಆರಂಭಿಸಲು ಸ್ಕ್ರೋಲ್ ಮಾಡಿ',

    showcaseEyebrow: 'ಬಲೆಯ ಮೀನು',
    showcaseHeadline: 'ನೀರಿನಿಂದ ಬೆಂಕಿಗೆ ತಾಜಾ.',
    showcaseSub:
      'ಪ್ರತಿದಿನ ಬೆಳಗ್ಗೆ ಕರಾವಳಿಯಿಂದ ಕೈಯಾರೆ ಆಯ್ದು. ಸ್ವಚ್ಛಗೊಳಿಸಿ, ಮಸಾಲೆ ಹಚ್ಚಿ, ಬೆಂಕಿಯ ಸ್ಪರ್ಶ.',
    freshCatch: 'ಇಂದು ತಾಜಾ',

    grillEyebrow: 'ಬೆಂಕಿ',
    grillHeadline: 'ಬೆಂಕಿಯಲ್ಲಿ ಬೇಯಿಸಿ. ಆತ್ಮದಿಂದ ಬಡಿಸಿ.',
    grillSub:
      'ತೆರೆದ ಬೆಂಕಿಯ ಗ್ರಿಲ್ಲಿಂಗ್ ಮತ್ತು ಕೈಯಿಂದ ರುಬ್ಬಿದ ಮಸಾಲೆಗಳು. ಪ್ರತಿ ತಟ್ಟೆಯೂ ಬೆಂಕಿಯ ಉಸಿರನ್ನು ಹೊಂದಿದೆ.',

    dhabaEyebrow: 'ಧಾಬಾ',
    dhabaHeadline: 'ಆತಿಥ್ಯದ ಹೆದ್ದಾರಿ.',
    dhabaSub:
      'ಬೆಚ್ಚನೆಯ ದೀಪಗಳು, ನಿಧಾನ ಸಂಜೆಗಳು, ಕುಟುಂಬದ ಉದ್ದನೆಯ ಮೇಜುಗಳು ಮತ್ತು ಕೊನೆಯಾಗದ ಕಥೆಗಳು.',

    menuEyebrow: 'ಮೆನು',
    menuHeadline: 'ಕರಾವಳಿಯ ಪ್ರಣಾಳಿಕೆ.',
    menuSub: 'ಎಂಬತ್ತು ತಟ್ಟೆಗಳು, ಒಂದು ತತ್ವ: ಮೀನನ್ನು ಗೌರವಿಸಿ, ಬೆಂಕಿಯನ್ನು ಪೂಜಿಸಿ.',
    allCategories: 'ಎಲ್ಲಾ',

    galleryEyebrow: 'ಚೌಕಟ್ಟುಗಳು',
    galleryHeadline: 'ಹೊಗೆ ಮತ್ತು ಬೆಳಕಿನಲ್ಲಿ ಕ್ಷಣಗಳು.',

    visitEyebrow: 'ಸ್ಥಳ',
    visitHeadline: 'ಭೇಟಿ ನೀಡಿ.',
    address: 'ದೇವನಹಳ್ಳಿ ಮುಖ್ಯ ರಸ್ತೆ, ಕರಹಳ್ಳಿ, ಕರ್ನಾಟಕ',
    hours: 'ತೆರೆದಿದೆ',
    hoursValue: 'ಪ್ರತಿದಿನ · 11:00 AM — 11:30 PM',
    callUs: 'ಫೋನ್ ಮಾಡಿ',
    whatsapp: 'ವಾಟ್ಸಾಪ್ ಬುಕಿಂಗ್',
    getDirections: 'ದಾರಿ ಪಡೆಯಿರಿ',

    reservationTitle: 'ಟೇಬಲ್ ಕಾಯ್ದಿರಿಸಿ',
    reservationSub: 'ನೀವು ಯಾವಾಗ ಬರುತ್ತೀರಿ ತಿಳಿಸಿ. ನಾವು ಬೆಂಕಿಯನ್ನು ಸಿದ್ಧವಾಗಿಡುತ್ತೇವೆ.',
    fullName: 'ಪೂರ್ಣ ಹೆಸರು',
    phoneNumber: 'ಫೋನ್ ಸಂಖ್ಯೆ',
    guests: 'ಅತಿಥಿಗಳ ಸಂಖ್ಯೆ',
    dateTime: 'ದಿನಾಂಕ ಮತ್ತು ಸಮಯ',
    specialRequests: 'ವಿಶೇಷ ವಿನಂತಿಗಳು',
    confirmReservation: 'ಕಾಯ್ದಿರಿಸುವಿಕೆ ದೃಢೀಕರಿಸಿ',
    cancel: 'ರದ್ದು',

    footerTagline: 'ಕರಾವಳಿ ಊಟಕ್ಕೆ ಬರುವ ಸ್ಥಳ.',
    followUs: 'ಹೊಗೆಯನ್ನು ಅನುಸರಿಸಿ',
    rightsReserved: 'ಎಲ್ಲ ಹಕ್ಕುಗಳು ಸಂರಕ್ಷಿತ.',

    catPrawns: 'ಸಿಗಡಿ',
    catCrab: 'ಏಡಿ',
    catBoneless: 'ಮೂಳೆ ಇಲ್ಲದ ಮೀನು',
    catFishCurry: 'ಮೀನು ಸಾರು',
    catFishBiriyani: 'ಮೀನು ಬಿರಿಯಾನಿ',
    catBangda: 'ಬಾಂಗಡ ಮೀನು',
    catAnjal: 'ಎಂಜಲ್ ಮೀನು',
    catPamphlet: 'ಪಾಂಪ್ಲೆಟ್ ಮೀನು',
    catKhane: 'ಖಾನೆ ಮೀನು',
    catSilverFish: 'ಸಿಲ್ವರ್ ಮೀನು',
    catMathiFish: 'ಮತ್ತಿ ಮೀನು',
    catChickenDry: 'ಚಿಕನ್ ಡ್ರೈ',
    catChickenGravy: 'ಚಿಕನ್ ಗ್ರೇವಿ',
    catNatiChicken: 'ನಾಟಿ ಚಿಕನ್',
    catTandoori: 'ತಂದೂರಿ',
    catKauju: 'ಕಾಜು ವಿಶೇಷಗಳು',
    catEggDry: 'ಎಗ್ ಡ್ರೈ',
    catEggMasala: 'ಎಗ್ ಮಸಾಲ',
    catMuttonDry: 'ಮಟನ್ ಮತ್ತು ಬೋಟಿ ಡ್ರೈ',
    catMuttonGravy: 'ಮಟನ್ ಮತ್ತು ಬೋಟಿ ಗ್ರೇವಿ',
    catVegDry: 'ಸಸ್ಯಾಹಾರಿ ಡ್ರೈ',
    catVegGravy: 'ಸಸ್ಯಾಹಾರಿ ಗ್ರೇವಿ',
    catVegRice: 'ಸಸ್ಯಾಹಾರಿ ಅನ್ನ',
    catNonVegRice: 'ಮಾಂಸಾಹಾರಿ ಅನ್ನ',
    catRoti: 'ರೋಟಿ ಮತ್ತು ನಾನ್',
    catJuice: 'ತಾಜಾ ಜ್ಯೂಸ್',
  },
};
