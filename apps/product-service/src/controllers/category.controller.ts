import { Request, Response } from 'express';
import { Prisma, prisma } from '@digitalocean/product-db';

export const createCategory = async (req: Request, res: Response) => {
    const data: Prisma.CategoryCreateInput = req.body;
    const category = await prisma.category.create({ data });
    res.status(201).json(category);
}

export const updateCategory = async (req: Request, res: Response) => {
    res.json({ message: `Update category with ID ${req.params.id}` });
}

export const deleteCategory = async (req: Request, res: Response) => {
    res.json({ message: `Delete category with ID ${req.params.id}` });
}

export const getCategory = async (req: Request, res: Response) => {
    res.json({ message: `Get category with ID ${req.params.id}` });
}

export const getCategories = async (req: Request, res: Response) => {
    res.json({ message: 'Get all categories' });
}