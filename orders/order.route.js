import express from 'express';
import {createOrder, getOrder, getOrders, editOrder, deleteOrder, getOrdersByEmail} from "./order.controller.js";

const router = express.Router()

router.post('/create', createOrder)
//get orders by email
router.get('/email/:email', getOrdersByEmail)
router.get('/', getOrders)
router.get('/:id', getOrder)
router.put('/edit/:id', editOrder)
router.delete('/:id', deleteOrder)

export default router;