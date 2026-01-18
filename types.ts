
export type BadgeType = 'HOT' | 'BEST_SELLER' | 'DEEP_DISCOUNT';

export interface Product {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  category: string;
  affiliateUrl: string;
  badge?: BadgeType;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
