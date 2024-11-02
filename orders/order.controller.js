import express from 'express';
import Order from "./order.model.js";

export const createOrder = async (req, res) => {
    const newOrder = Order({...req.body})
    try {
        const response = await newOrder.save()
        res.status(201).send({success: true, message: "saved order", data: newOrder})
    } catch (err) {
        res.status(500).send({success: false, message: err})
    }
}

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find()
        res.status(200).send({success: true, message: orders.length < 1 ? "no orders in dtb" : "", data: orders})
    } catch (err) {
        res.status(500).send({success: false, message: err})
    }
}
export const getOrdersByEmail = async (req, res) => {
    try {
        const {email} = req.params
        const orders = await Order.find({email: email}).sort({createdAt: -1})
        res.status(200).send({success: true, message: orders.length < 1 ? "no orders in dtb" : "", data: orders})
    } catch (err) {
        res.status(500).send({success: false, message: err})
    }
}

export const getOrder = async (req, res) => {
    try {
        const {id} = req.params
        const order = await Order.findById(id)
        if (!order) {
            res.status(404).send({success: true, message: "order not find"})
        }
        res.status(200).send({success: true, data: order})
    } catch (err) {
        res.status(500).send({success: false, message: err})
    }
}
export const editOrder = async (req, res) => {
    try {
        const {id} = req.params
        const order = await Order.findByIdAndUpdate(id, req.body, {new: true})
        if (!order) {
            res.status(404).send({success: true, message: "order not find"})
        }
        res.status(200).send({success: true, message: "order updated", data: order})
    } catch (err) {
        res.status(500).send({success: false, message: err})
    }
}
export const deleteOrder = async (req, res) => {
    try {
        const {id} = req.params
        const order = await Order.findByIdAndDelete(id)
        if (!order) {
            res.status(404).send({success: true, message: "order not find"})
        }
        res.status(200).send({success: true, message: "order deleted"})
    } catch (err) {
        res.status(500).send({success: false, message: err})
    }
}
