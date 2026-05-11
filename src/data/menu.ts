import { TranslationKeys } from './translations';

export interface MenuItem {
  name: string;
  nameKn?: string;
  price: number;
  desc?: string;
}

export interface MenuCategory {
  id: string;
  labelKey: keyof TranslationKeys;
  accent: 'ember' | 'gold' | 'ocean';
  emblem: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    id: 'prawns',
    labelKey: 'catPrawns',
    accent: 'ember',
    emblem: '◐',
    items: [
      { name: 'Prawns Kabab', nameKn: 'ಸಿಗಡಿ ಕಬಾಬ್', price: 280 },
      { name: 'Prawns Chilli', nameKn: 'ಸಿಗಡಿ ಚಿಲ್ಲಿ', price: 280 },
      { name: 'Prawns Pepper Dry', nameKn: 'ಸಿಗಡಿ ಪೆಪ್ಪರ್ ಡ್ರೈ', price: 280 },
      { name: 'Prawns Dry', nameKn: 'ಸಿಗಡಿ ಡ್ರೈ', price: 280 },
      { name: 'Prawns Ghee Roast', nameKn: 'ಸಿಗಡಿ ಘೀ ರೋಸ್ಟ್', price: 280 },
    ],
  },
  {
    id: 'crab',
    labelKey: 'catCrab',
    accent: 'ember',
    emblem: '✦',
    items: [
      { name: 'Crab Chilli', nameKn: 'ಏಡಿ ಚಿಲ್ಲಿ', price: 320 },
      { name: 'Crab Kabab', nameKn: 'ಏಡಿ ಕಬಾಬ್', price: 320 },
      { name: 'Crab Masala Fry', nameKn: 'ಏಡಿ ಮಸಾಲೆ ಫ್ರೈ', price: 320 },
      { name: 'Crab Ghee Roast', nameKn: 'ಏಡಿ ಘೀ ರೋಸ್ಟ್', price: 320 },
    ],
  },
  {
    id: 'boneless',
    labelKey: 'catBoneless',
    accent: 'ocean',
    emblem: '◇',
    items: [
      { name: 'Fish Chilli', nameKn: 'ಮೀನು ಚಿಲ್ಲಿ', price: 340 },
      { name: 'Fish Masala Fry', nameKn: 'ಮೀನು ಮಸಾಲೆ ಫ್ರೈ', price: 340 },
      { name: 'Fish Pepper Dry', nameKn: 'ಮೀನು ಪೆಪ್ಪರ್ ಡ್ರೈ', price: 340 },
      { name: 'Fish Kurthari', nameKn: 'ಮೀನು ಕುರ್ತರಿ', price: 340 },
    ],
  },
  {
    id: 'fish-curry',
    labelKey: 'catFishCurry',
    accent: 'gold',
    emblem: '◊',
    items: [
      { name: 'Banguda Fish Curry', nameKn: 'ಬಂಗಡಾ ಮೀನು ಸಾರು', price: 220 },
      { name: 'Anjal Fish Curry', nameKn: 'ಅಂಜಲ್ ಮೀನು ಸಾರು', price: 220 },
    ],
  },
  {
    id: 'bangda',
    labelKey: 'catBangda',
    accent: 'ocean',
    emblem: '⌬',
    items: [
      { name: 'Bangda Tawa Fry', price: 150 },
      { name: 'Bangda Masala Fry', price: 170 },
      { name: 'Bangda Dry Fry', price: 175 },
      { name: 'Bangda Rawa Fry', price: 175 },
      { name: 'Bangda Tandoori', price: 175 },
    ],
  },
  {
    id: 'anjal',
    labelKey: 'catAnjal',
    accent: 'ocean',
    emblem: '⊛',
    items: [
      { name: 'Anjal Tawa Fry', price: 300 },
      { name: 'Anjal Masala Fry', price: 320 },
      { name: 'Anjal Oil Fry', price: 320 },
      { name: 'Anjal Rawa Fry', price: 320 },
    ],
  },
  {
    id: 'pamphlet',
    labelKey: 'catPamphlet',
    accent: 'ocean',
    emblem: '◯',
    items: [
      { name: 'Pamphlet Tawa Fry', price: 250 },
      { name: 'Pamphlet Masala Fry', price: 270 },
      { name: 'Pamphlet Dry Fry', price: 270 },
      { name: 'Pamphlet Rawa Fry', price: 270 },
    ],
  },
  {
    id: 'khane',
    labelKey: 'catKhane',
    accent: 'ocean',
    emblem: '⌖',
    items: [
      { name: 'Khane Masala Fry', price: 250 },
      { name: 'Khane Oil Fry', price: 250 },
    ],
  },
  {
    id: 'chicken-dry',
    labelKey: 'catChickenDry',
    accent: 'ember',
    emblem: '✧',
    items: [
      { name: 'Chicken Kabab', price: 180 },
      { name: 'Chicken Chilly', price: 200 },
      { name: 'Chicken Manchuri', price: 200 },
      { name: 'Chicken 65', price: 200 },
      { name: 'Chicken Pudina', price: 200 },
      { name: 'Lemon Chicken', price: 200 },
      { name: 'Garlic Chicken', price: 200 },
      { name: 'Chicken Fry', price: 200 },
      { name: 'Chicken Ghee Roast', price: 250 },
      { name: 'Chicken Lolly Pop', price: 250 },
    ],
  },
  {
    id: 'chicken-gravy',
    labelKey: 'catChickenGravy',
    accent: 'ember',
    emblem: '◈',
    items: [
      { name: 'Chicken Masala', price: 220 },
      { name: 'Butter Chicken', price: 250 },
      { name: 'Chicken Kolhapuri', price: 250 },
      { name: 'Chicken Ghee Roast', price: 250 },
    ],
  },
  {
    id: 'tandoori',
    labelKey: 'catTandoori',
    accent: 'ember',
    emblem: '☼',
    items: [
      { name: 'Chicken Tikka', price: 220 },
      { name: 'Tandoori Chicken Half', price: 320 },
      { name: 'Tandoori Chicken Full', price: 580 },
    ],
  },
  {
    id: 'egg',
    labelKey: 'catEgg',
    accent: 'gold',
    emblem: '○',
    items: [
      { name: 'Egg Burji', price: 130 },
      { name: 'Egg Masala', price: 130 },
    ],
  },
  {
    id: 'beef-mutton',
    labelKey: 'catBeefMutton',
    accent: 'ember',
    emblem: '⊕',
    items: [
      { name: 'Beef Dry Fry', price: 200 },
      { name: 'Mutton Ghee Roast', price: 350 },
      { name: 'Mutton Masala', price: 320 },
    ],
  },
  {
    id: 'veg-dry',
    labelKey: 'catVegDry',
    accent: 'gold',
    emblem: '✿',
    items: [
      { name: 'Paneer Butter Masala', price: 200 },
    ],
  },
  {
    id: 'veg-rice',
    labelKey: 'catVegRice',
    accent: 'gold',
    emblem: '◉',
    items: [
      { name: 'Veg Biryani', price: 140 },
      { name: 'Veg Fried Rice', price: 130 },
    ],
  },
  {
    id: 'non-veg-rice',
    labelKey: 'catNonVegRice',
    accent: 'ember',
    emblem: '✺',
    items: [
      { name: 'Chicken Biryani', price: 220 },
      { name: 'Mutton Biryani', price: 350 },
      { name: 'Chicken Fried Rice', price: 200 },
    ],
  },
  {
    id: 'roti',
    labelKey: 'catRoti',
    accent: 'gold',
    emblem: '◐',
    items: [
      { name: 'Roti', price: 30 },
      { name: 'Butter Naan', price: 70 },
      { name: 'Garlic Naan', price: 90 },
    ],
  },
];

