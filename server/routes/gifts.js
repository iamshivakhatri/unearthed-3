import express from 'express'
const router = express.Router();
import GiftsController from '../controllers/gifts.js'




router.get('/', GiftsController.getGifts)

router.get('/:giftId', GiftsController.getGiftById)

export default router
