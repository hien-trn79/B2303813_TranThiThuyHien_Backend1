import express from 'express';
import contacts from '../controllers/contact.controller.js'

const router = express.Router();

// Định nghĩa route riêng cho từng router
router.get('/', contacts.findAll);
router.post('/', contacts.create);
router.delete('/', contacts.deleteAll);
router.get('/favorite', contacts.findAllFavorite);
router.get('/:id', contacts.findOne);
router.put('/:id', contacts.update);
router.delete('/:id', contacts.delete)

export default router;