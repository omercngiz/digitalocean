import { Request, Response } from 'express';
import { Prisma, prisma } from '@digitalocean/product-db';

export const createProduct = async (req: Request, res: Response) => {
    const data: Prisma.ProductCreateInput = req.body;
    const product = await prisma.product.create({ data });
    res.status(201).json(product);
}

export const updateProduct = async (req: Request, res: Response) => {
    res.json({ message: `Update product with ID ${req.params.id}` });
}

export const deleteProduct = async (req: Request, res: Response) => {
    res.json({ message: `Delete product with ID ${req.params.id}` });
}

export const getProduct = async (req: Request, res: Response) => {
    res.json({ message: `Get product with ID ${req.params.id}` });
}

export const getProducts = async (req: Request, res: Response) => {
    res.json({ message: 'Get all products' });
}