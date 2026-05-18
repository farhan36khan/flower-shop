export const openWhatsApp = (message) => {
  const encoded = encodeURIComponent(message);
  const phone = '15551234567';
  window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
};

export const categories = [
  { key: 'all', label: 'All' },
  { key: 'Roses', label: 'Roses' },
  { key: 'Mixed', label: 'Mixed Bouquets' },
  { key: 'Sunflower', label: 'Sunflowers' },
  { key: 'Premium', label: 'Premium Arrangements' },
];

export const products = [
  {
    id: 1,
    name: 'Classic Red Roses',
    desc: 'A dozen hand-tied red roses wrapped in premium paper.',
    price: 49,
    img: '/images/red roses.jpg',
    category: 'Roses',
    tags: ['Romantic', 'Anniversary'],
  },
  {
    id: 2,
    name: 'Sunflower Sunshine',
    desc: 'Bright sunflowers arranged with lush greens for a joyful gift.',
    price: 42,
    img: '/images/sunflower.jpg',
    category: 'Sunflower',
    tags: ['Sunny', 'Cheerful'],
  },
  {
    id: 3,
    name: 'Spring Mixed Bouquet',
    desc: 'A fresh seasonal mix of roses, lilies, and seasonal blooms.',
    price: 59,
    img: '/images/mixrose.jpg',
    category: 'Mixed',
    tags: ['Gift', 'Fresh'],
  },
  {
    id: 4,
    name: 'Pink Petal Dream',
    desc: 'Soft pink blooms in a romantic arrangement with eucalyptus.',
    price: 55,
    img: '/images/pink.jpg',
    category: 'Premium',
    tags: ['Elegant', 'Romantic'],
  },
  {
    id: 5,
    name: 'Cherry Blossom Dream',
    desc: 'A delicate pink floral design inspired by cherry blossoms.',
    price: 63,
    img: '/images/cherry.jpg',
    category: 'Premium',
    tags: ['Delicate', 'Luxury'],
  },
  {
    id: 6,
    name: 'White Garden Grace',
    desc: 'Creamy whites and soft textures for an elegant statement.',
    price: 68,
    img: '/images/whitegarden.jpg',
    category: 'Premium',
    tags: ['Classic', 'Wedding'],
  },
  {
    id: 7,
    name: 'Gift Celebration',
    desc: 'Mixed florals arranged in a gift-ready presentation.',
    price: 52,
    img: '/images/gift.jpg',
    category: 'Mixed',
    tags: ['Birthday', 'Celebration'],
  },
  {
    id: 8,
    name: 'Tropical Paradise',
    desc: 'Bold tropical blooms with a modern luxe finish.',
    price: 65,
    img: '/images/paradise.jpg',
    category: 'Mixed',
    tags: ['Tropical', 'Vibrant'],
  },
];
