import { PortfolioItem, ServiceItem, ExperienceConcept } from '../types';

export const BRAND_INFO = {
  name: 'Avantaara',
  headline: 'Two ways to make a moment unforgettable.',
  subheadline:
    'A considered creative studio dedicated to personal gatherings and full-scale celebrations.',
  plannerCredit: '@ankiitohdar',
  plannerName: 'Ankit Ohdar',
  instagramUrl: 'https://instagram.com/avantaaraevents',
  phoneFormatted: '+91 85099 05590',
  phoneRaw: '+918509905590',
  whatsappUrl: 'https://wa.me/918509905590',
  defaultLocation: 'Jharkhand and destination venues across India',
};

export const IMAGES = {
  landingExperiences: '/src/assets/images/landing_experiences_1790875804954.jpg',
  landingEvents: '/src/assets/images/landing_events_1790875818487.jpg',
  expHero: '/src/assets/images/exp_hero_gathering_1790875831121.jpg',
  eventsHero: '/src/assets/images/events_hero_celebration_1790875843755.jpg',
  bridalEntry: '/src/assets/images/portfolio_bridal_entry_1790875891620.jpg',
  jharkhandVenue: '/src/assets/images/portfolio_jharkhand_venue_1790875904463.jpg',
  varmala: '/src/assets/images/portfolio_varmala_1790875854301.jpg',
  sangeet: '/src/assets/images/portfolio_sangeet_1790875917448.jpg',
  haldi: '/src/assets/images/portfolio_haldi_1790875928632.jpg',
  founderPhoto: '/src/assets/images/ankiit_ohdar.jpg',
};

export const FOUNDER_INFO = {
  sectionHeading: 'Meet the Founder',
  name: 'ANKIIT OHDAR',
  role: 'Founder & Event Planner',
  bio: 'Ankiit Ohdar is the founder of Avantaara Events and a Ranchi-based event planner. His work includes weddings and personal celebrations, with visible event themes ranging from bridal entries and varmala ceremonies to Sangeet, Haldi décor and destination wedding planning.',
  imageSrc: '/src/assets/images/ankiit_ohdar.jpg',
  alt: 'Ankiit Ohdar, founder of Avantaara Events.',
};

