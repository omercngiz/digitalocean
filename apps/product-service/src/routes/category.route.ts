import { Router } from 'express';
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from '../controllers/category.controller';
import { shouldBeAdmin } from '../middleware/auth';

const router: Router = Router();

router.get('/test', (req, res) => {
  res.json({ message: 'works' });
});

router.post('/', shouldBeAdmin, createCategory);
router.put('/:id', shouldBeAdmin, updateCategory);
router.delete('/:id', shouldBeAdmin, deleteCategory);
router.get('/', getCategories);
router.get('/:id', getCategory);

export default router;