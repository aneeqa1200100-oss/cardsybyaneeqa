import { Product, Review, Reel } from '../types';

export const LOGO_URL = '/assets/aistudio/WhatsApp_Image_2026-11-03_at_12.59.59_PM_8d8cf58c.jpeg';
export const HERO_CHOCOLATE_BOUQUET = '/assets/aistudio/WhatsApp_Image_2026-11-03_at_12.55.42_PM_ca14672b.jpeg';
export const HERO_BALLOON_BOX = '/assets/aistudio/WhatsApp_Image_2026-11-03_at_12.55.41_PM__1__73efc4b9.jpeg';
export const HERO_ROSE_BOUQUET = '/assets/aistudio/WhatsApp_Image_2026-11-03_at_12.55.41_PM_c2b292bc.jpeg';
export const ATTACHED_POPUP_BOX = '/assets/aistudio/WhatsApp_Image_2026-11-04_at_11.07.40_AM__1__6dc7f73f.jpeg';
export const ATTACHED_CRIMSON_BOUQUET = '/assets/aistudio/WhatsApp_Image_2026-11-04_at_11.07.41_AM_15a5ec2d.jpeg';
export const ATTACHED_CONGRATS_FRAME = '/assets/aistudio/WhatsApp_Image_2026-11-04_at_11.10.28_AM_46d83e91.jpeg';
export const ATTACHED_SUNFLOWER = '/assets/aistudio/WhatsApp_Image_2026-11-04_at_11.07.40_AM_7e3f4db7.jpeg';
export const ATTACHED_SAUNF_CONES = '/assets/aistudio/WhatsApp_Image_2026-11-04_at_11.07.39_AM_7fd68c58.jpeg';
export const ATTACHED_PORTRAIT_FRAME = '/assets/aistudio/WhatsApp_Image_2026-11-04_at_11.58.38_AM_73fd1aab.jpeg';
export const ATTACHED_BABY_HAMPER = '/assets/aistudio/WhatsApp_Image_2026-11-04_at_11.58.34_AM_1696d46d.jpeg';
export const ATTACHED_ENGAGEMENT_FRAME = '/assets/aistudio/WhatsApp_Image_2026-11-04_at_11.58.35_AM_0a4ac6fa.jpeg';
export const ATTACHED_AMMI_MUG = '/assets/aistudio/WhatsApp_Image_2026-11-04_at_11.58.36_AM_7dea9436.jpeg';
export const ATTACHED_HAJJ_MUG = '/assets/aistudio/WhatsApp_Image_2026-11-04_at_11.58.37_AM_c28ef5ec.jpeg';
export const ATTACHED_NIKKAH_FOLDER = '/assets/aistudio/WhatsApp_Image_2026-11-04_at_11.58.32_AM_b385de0a.jpeg';
export const ATTACHED_MEHNDI_FAVORS = '/assets/aistudio/WhatsApp_Image_2026-11-04_at_11.58.34_AM_010fdf14.jpeg';
export const ATTACHED_DUA_TOPPERS = '/assets/aistudio/WhatsApp_Image_2026-11-04_at_11.58.35_AM_66a2dedb.jpeg';
export const ATTACHED_NIKKAH_NAMA_FRAME = '/assets/aistudio/WhatsApp_Image_2026-11-04_at_11.58.37_AM_ba080b32.jpeg';
export const ATTACHED_EID_HAMPER = '/assets/aistudio/WhatsApp_Image_2026-11-04_at_11.58.32_AM__1__66695248.jpeg';
export const ATTACHED_POLAROID_BOUQUET = '/assets/aistudio/WhatsApp_Image_2026-11-05_at_11.31.16_AM_25ef321a.jpeg';
export const ATTACHED_BAARAT_FAVOR = '/assets/aistudio/WhatsApp_Image_2026-11-05_at_11.31.17_AM__1__aebf949f.jpeg';
export const ATTACHED_URDU_FLORAL_MUG = '/assets/aistudio/WhatsApp_Image_2026-11-05_at_11.31.17_AM_f2c0e70f.jpeg';
export const ATTACHED_WEDDING_BOX = '/assets/aistudio/WhatsApp_Image_2026-11-05_at_11.31.16_AM__2__c956bcfe.jpeg';
export const ATTACHED_EID_BASKET = '/assets/aistudio/WhatsApp_Image_2026-11-05_at_11.31.16_AM__1__f456eddd.jpeg';
export const ATTACHED_FEATHER_PEN = '/assets/aistudio/WhatsApp_Image_2026-11-05_at_11.31.18_AM_dd3ab4fe.jpeg';
export const ATTACHED_BABY_TRAY = '/assets/aistudio/WhatsApp_Image_2026-11-05_at_11.31.22_AM_62bd4573.jpeg';
export const ATTACHED_HAJJ_BAG_BOTTLE = '/assets/aistudio/WhatsApp_Image_2026-11-05_at_11.31.21_AM_dfa9ca84.jpeg';
export const ATTACHED_BLACK_CHOC_BOX = '/assets/aistudio/WhatsApp_Image_2026-11-05_at_11.31.19_AM_31c71885.jpeg';
export const ATTACHED_DIAPER_CAKE = '/assets/aistudio/WhatsApp_Image_2026-11-05_at_11.31.18_AM__1__c6859ff5.jpeg';

