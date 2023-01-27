export type ItemType = {
  _id: string;
  title: string;
  image: string;
  imageAlt: string;
  price: number;
  description: string;
  categoryId: number;
  inventory: number;
  dimensionInch: string;
  dimensionCm: string;
  weightOz: number;
  weightG: number;
};

export type CartType = {
  _id: string;
  user_id: string;
  items: CartItemType[];
};

export type CartItemType = {
  // _id: string;
  item_id: string;
  quantity: string;
  price_each: string;
  thumbnail: string;
  // createdAt: string;
  // updatedAt: string;
};
