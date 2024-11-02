import express from 'express';
import {createAdmin} from "./user.controller.js";

const router = express.Router()

router.post('/admin', createAdmin)
//get orders by email
// router.get('/email/:email', getOrdersByEmail)
// router.get('/', getOrders)
// router.get('/:id', getOrder)
// router.put('/edit/:id', editOrder)
// router.delete('/:id', deleteOrder)

export default router;