export const EVENT_SERVICES: ServiceItem[] = [
  {
    id: 'weddings',
    title: 'Weddings',
    subtitle: 'Ceremonies, varmalas, and multi-day celebrations',
    description:
      'From intimate vow exchanges to multi-day weddings, we design the stages, coordinate rituals, and manage vendors so families can be fully present.',
    highlights: [
      'Timeline planning and vendor management',
      'Mandap and ceremony stage styling',
      'Bridal entry and procession timing',
      'Guest hospitality and on-ground coordination',
    ],
  },
  {
    id: 'anniversaries',
    title: 'Anniversaries',
    subtitle: 'Milestone celebrations with close family and friends',
    description:
      'Thoughtful milestone evenings shaped around warm lighting, beautiful dining tables, family toasts, and relaxed hospitality.',
    highlights: [
      'Seated dinner table styling and lighting',
      'Memory displays and family toasts',
      'Acoustic music and entertainment coordination',
      'Private venue and courtyard arrangements',
    ],
  },
  {
    id: 'birthdays',
    title: 'Birthdays',
    subtitle: 'Distinctive gatherings for milestone years',
    description:
      'From 30th and 50th celebrations to children’s parties, we plan cohesive themes, ambient lighting, dessert displays, and smooth hosting.',
    highlights: [
      'Custom theme design and decor setups',
      'Catering coordination and dessert art',
      'Sound, music, and lighting management',
      'Interactive guest stations and favors',
    ],
  },
  {
    id: 'housewarmings',
    title: 'Housewarmings',
    subtitle: 'Griha Pravesh and welcoming blessings',
    description:
      'Auspicious home celebrations styled with fresh floral torans, traditional brass urlis, havan space arrangements, and welcoming hospitality.',
    highlights: [
      'Floral entrance and home decor',
      'Puja and havan area arrangements',
      'Banquet layout and buffet flow',
      'Comfortable hosting for family and guests',
    ],
  },
  {
    id: 'baby-showers',
    title: 'Baby Showers',
    subtitle: 'Godh Bharai and joyful family blessings',
    description:
      'Welcoming new chapters with soft floral styling, dedicated comfortable seating for the mother-to-be, and relaxed celebration games.',
    highlights: [
      'Gentle floral backdrops and photo corners',
      'Comfort-centered seating for the mother-to-be',
      'Customized celebration games',
      'Welcoming tables and guest keepsakes',
    ],
  },
  {
    id: 'cultural-social',
    title: 'Cultural & Social Celebrations',
    subtitle: 'Festive functions and community gatherings',
    description:
      'Traditional festivals, family gatherings, and social receptions delivered with cultural respect, refined styling, and organized flow.',
    highlights: [
      'Traditional ceremony and ritual coordination',
      'Layout and seating for larger groups',
      'Lighting, staging, and acoustics',
      'Welcoming hospitality and ceremony pacing',
    ],
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'bridal-entry',
    title: 'Bridal Entry',
    subtitle: 'Ceremonial walk & atmospheric staging',
    category: 'Ceremony Production',
    caption:
      'Staged entries with gentle lighting, floral chadar arrangements, and coordinated music timing for a memorable walk.',
    imageSrc: IMAGES.bridalEntry,
    isPlaceholder: true,
    notes:
      'Editable portfolio card. Replace this placeholder image with your official bridal entry photography.',
  },
  {
    id: 'jharkhand-venue',
    title: 'Destination Wedding Venue in Jharkhand',
    subtitle: 'Scenic regional destination showcase',
    category: 'Venue & Destination Curation',
    caption:
      'Celebration setups designed to complement Jharkhand’s natural hills, stone architecture, and expansive open courtyards.',
    imageSrc: IMAGES.jharkhandVenue,
    isPlaceholder: true,
    notes:
      'Editable portfolio card representing Jharkhand destination venues highlighted on @avantaaraevents.',
  },
  {
    id: 'daytime-varmala',
    title: 'Daytime Varmala',
    subtitle: 'Sunlit ceremonial elegance',
    category: 'Varmala Production',
    caption:
      'Sun-drenched ceremony stages framed with fresh pastel marigolds, tuberoses, and heritage courtyards.',
    imageSrc: IMAGES.varmala,
    isPlaceholder: true,
    notes:
      'Editable portfolio card. Replace with high-resolution photos of past daytime varmala ceremonies.',
  },
  {
    id: 'sangeet-production',
    title: 'Sangeet Production',
    subtitle: 'Stage architecture & ambient radiance',
    category: 'Evening Production',
    caption:
      'Stage design, warm evening lighting, balanced acoustics, and lounge seating for celebratory sangeet nights.',
    imageSrc: IMAGES.sangeet,
    isPlaceholder: true,
    notes:
      'Editable portfolio card. Ready for replacement with official sangeet night stage photography.',
  },
  {
    id: 'haldi-decor',
    title: 'Flower-Filled Haldi',
    subtitle: 'Sun-drenched floral styling',
    category: 'Traditional Styling',
    caption:
      'Daytime ceremonies decorated with fresh yellow and orange marigolds, brass urlis, and festive seating arrangements.',
    imageSrc: IMAGES.haldi,
    isPlaceholder: true,
    notes:
      'Editable portfolio card. Replace with confirmed Haldi ceremony decor photography.',
  },
  {
    id: 'celebration-lighting',
    title: 'Fireworks & Celebration Lighting',
    subtitle: 'Nocturnal spectacle & fairy canopies',
    category: 'Atmospheric Lighting',
    caption:
      'Fairy light canopies, architectural wash lighting, and choreographed celebratory sparkler moments.',
    imageSrc: IMAGES.eventsHero,
    isPlaceholder: true,
    notes:
      'Editable portfolio card. Update with lighting and fireworks setup photos from recent events.',
  },
  {
    id: 'event-planning',
    title: 'Event Planning & Coordination',
    subtitle: 'Meticulous day-of orchestration',
    category: 'Full-Service Management',
    caption:
      'Comprehensive timeline management, vendor coordination, and on-ground execution led by Ankit Ohdar (@ankiitohdar).',
    imageSrc: IMAGES.landingEvents,
    isPlaceholder: true,
    notes:
      'Editable portfolio card for overall event planning services by Avantaara Events.',
  },
];