export const PHONE_NUMBER = '03179155617';
export const WHATSAPP_INTL = '923179155617';
export const OWNER_EMAIL = 'aneeqa1200100@gmail.com';
export const SOCIAL_LINK = 'https://www.facebook.com/share/1bmWi6LkYL/';

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(message)}`;
}

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    image: HERO_CHOCOLATE_BOUQUET,
    title: 'Birthday Chocolate Cake Bouquet',
    subtitle: 'Cadbury Dairy Milk, Happy Birthday Banner & Purple Velvet Ribbon',
    tag: 'Signature Birthday Delight',
    theme: 'dark' as const,
    alt: 'Birthday chocolate Dairy Milk cake bouquet with Happy Birthday banner and purple ribbon by Cardsy by Aneeqa'
  },
  {
    id: 'slide-2',
    image: HERO_BALLOON_BOX,
    title: 'Pink Surprise Gift Box',
    subtitle: 'Metallic Heart Balloons, Bridal Keepsake Frame & Rose Petals',
    tag: 'Luxury Surprise Experience',
    theme: 'gold' as const,
    alt: 'Pink surprise gift box with heart balloons, photo frame and flowers by Cardsy by Aneeqa'
  },
  {
    id: 'slide-3',
    image: HERO_ROSE_BOUQUET,
    title: 'Soft Pink Rose Bouquet',
    subtitle: 'Delicate Baby Breath, Shimmer Pearls & Pleated Silk Collar',
    tag: 'Handcrafted With Love',
    theme: 'dark' as const,
    alt: 'Soft pink rose bouquet with baby breath and pearls by Cardsy by Aneeqa'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Birthday Chocolate Dairy Milk Cake Bouquet',
    category: 'bouquets',
    price: 3800,
    originalPrice: 4200,
    description: 'Tiered Cadbury Dairy Milk chocolate bouquet adorned with miniature Happy Birthday banner, purple butterflies, satin bow, and white-lilac floral crown.',
    image: HERO_CHOCOLATE_BOUQUET,
    isRealUploaded: true,
    watermarkTheme: 'dark',
    badge: 'Bestseller',
    turnaround: '24-48 Hours',
    details: [
      'Genuine Cadbury Dairy Milk chocolate bars arranged in tiered cake style',
      'Handcrafted miniature Happy Birthday pennant banner with lilac butterflies',
      'Silk floral top arrangement with baby breath accents',
      'Luxurious lilac satin bow and pearl brooch finish',
      'Complimentary handwritten greeting card included'
    ],
    customOptions: ['Chocolates can be substituted with KitKat or Ferrero Rocher', 'Custom banner message (e.g., Happy Birthday Mom / Sis)', 'Choice of ribbon color (Purple, Soft Pink, Gold)']
  },
  {
    id: 'prod-2',
    name: 'Pink Surprise Gift Box with Heart Balloons',
    category: 'boxes',
    price: 5200,
    originalPrice: 5800,
    description: 'A breathtaking luxury reveal box featuring metallic pink and silver heart helium-effect balloons, bespoke picture frame, imported heels/gift presentation, and fresh rose petals with fairy lights.',
    image: HERO_BALLOON_BOX,
    isRealUploaded: true,
    watermarkTheme: 'gold',
    badge: 'Luxury Box',
    turnaround: '24-48 Hours',
    details: [
      'High-grade transparent acrylic & pink velvet structured box',
      '4 metallic foil heart balloons (Magenta & Chrome Silver)',
      'Customized premium photo frame included',
      'Internal fairy lights with warm gold LED glow',
      'Fresh scented rose petals lining the presentation base'
    ],
    customOptions: ['Include your uploaded photo printed in high-res glossy finish', 'Custom gift compartment sizing for heels, perfume or jewels', 'Personalized message printed on box ribbon']
  },
  {
    id: 'prod-3',
    name: 'Soft Pink Rose Bouquet with Baby Breath & Pearls',
    category: 'bouquets',
    price: 3200,
    originalPrice: 3600,
    description: 'Elegantly arranged soft pink silk roses accented with delicate baby breath, shimmering pearl pins, layered organza ruffle wrap, and draped silk backdrop.',
    image: HERO_ROSE_BOUQUET,
    isRealUploaded: true,
    watermarkTheme: 'dark',
    badge: 'Everlasting',
    turnaround: 'Same Day in Muzaffarabad',
    details: [
      'Hand-shaped satin and silk roses that never fade',
      'Natural-looking preserved baby breath floral accents',
      'Center pearl embellishments on each rose bloom',
      'Multi-layer sheer organza pleated collar wrapping',
      'Perfumed with delicate soft floral fragrance'
    ],
    customOptions: ['Rose color options: Soft Pink, Ivory White, Red Wine, or Peach', 'Add customized greeting note on textured gold-foil card']
  },
  {
    id: 'prod-4',
    name: 'Hanging Photo Memory Pop-Up Surprise Box',
    category: 'boxes',
    price: 4800,
    originalPrice: 5400,
    description: 'Bespoke transparent surprise reveal box with tiered suspended polaroid prints, romantic rose petals, fairy lights, and pink silk lid with floral cluster.',
    image: ATTACHED_POPUP_BOX,
    isRealUploaded: true,
    watermarkTheme: 'dark',
    badge: 'Trending Reveal',
    turnaround: '24-48 Hours',
    details: [
      'Multi-tier silver ribbon suspended memory photo cards',
      'High-grade transparent acrylic walls with pink velvet accents',
      'Fresh scented rose petals lining the presentation floor',
      'Warm micro LED copper fairy lights integrated inside',
      'Lid adorned with silk blush roses and butterfly charm'
    ],
    customOptions: ['Includes 8-12 custom photo prints', 'Custom message tag (e.g. Birthday to you, Happy Anniversary)', 'Optional gift placement compartment']
  },
  {
    id: 'prod-5',
    name: 'Signature Crimson Rose Bouquet in Matte Black Wrap',
    category: 'bouquets',
    price: 3400,
    originalPrice: 3900,
    description: 'Vibrant crimson garden roses elegantly wrapped in structured origami matte black paper, tied with deep ruby satin ribbon and personalized Happy Birthday greeting card.',
    image: ATTACHED_CRIMSON_BOUQUET,
    isRealUploaded: true,
    watermarkTheme: 'gold',
    badge: 'Birthday Special',
    turnaround: 'Same Day in Muzaffarabad',
    details: [
      'Fresh selected crimson roses with fresh foliage',
      'Architectural French-fold matte black waterproof wrapping',
      'Rich red satin ribbon bow with pearl accent pin',
      'Personalized greeting card attached with custom handwritten message',
      'Delivered in pristine condition with moisture stem wrap'
    ],
    customOptions: ['Choice of greeting card (Happy Birthday, Love You, Congratulations)', 'Ribbon color (Ruby Red, Champagne Gold, Soft Pink)']
  },
  {
    id: 'prod-6',
    name: 'Congratulations Papa! Keepsake Promotion Frame',
    category: 'frames',
    price: 4200,
    originalPrice: 4800,
    description: 'Luxurious royal navy & gold foil framed tribute letter for fathers, promotions, and milestones, adorned with silk roses, golden calligraphy, and heartfelt prayers.',
    image: ATTACHED_CONGRATS_FRAME,
    isRealUploaded: true,
    watermarkTheme: 'dark',
    badge: 'Milestone Special',
    turnaround: '24-48 Hours',
    details: [
      'Custom letter printed on high-grade archival cardstock',
      'Royal blue and gold filigree borders with Islamic prayer motif',
      'Deep black frame with glass protection and floral rose garland',
      'Personalized with father / recipient name, title, and daughter/son signature'
    ],
    customOptions: ['Personalized designation / milestone (e.g. Deputy Secretary, Doctor, CSS)', 'Custom dedication message & name']
  },
  {
    id: 'prod-7',
    name: 'Handcrafted Sunshine Sunflower Keepsake Stem',
    category: 'cards',
    price: 1500,
    originalPrice: 1800,
    description: 'Delightful handcrafted yellow plush sunflower stem on luxury Cardsy floral presentation backing card, perfect for gifting warmth, appreciation, and cheer.',
    image: ATTACHED_SUNFLOWER,
    isRealUploaded: true,
    watermarkTheme: 'dark',
    badge: 'Handcrafted Art',
    turnaround: 'Same Day in Muzaffarabad',
    details: [
      'Intricately hand-shaped plush sunflower bloom with textured center',
      'Mounted on custom Cardsy watercolor floral backing card',
      'Includes contact barcode and personalized recipient tag',
      'Never wilts - an enduring keepsake for desks and vanities'
    ],
    customOptions: ['Choice of backing card message (Just For You, Best Friend, Thank You)', 'Option to add mini personalized note card']
  },
  {
    id: 'prod-8',
    name: 'Festive Mehndi Sweet Saunf Cones (Set of 12)',
    category: 'cards',
    price: 2600,
    originalPrice: 3000,
    description: 'Traditional vibrant Mehndi and Dholki giveaway cones filled with sugar-coated sweet fennel (Saunf), tied with festive orange satin ribbons and personalized bride/event stickers.',
    image: ATTACHED_SAUNF_CONES,
    isRealUploaded: true,
    watermarkTheme: 'dark',
    badge: 'Wedding Festive',
    turnaround: '2-3 Days',
    details: [
      '12x Clear conical pouches filled with premium colorful sweet Saunf',
      'Customized waterproof event stickers (e.g. Kiran ki Shadi, Hajra ki Dosti)',
      'Tied with high-sheen marigold orange satin ribbon bows',
      'Hygienically heat-sealed for freshness during transport across Pakistan'
    ],
    customOptions: ['Custom bride & groom names or wedding hashtag', 'Available in sets of 12, 24, 50, or 100 cones via WhatsApp']
  },
  {
    id: 'prod-9',
    name: 'Cherished Moments Custom Photo Memory Frame',
    category: 'frames',
    price: 2800,
    originalPrice: 3200,
    description: 'High-definition portrait photograph framed in solid black wooden moulding, surrounded by draped blush silk, fairy lights, and garden roses.',
    image: ATTACHED_PORTRAIT_FRAME,
    isRealUploaded: true,
    watermarkTheme: 'dark',
    badge: 'Memory Frame',
    turnaround: '24 Hours',
    details: [
      'High-resolution photographic print on pearl finish paper',
      'Classic black wooden moulding frame with clear glass',
      'Ready for wall mounting or tabletop stand display',
      'Complimentary gift wrapping with blush velvet ribbon'
    ],
    customOptions: ['Upload your high-res picture via WhatsApp', 'Frame size options (A4, 8x10 inch, 10x12 inch)']
  },
  {
    id: 'prod-10',
    name: 'Baby Boy Welcome Hamper & Diaper Cake',
    category: 'boxes',
    price: 5400,
    originalPrice: 5900,
    description: 'Grand newborn arrival tray with custom engraved name plaque, diaper cake with blue satin ribbon, clothes hanger line, booties, plush teddy, and baby essentials.',
    image: ATTACHED_BABY_HAMPER,
    isRealUploaded: true,
    watermarkTheme: 'dark',
    badge: 'Newborn Set',
    turnaround: '2-3 Days',
    details: [
      'Custom wooden plaque with baby name (e.g. Muhammad Arsam)',
      'Tiered newborn diaper cake with sky-blue satin bow & pearl pin',
      'Mini clothesline with baby romper, booties, and socks',
      'Soft plush teddy bear and baby care lotion toiletries',
      'Accented with baby elephant, hot air balloon, and pacifier charms'
    ],
    customOptions: ['Custom baby name & birth details', 'Theme: Baby Boy (Sky Blue) or Baby Girl (Blush Pink)']
  },
  {
    id: 'prod-11',
    name: 'Happily Engaged Islamic Verse Floral Frame',
    category: 'frames',
    price: 3600,
    originalPrice: 4000,
    description: "Elegant white wooden frame featuring Quranic verse 'And We Created You In Pairs', couple names in luxury serif typography, pastel watercolor roses, and date.",
    image: ATTACHED_ENGAGEMENT_FRAME,
    isRealUploaded: true,
    watermarkTheme: 'gold',
    badge: 'Engagement Special',
    turnaround: '24-48 Hours',
    details: [
      'Arabic Bismillah & Quranic Ayat "Wa Khalaqnakum Azwaja"',
      'Couple names in elegant typography (e.g. Usama & Irsa)',
      'High-resolution watercolor blush pink and white peony florals',
      'Clean white wooden frame with glass front and stand'
    ],
    customOptions: ['Bride & Groom names and engagement date', 'Choice of white, natural wood, or gold frame']
  },
  {
    id: 'prod-12',
    name: 'Pyari Ammi Jaan Gold Calligraphy Custom Mug',
    category: 'cards',
    price: 1600,
    originalPrice: 1900,
    description: "Premium glossy ceramic mug with exquisite gold Nastaliq Urdu calligraphy 'Pyari Ammi Jaan' on rich black backdrop with complimentary gift box.",
    image: ATTACHED_AMMI_MUG,
    isRealUploaded: true,
    watermarkTheme: 'dark',
    badge: "Mother's Love",
    turnaround: 'Same Day in Muzaffarabad',
    details: [
      'Grade-A 11oz ceramic mug with heat-resistant durable glaze',
      'Intricate gold Urdu Nastaliq calligraphy lettering',
      'Microwave and dishwasher safe print',
      'Packaged in a luxury pink Cardsy gift box with ribbon'
    ],
    customOptions: ['Custom title (Pyari Ammi Jaan, Pyare Abbu Jaan, Best Sister)', 'Add sender name on back']
  },
  {
    id: 'prod-13',
    name: 'Hajj Mubarak Holy Kaaba Gold Calligraphy Mug',
    category: 'tabarruk',
    price: 1600,
    originalPrice: 1900,
    description: 'Commemorative Hajj & Umrah souvenir mug featuring nighttime golden illumination of Masjid al-Haram and Holy Kaaba with gold Arabic calligraphy.',
    image: ATTACHED_HAJJ_MUG,
    isRealUploaded: true,
    watermarkTheme: 'dark',
    badge: 'Hajj Mubarak',
    turnaround: 'Same Day in Muzaffarabad',
    details: [
      'Vibrant panoramic nighttime print of Khana Kaaba and pilgrims',
      'Gold Arabic calligraphy "Hajj Mubarak" or "Umrah Mubarak"',
      'High-gloss ceramic finish with comfortable C-handle',
      'Ideal Tabarruk giveaway gift for returning pilgrims'
    ],
    customOptions: ['Custom pilgrim name & Hijri year on back', 'Bulk discount available for pilgrimage return giveaways']
  },
  {
    id: 'prod-14',
    name: 'Royal Black Velvet Nikkah Signing Folder & Pearl Feather Pen',
    category: 'frames',
    price: 4500,
    originalPrice: 5200,
    description: 'Luxurious black velvet Nikkah contract folder embossed with gold initials, date plaque, corner filigree, and handcrafted pearl-studded feather signing pen.',
    image: ATTACHED_NIKKAH_FOLDER,
    isRealUploaded: true,
    watermarkTheme: 'gold',
    badge: 'Bespoke Nikkah',
    turnaround: '2-3 Days',
    details: [
      'Heavyweight black velvet certificate folder with golden corner filigree',
      'Embossed gold acrylic initials monogram and date plaque',
      'Handcrafted signing pen wrapped in layered white pearls',
      'Fluffy white ostrich feather top with satin ribbon bow and monogram charm',
      'Protective clear internal pocket for Nikkah Nama certificate'
    ],
    customOptions: ['Couple initials (e.g. A&S)', 'Wedding date plaque (e.g. 31 MAY 2026)', 'Choice of velvet color (Black, Burgundy Red, Emerald Green)']
  },
  {
    id: 'prod-15',
    name: 'Festive Mehndi Chocolate Favor Cards (Set of 12)',
    category: 'cards',
    price: 2200,
    originalPrice: 2600,
    description: 'Joyful marigold yellow and orange illustrated Mehndi cards with customized event headings and genuine golden-wrapped chocolates mounted for guests.',
    image: ATTACHED_MEHNDI_FAVORS,
    isRealUploaded: true,
    watermarkTheme: 'dark',
    badge: 'Mehndi Favors',
    turnaround: '24-48 Hours',
    details: [
      '12x Heavyweight textured cardstock with colorful Pakistani Mehndi illustration',
      'Genuine individually wrapped golden foil chocolates attached to each card',
      'Personalized with bride/event names (e.g. Hajra ki Dosti, Kiran ki Shadi)',
      'Traditional umbrella, marigold garland, and Dholki design motifs'
    ],
    customOptions: ['Custom event title and bride/sister names', 'Available in sets of 12, 24, 50, or 100 via WhatsApp']
  },
  {
    id: 'prod-16',
    name: 'Personalized Dua-e-Khair & Engagement Topper Sticks (Set of 12)',
    category: 'cards',
    price: 1800,
    originalPrice: 2200,
    description: 'Delicate circular favor topper sticks framed in soft pink borders with floral watercolor wreath, couple names, and auspicious event date.',
    image: ATTACHED_DUA_TOPPERS,
    isRealUploaded: true,
    watermarkTheme: 'dark',
    badge: 'Dua-e-Khair',
    turnaround: '24 Hours',
    details: [
      '12x Dual-layer circular card toppers on smooth natural bamboo sticks',
      'Blush pink scalloped base with floral watercolor wreath',
      'Personalized with couple names and event date (e.g. Usama & Irsa)',
      'Ideal for dessert tables, cupcakes, mithai boxes, or favor bags'
    ],
    customOptions: ['Couple names and date customization', 'Title choice: Dua-e-Khair, Nikkah Mubarak, Baat Pakki, or Happy Engagement']
  },
  {
    id: 'prod-17',
    name: 'Illuminated Mughal Arch Nikkah Nama Frame',
    category: 'frames',
    price: 5200,
    originalPrice: 5800,
    description: 'Breathtaking gold-framed Islamic marriage certificate with intricate floral illuminated Mughal arch, Arabic Quranic verse, couple names, and Muzaffarabad city seals.',
    image: ATTACHED_NIKKAH_NAMA_FRAME,
    isRealUploaded: true,
    watermarkTheme: 'gold',
    badge: 'Heritage Nikkah',
    turnaround: '2-4 Days',
    details: [
      'Handcrafted illuminated traditional Mughal arch Tazhib floral border',
      'Arabic Bismillah calligraphy & sacred marriage verse',
      'English & Urdu legal certificate text with signature lines for Bride, Groom & Witnesses',
      'Solid antique brushed gold metallic frame with UV glass front',
      'Customized with bride & groom names (e.g. Ammar Nazir & Ummara Waheed) and city'
    ],
    customOptions: ['Bride & Groom full names, event date & city', 'Signature lines for Imam, Groom, Bride & Wali']
  },
  {
    id: 'prod-18',
    name: 'Eid Mubarak Luxury Window Hamper Box',
    category: 'boxes',
    price: 3200,
    originalPrice: 3600,
    description: 'Window display gift box adorned with mirrored gold "Eid Mubarak" acrylic topper, silk scrunchie, glittering bangles, festive Mehndi cone, and Dairy Milk bar.',
    image: ATTACHED_EID_HAMPER,
    isRealUploaded: true,
    watermarkTheme: 'dark',
    badge: 'Festive Gift Box',
    turnaround: '24 Hours',
    details: [
      'Rigid ivory window display presentation gift box',
      'Mirrored reflective gold acrylic "Eid Mubarak" Arabic calligraphy cut-out',
      'Silk satin oversized hair scrunchie in matching pastel shade',
      'Set of glittering glass Chooriyan (bangles) & decorative butterfly',
      'Fresh organic henna / Mehndi cone with golden ribbon wrapping',
      'Cadbury Dairy Milk chocolate bar nestled inside'
    ],
    customOptions: ['Color theme: Royal Blue / Turquoise or Snow White / Blush Pink', 'Choice of acrylic topper: Eid Mubarak, Jashn-e-Azadi, or Happy Birthday']
  },
  {
    id: 'prod-19',
    name: 'Pink Satin Bow Polaroid Memory Bouquet',
    category: 'bouquets',
    price: 3800,
    description: 'Handcrafted blush pink bouquet filled with your favorite polaroid memory prints, delicate satin bows, pearl accents, and pleated silk wrapping.',
    image: ATTACHED_POLAROID_BOUQUET,
    isRealUploaded: true,
    watermarkTheme: 'dark',
    badge: 'Memory Bouquet',
    turnaround: '24-48 Hours',
    details: [
      'Includes 10-12 high-gloss printed polaroid memory photos',
      'Adorned with 6 handmade blush pink satin bows',
      'Wrapped in structured pink & white silk paper with pearl brooch',
      'Complimentary personalized greeting note included'
    ],
    customOptions: ['Upload 10-12 photos via WhatsApp', 'Choice of ribbon color (Blush Pink, Lilac, Ivory, Gold)']
  },
  {
    id: 'prod-20',
    name: 'Baarat Couple & Heart Chocolate Favor Card',
    category: 'cards',
    price: 1800,
    description: 'Elegant Baarat & Walima wedding favor card featuring Quranic verse, couple illustration, date, and a golden foil heart-shaped chocolate.',
    image: ATTACHED_BAARAT_FAVOR,
    isRealUploaded: true,
    watermarkTheme: 'dark',
    badge: 'Wedding Favor',
    turnaround: '24-48 Hours',
    details: [
      'Arabic Quranic verse "And We Created You In Pairs"',
      'Customized with Bride & Groom names and wedding date',
      'Mounted with a genuine golden-wrapped heart chocolate',
      'Printed on heavyweight textured cardstock with floral borders'
    ],
    customOptions: ['Couple names & event date', 'Available in bulk sets for Baarat, Walima, or Nikkah']
  },
  {
    id: 'prod-21',
    name: 'Zindagi Dhoop Tum Ghana Saya Urdu Poetry Mug',
    category: 'cards',
    price: 1600,
    description: 'Charming white ceramic mug featuring pastel wildflowers and classic Urdu poetry calligraphy "Zindagi Dhoop Tum Ghana Saya".',
    image: ATTACHED_URDU_FLORAL_MUG,
    isRealUploaded: true,
    watermarkTheme: 'dark',
    badge: 'Urdu Poetry',
    turnaround: 'Same Day in Muzaffarabad',
    details: [
      'Grade-A 11oz glossy white ceramic mug',
      'Hand-lettered Urdu poetry calligraphy with pastel floral pattern',
      'Microwave and dishwasher safe durable print',
      'Comes in a luxury pink Cardsy gift box with ribbon'
    ],
    customOptions: ['Add custom name or dedication on the back', 'Choice of Urdu poetry verse']
  },
  {
    id: 'prod-22',
    name: 'Crimson Ribbon Wedding & Nikkah Favor Box',
    category: 'boxes',
    price: 2400,
    description: 'Classic white square wedding favor box tied with a rich crimson satin bow, featuring Quranic verse, couple names, and event date.',
    image: ATTACHED_WEDDING_BOX,
    isRealUploaded: true,
    watermarkTheme: 'dark',
    badge: 'Wedding Box',
    turnaround: '2-3 Days',
    details: [
      'Sturdy white presentation favor box with crimson satin ribbon bow',
      'Personalized front plaque with couple names and wedding date',
      'Features Arabic verse "And We Created You In Pairs"',
      'Ideal for mithai, dry fruits, chocolates, or wedding giveaways'
    ],
    customOptions: ['Couple names & wedding date', 'Ribbon color: Crimson Red, Champagne Gold, or Blush Pink']
  },
  {
    id: 'prod-23',
    name: 'Pink Tulle & Pearl Eid Mubarak Gift Basket',
    category: 'boxes',
    price: 4500,
    description: 'Dreamy wooden gift basket wrapped in pearl-studded pink tulle netting, satin bows, fresh red roses, and Eid Mubarak greeting card.',
    image: ATTACHED_EID_BASKET,
    isRealUploaded: true,
    watermarkTheme: 'dark',
    badge: 'Luxury Basket',
    turnaround: '24-48 Hours',
    details: [
      'Handcrafted wooden tray wrapped in pink satin ribbon & pearl tulle',
      'Topped with silk white & blush roses and a large pink satin bow',
      'Filled with fresh red roses, treats, and Eid Mubarak card',
      'Reusable keepsake basket with floral handle'
    ],
    customOptions: ['Custom card (Eid Mubarak, Happy Birthday, Anniversary)', 'Add chocolates, bangles, or perfume']
  },
  {
    id: 'prod-24',
    name: 'Pearl & Gold Monogram Nikkah Feather Pen',
    category: 'frames',
    price: 2200,
    description: 'Handcrafted pearl-wrapped Nikkah signing feather pen featuring a custom gold acrylic couple monogram ring and champagne satin bow.',
    image: ATTACHED_FEATHER_PEN,
    isRealUploaded: true,
    watermarkTheme: 'dark',
    badge: 'Nikkah Signature',
    turnaround: '24 Hours',
    details: [
      'Hand-strung ivory faux pearls along the pen barrel',
      'Custom gold mirror acrylic monogram ring (e.g. A & B)',
      'Fluffy white ostrich feather plume & champagne satin bow',
      'Smooth-writing ink for Nikkah Nama & guestbook signing'
    ],
    customOptions: ['Couple initials (e.g. A & B)', 'Ribbon color (Champagne, Blush Pink, Gold, White)']
  },
  {
    id: 'prod-25',
    name: 'Newborn Baby Boy Welcome Hamper Tray',
    category: 'boxes',
    price: 5500,
    description: 'Personalized wooden baby boy welcome tray with custom name plaque, baby photos, clothesline cutouts, soft teddy bear, booties, and baby care essentials.',
    image: ATTACHED_BABY_TRAY,
    isRealUploaded: true,
    watermarkTheme: 'dark',
    badge: 'Newborn Welcome',
    turnaround: '24-48 Hours',
    details: [
      'Custom wooden tray with baby name & "It\'s a Boy!" plaques',
      'Mini clothesline with baby photos & blue outfit cutouts',
      'Includes baby outfit, bunny booties, teddy bear & baby care items',
      'Beautifully arranged for hospital visits or Aqeeqah gifts'
    ],
    customOptions: ['Baby\'s full name', '2 baby photos for the clothesline', 'Pink theme available for baby girl']
  },
  {
    id: 'prod-26',
    name: 'Hajj Tabarruk Gift Bag & Zamzam Bottle Set',
    category: 'tabarruk',
    price: 1800,
    description: 'Elegant Hajj Mubarak Tabarruk gift bag and matching Zamzam water bottle featuring sacred Kaaba artwork and gold calligraphy.',
    image: ATTACHED_HAJJ_BAG_BOTTLE,
    isRealUploaded: true,
    watermarkTheme: 'dark',
    badge: 'Hajj Tabarruk',
    turnaround: '24-48 Hours',
    details: [
      'Custom printed Hajj Mubarak gift bag with gold rope handles',
      'Matching Zamzam water bottle with Kaaba & "Hajj Mubarak" label',
      'Ideal for distributing dates, tasbeeh, and Zamzam to guests',
      'Bulk family & event orders available'
    ],
    customOptions: ['Haji / Hajjan name on bag & bottle', 'Umrah Mubarak or Hajj Mubarak text']
  },
  {
    id: 'prod-27',
    name: 'Luxury Black Hatbox Birthday Chocolate Bouquet',
    category: 'bouquets',
    price: 4800,
    description: 'Sleek black round hatbox overflowing with Dairy Milk, KitKat, and Snickers chocolates, burgundy satin ribbon, and custom love & birthday cards.',
    image: ATTACHED_BLACK_CHOC_BOX,
    isRealUploaded: true,
    watermarkTheme: 'dark',
    badge: 'Birthday Hit',
    turnaround: '24 Hours',
    details: [
      'Sturdy matte black round gift box with burgundy satin bow',
      'Loaded with Dairy Milk, KitKat, Snickers & assorted chocolates',
      'Includes "Happy Birthday" topper & personalized love message cards',
      'Ready-to-gift luxury presentation'
    ],
    customOptions: ['Recipient name & birthday message', 'Ribbon color (Burgundy, Red, Gold, Pink)']
  },
  {
    id: 'prod-28',
    name: 'Baby Boy Diaper Cake & Clothesline Centerpiece',
    category: 'boxes',
    price: 5200,
    description: 'Tiered baby boy diaper cake wrapped in royal blue satin ribbons, topped with a mini clothesline of baby outfits, elephant, and hot-air balloon cutouts.',
    image: ATTACHED_DIAPER_CAKE,
    isRealUploaded: true,
    watermarkTheme: 'dark',
    badge: 'Baby Shower',
    turnaround: '24-48 Hours',
    details: [
      'Multi-tier practical diaper cake wrapped in white & blue satin',
      'Topped with wooden clothesline & adorable baby boy cutouts',
      'Includes "Welcome Little One" & "It\'s a Boy" keepsake toppers',
      'Perfect centerpiece for baby showers & newborn welcomes'
    ],
    customOptions: ['Baby\'s name', 'Ribbon theme (Blue for Boy, Pink for Girl)']
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Ayesha Khan',
    location: 'Muzaffarabad, AJK',
    rating: 5,
    comment: 'Bohat pyara frame tha, quality amazing thi, same day delivery Muzaffarabad me mil gaya! Aneeqa is so polite and patient with customizations. Packaging was like a royal gift.',
    date: '3 days ago',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    productName: 'Luxury Nikkah Nama Frame',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Sana Ali',
    location: 'Islamabad',
    rating: 5,
    comment: 'Ordered the Dairy Milk bouquet for my sister’s 22nd birthday. Packing was 10/10 with purple velvet ribbon, chocolates were fresh, and it reached Islamabad within 24 hours via express courier!',
    date: '1 week ago',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    productName: 'Birthday Chocolate Dairy Milk Bouquet',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Fatima Ahmed',
    location: 'Lahore (DHA)',
    rating: 5,
    comment: 'The Nikkah frame was the highlight of our event! Everyone asked where we got it customized from. The gold mirror calligraphy and preserved flowers looked even better than the pictures.',
    date: '2 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    productName: 'Nikkah Keepsake Frame',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Mahnoor Tariq',
    location: 'Rawalpindi',
    rating: 5,
    comment: 'The baby name frame with 3D charms looks so aesthetic in the nursery. Loved how carefully Aneeqa verified all spelling and date details on WhatsApp before finalizing.',
    date: '2 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80',
    productName: 'Personalised Baby Name Frame',
    verified: true
  },
  {
    id: 'rev-5',
    author: 'Hiba Rehman',
    location: 'Mirpur, AJK',
    rating: 5,
    comment: 'Hajj Tabarruk bags and mugs were printed so cleanly. Very reasonable price for such a luxury finish. Our family was so touched distributing these to guests.',
    date: '3 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    productName: 'Hajj & Umrah Tabarruk Set',
    verified: true
  },
  {
    id: 'rev-6',
    author: 'Zainab Butt',
    location: 'Karachi',
    rating: 5,
    comment: 'I was skeptical about parcel coming from Muzaffarabad to Karachi, but it arrived in a pristine velvet box without a single scratch or dent. The fairy lights worked perfectly!',
    date: '1 month ago',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80',
    productName: 'Pink Surprise Gift Box',
    verified: true
  },
  {
    id: 'rev-7',
    author: 'Maryam Farooq',
    location: 'Peshawar',
    rating: 5,
    comment: 'Customized Mehndi greeting card and salami envelopes had intricate gold foil work and real ribbon tassels. Aneeqa is a true artist!',
    date: '1 month ago',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80',
    productName: 'Handcrafted Mehndi Cards & Envelopes',
    verified: true
  },
  {
    id: 'rev-8',
    author: 'Anum Javed',
    location: 'Muzaffarabad, AJK',
    rating: 5,
    comment: 'Store pickup was super convenient right in Muzaffarabad. She even added extra fairy lights and fresh rose petals inside the box without charging extra. 100% recommended!',
    date: 'Last month',
    avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=150&q=80',
    productName: 'Soft Pink Rose Bouquet',
    verified: true
  }
];

export const REELS: Reel[] = [
  {
    id: 'reel-1',
    title: 'Arranging Cadbury Dairy Milk Tiered Cake',
    duration: '0:42',
    likes: 842,
    step: 'Step 1: Structural Placement',
    description: 'Precision alignment of 16 Dairy Milk bars onto internal support rings, secured with food-safe adhesive and wrapped in lilac velvet satin.',
    tags: ['ChocolateBouquet', 'CadburyLove', 'MuzaffarabadCrafts'],
    color: '#EBD2D6'
  },
  {
    id: 'reel-2',
    title: 'Handcrafting Mini Birthday Bunting & Butterflies',
    duration: '0:35',
    likes: 1205,
    step: 'Step 2: Paper Artistry',
    description: 'Individual hand-stamped letter pennants strung on natural jute twine and capped with dual-layer iridescent purple butterflies.',
    tags: ['HandmadeCards', 'PaperCraft', 'PersonalizedGifts'],
    color: '#F4DEE1'
  },
  {
    id: 'reel-3',
    title: 'Sealing The Nikkah Certificate in Mirrored Gold',
    duration: '0:50',
    likes: 1940,
    step: 'Step 3: Calligraphy & Seal',
    description: 'Carefully applying acrylic gold mirror Arabic verses onto double-layered glass with white silk velvet backing.',
    tags: ['NikkahFrame', 'PakistaniWeddings', 'IslamicArt'],
    color: '#EAD9C0'
  },
  {
    id: 'reel-4',
    title: 'Threading Warm LED Fairy Lights in Surprise Box',
    duration: '0:38',
    likes: 670,
    step: 'Step 4: Illuminating Magic',
    description: 'Weaving micro-copper fairy lights across fresh blush petals and acrylic walls for that enchanting magical glow.',
    tags: ['SurpriseBox', 'FairyLights', 'UnboxingJoy'],
    color: '#F9D5D9'
  },
  {
    id: 'reel-5',
    title: 'Fluffing Organza & Pinning Rose Center Pearls',
    duration: '0:45',
    likes: 1530,
    step: 'Step 5: Floral Finishing',
    description: 'Every silk rose bloom is inspected and hand-pinned with an ivory teardrop pearl, enveloped by layered French pleated organza.',
    tags: ['EverlastingRoses', 'BridalBouquet', 'HandcraftedLuxury'],
    color: '#FDE8EA'
  },
  {
    id: 'reel-6',
    title: 'Final Wax Seal Stamp on Gift Box Envelope',
    duration: '0:29',
    likes: 980,
    step: 'Step 6: Royal Presentation',
    description: 'Melting antique rose-gold wax beads and pressing our signature Cardsy floral emblem onto the complimentary greeting note.',
    tags: ['WaxSeal', 'PackagingAesthetic', 'CardsyByAneeqa'],
    color: '#E8CCD1'
  }
];
