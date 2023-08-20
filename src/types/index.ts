export interface SellInfo {
  product: string;
  amount: number;
  created_at: string;
  _id: string;
}

export interface Store {
  _id: string;
  name: string;
  sell: SellInfo[];
}

export interface Product {
  _id: string;
  name: string;
  price: number;
}