export const EXPERIENCE_CONCEPTS: ExperienceConcept[] = [
  {
    id: 'sunset-salon',
    title: 'The Sunset Salon',
    descriptor: 'An unhurried twilight gathering',
    vibe: 'Warm, candlelight, acoustic',
    description:
      'An intimate evening designed around low-lit linen tables, natural twilight, quiet acoustic music, and unhurried conversation among close friends.',
    elements: [
      'Warm beeswax candlelight and table styling',
      'Wild seasonal botanicals and tactile textures',
      'Curated dining with paired beverages',
      'Relaxed progression from sunset into the evening',
    ],
  },
  {
    id: 'atelier-supper',
    title: 'Curated Private Suppers',
    descriptor: 'Considered dining for personal milestones',
    vibe: 'Tactile, refined, private',
    description:
      'Custom table settings, stoneware ceramics, and seasonal courses tailored for anniversaries, birthdays, and meaningful family dinners.',
    elements: [
      'Stoneware plates and washed linen runners',
      'Bespoke menu coordination with private culinary chefs',
      'Discreet and thoughtful hosting',
      'Designed for intimate groups of 6 to 24 guests',
    ],
  },
  {
    id: 'mindful-milestone',
    title: 'Mindful Milestone Gatherings',
    descriptor: 'Quiet celebrations centered on connection',
    vibe: 'Soulful, calm, authentic',
    description:
      'A slower way to mark personal milestones with close loved ones, set in serene open-air spaces or private courtyards with zero rush.',
    elements: [
      'Relaxed flow without rigid schedules',
      'Space for meaningful family storytelling',
      'Earthy color palettes and natural materials',
      'Comfortable, understated lounge settings',
    ],
  },
  {
    id: 'seasonal-hearth',
    title: 'The Seasonal Gathering',
    descriptor: 'Gatherings shaped by the season',
    vibe: 'Sensory, elemental, welcoming',
    description:
      'Open-air winter dinners around a warm hearth or breezy veranda teas, designed with seasonal ingredients and local flora.',
    elements: [
      'Seasonal florals and local greenery',
      'Warm firelight and ambient lanterns',
      'Textured throws and relaxed seating',
      'Welcome rituals and hospitality touches',
    ],
  },
];

export const SENSORY_PILLARS = [
  {
    number: '01',
    title: 'Light & Atmosphere',
    description:
      'We favor natural daylight transitions, real candlelight, and warm evening glows over harsh banquet floodlights.',
  },
  {
    number: '02',
    title: 'Natural Materials',
    description:
      'Washed linens, stoneware plates, raw wood, and living botanicals that feel pleasant, grounded, and real to the touch.',
  },
  {
    number: '03',
    title: 'Unhurried Time',
    description:
      'Generous pacing between moments so guests linger, talk, and enjoy one another without an eye on the clock.',
  },
  {
    number: '04',
    title: 'Tailored Details',
    description:
      'Every gathering is shaped from scratch around the people in the room, avoiding generic formulas in favor of personal resonance.',
  },
];

export const PLANNING_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Share what you are celebrating',
    description:
      'Tell us about your occasion, preferred date, estimated guest count, and the atmosphere you want to create.',
  },
  {
    step: '02',
    title: 'Discuss ideas and requirements',
    description:
      'In a free consultation, we explore visual directions, venue layouts, ceremony requirements, and vendor coordination.',
  },
  {
    step: '03',
    title: 'Plan the details together',
    description:
      'We assemble the timeline, coordinate every vendor, and manage on-ground execution so you can simply arrive and enjoy.',
  },
];
