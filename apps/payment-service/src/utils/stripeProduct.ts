import stripe from "./stripe.js";
import { StripeProductType } from "@digitalocean/types";

export const createStripeProduct = async (item: StripeProductType) => {
    try {
        const product = await stripe.products.create({
            name: item.name,
            default_price_data: {
                currency: "usd",
                unit_amount: item.price,
            },
        });
        return product;
    }catch (error) {
        console.log(error);
        return error;
    }
}

export const getStripeProductPrice = async (productId: string) => {
    try {
        const price = await stripe.prices.list({
            product: productId,
        });
        return price.data[0]?.unit_amount; // Assuming you want the first price associated with the product
    }catch (error) {
        console.log(error);
        return error;
    }
}

export const listStripeProducts = async () => {
    try {
        const products = await stripe.products.list();
        return products;
    }catch (error) {
        console.log(error);
        return error;
    }
}