import express from 'express';
import {create, findAll, findOne, update, remove, deleteAll, findAllFavorite} from '../controllers/contact.controller.js'

const router = express.Router();

// Định nghĩa route riêng cho từng router
router.route('/')
    .get(findAll)
    .post(create)
    .delete(deleteAll)

router.route('/favorite')
    .get(findAllFavorite)

router.route('/:id')
    .get(findOne)
    .put(update)
    .delete(remove)

export default router;