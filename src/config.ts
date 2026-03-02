export const SITE_CONFIG = {
  name: 'Minimal Bistro',
  description: 'Fresh food delivered to your door.',
  whatsappNumber: '1234567890', // Format: Country code + number without + or 00
  currency: '$',
  deliveryArea: 'Free delivery within 5km. Minimum order $15.',
  openingHours: {
    start: 12, // 12 PM
    end: 22,   // 10 PM
    display: 'Mon - Sun: 12:00 PM - 10:00 PM',
  },
  // SEO & Open Graph
  siteUrl: 'https://example.com', // IMPORTANT: Change this to your live site URL
  defaultMetaDescription: 'Your favorite dishes delivered fresh to your door.',
  defaultOgImage: '/og-image.png', // Path to a default social sharing image
};

export const MENU = [
  {
    id: '1',
    name: 'Classic Burger',
    description: 'Juicy beef patty with fresh lettuce, tomato, and our secret sauce.',
    price: 12.50,
    category: 'Mains',
    img: 'classic-burger.png',
  },
  {
    id: '2',
    name: 'Garden Fresh Salad',
    description: 'Crispy seasonal greens with balsamic vinaigrette and toasted walnuts.',
    price: 9.00,
    category: 'Sides',
    img: 'garden-salad.png',
  },
  {
    id: '3',
    name: 'Truffle Fries',
    description: 'Hand-cut fries tossed in truffle oil and parmesan cheese.',
    price: 6.50,
    category: 'Sides',
    img: 'truffle-fries.png',
  },
  {
    id: '4',
    name: 'Homemade Lemonade',
    description: 'Freshly squeezed lemons with a hint of mint.',
    price: 4.00,
    category: 'Drinks',
    img: 'lemonade.png',
  },
];