export const featuredDishes = [
  {
    id: 'ghee-roast',
    title: 'Mutton Ghee Roast',
    tag: 'Signature',
    price: 350,
    img: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=1200&q=80',
    desc: 'Slow-cooked in clarified butter, hand-ground masalas, fire-finished.',
  },
  {
    id: 'tandoori',
    title: 'Tandoori Chicken Full',
    tag: 'Tandoor',
    price: 580,
    img: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1200&q=80',
    desc: 'Yogurt-marinated overnight, charred in clay over coal.',
  },
  {
    id: 'pamphlet',
    title: 'Pamphlet Rawa Fry',
    tag: 'Coastal',
    price: 270,
    img: 'https://images.unsplash.com/photo-1609858390907-e9ab842b147f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Whole pomfret, semolina-crusted, pan-fried in coconut oil.',
  },
  {
    id: 'crab-chilli',
    title: 'Crab Chilli',
    tag: 'Spicy',
    price: 320,
    img: 'https://images.unsplash.com/photo-1653295753255-c439bcf20012?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Indo-Chinese style — wok-tossed with green chillies and pepper.',
  },
  {
    id: 'prawns-ghee',
    title: 'Prawns Ghee Roast',
    tag: 'Signature',
    price: 280,
    img: 'https://images.unsplash.com/photo-1746212087584-edcdb21f44b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Mangalorean-style, smoky red chilli ghee glaze.',
  },
  {
    id: 'biryani',
    title: 'Mutton Biryani',
    tag: 'Slow Cooked',
    price: 350,
    img: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=1200&q=80',
    desc: 'Dum-cooked in copper handi, layered with saffron and bone broth.',
  },
];
