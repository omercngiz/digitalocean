import { Product, Category } from "@digitalocean/product-db";

export type ProductType = Product;
export type ProductsType = Product[];
export type CategoryType = Category;

export type StripeProductType = {
    id: string;
    name: string;
    price: number;
};