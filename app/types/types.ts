
export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating?: number;
    stock?: number;
    brand?: string;
    category: string;
    thumbnail?: string;
    images: string;
  }
  
  export interface CartItem {
    id: number;
    title: string;
    description: string;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    brand?: string;
    category?: string;
    thumbnail?: string;
    images: string;
    price: number;
    quantity: number;
  }
  
  export interface WishlistItem {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    brand?: string;
    category?: string;
    thumbnail?: string;
    images: string;
  }
  