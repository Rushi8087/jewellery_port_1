export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  tags?: string[];
};

export const CATEGORIES = ['All', 'Necklaces', 'Bracelets', 'Bangles'];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'CELESTIAL CRESCENT MOON NECKLACE',
    price: 699,
    category: 'Necklaces',
    image: '/images/products/celestial-moon-necklace.webp',
    tags: ['Bestseller', '18K Gold Plated']
  },
  {
    id: '2',
    name: 'ROYAL EMERALD TRIO DROP NECKLACE',
    price: 899,
    category: 'Necklaces',
    image: '/images/products/emerald-trio-necklace.webp',
    tags: ['Luxury', 'Statement']
  },
  {
    id: '3',
    name: 'MIDNIGHT BUTTERFLY CUFF BRACELET',
    price: 699,
    category: 'Bracelets',
    image: '/images/products/butterfly-cuff-bracelet.webp',
    tags: ['Statement', 'Anti-Tarnish']
  },
  {
    id: '4',
    name: 'PAVÉ BUCKLE STATEMENT BANGLE',
    price: 899,
    category: 'Bangles',
    image: '/images/products/pave-buckle-bangle.webp',
    tags: ['Luxury', 'Bestseller']
  },
  {
    id: '5',
    name: 'SPARKLING RIBBON BOW PENDANT',
    price: 749,
    category: 'Necklaces',
    image: '/images/products/ribbon-bow-necklace.webp',
    tags: ['Trending', 'Anti-Tarnish']
  },
  {
    id: '6',
    name: 'EMERALD BAGUETTE DUAL CHAIN BRACELET',
    price: 649,
    category: 'Bracelets',
    image: '/images/products/emerald-dual-chain-bracelet.webp',
    tags: ['New Arrival']
  },
  {
    id: '7',
    name: 'DAISY BLOSSOM FLORAL BANGLE',
    price: 799,
    category: 'Bangles',
    image: '/images/products/daisy-blossom-bangle.webp',
    tags: ['Customer Fav']
  },
  {
    id: '8',
    name: 'PAVÉ TEARDROP CASCADE NECKLACE',
    price: 849,
    category: 'Necklaces',
    image: '/images/products/teardrop-charms-necklace.webp',
    tags: ['Bestseller', '18K Gold Plated']
  },
  {
    id: '9',
    name: 'ETERNAL KNOT HEART PENDANT',
    price: 649,
    category: 'Necklaces',
    image: '/images/products/eternal-heart-necklace.webp',
    tags: ['Romantic']
  },
  {
    id: '10',
    name: 'GARNET TEARDROP CHARM CHOKER',
    price: 799,
    category: 'Necklaces',
    image: '/images/products/garnet-drop-choker.webp',
    tags: ['Festive Drop']
  },
  {
    id: '11',
    name: 'GRECIAN KEY LUXE BANGLE',
    price: 749,
    category: 'Bangles',
    image: '/images/products/grecian-key-bangle.webp',
    tags: ['Timeless', 'Waterproof']
  },
  {
    id: '12',
    name: 'MOTHER OF PEARL STARFISH NECKLACE',
    price: 799,
    category: 'Necklaces',
    image: '/images/products/seashell-starfish-necklace.webp',
    tags: ['Summer Edit']
  },
  {
    id: '13',
    name: 'CRYSTAL LILY BUD NECKLACE',
    price: 599,
    category: 'Necklaces',
    image: '/images/products/crystal-lily-necklace.webp',
    tags: ['Dainty']
  }
];
