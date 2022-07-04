export interface Product {
  name: string;
  product_id: string;
  price: number;
  image: string;
}

export interface ProductResponse {
  products: Product[];
}

export type selectionTextsCount = '=0' | '=1' | 'other';
export type selectionPluralMap = Record<selectionTextsCount, string>;
