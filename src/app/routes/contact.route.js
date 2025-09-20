import express from 'express';
import contacts from '../controllers/contact.controller.js'

const router = express.Router();

// Định nghĩa route riêng cho từng router
router.route('/')
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll)

router.route('/favorite')
    .get(contacts.findAllFavorite)

router.route('/:id')
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete)

export default router;
