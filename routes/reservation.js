import express from 'express'
import { sendReservation } from '../controllers/reservation.js';

const router = express.Router()

console.log('reached in route')

router.post('/send', sendReservation)

export default router;