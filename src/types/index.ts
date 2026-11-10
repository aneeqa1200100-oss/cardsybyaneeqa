export interface Product {
  id: string;
  name: string;
  category: 'bouquets' | 'boxes' | 'frames' | 'cards' | 'tabarruk';
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  isRealUploaded?: boolean;
  watermarkTheme?: 'gold' | 'dark';
  badge?: string;
  turnaround: string;
  details: string[];
  customOptions?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  customizationText?: string;
  selectedColor?: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
  productName: string;
  verified: boolean;
}

export interface Reel {
  id: string;
  title: string;
  duration: string;
  likes: number;
  step: string;
  description: string;
  tags: string[];
  color: string;
}
