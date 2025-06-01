import express from 'express';
import Book from "../models/book.model.js";

export const createBook = async (req, res) => {
    const newBook = Book({...req.body})
    try {
        const response = await newBook.save()
        res.status(201).send({success: true, message: "saved book", data: response})
    } catch (err) {
        res.status(500).send({success: false, message: err})
    }
}

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).send({success: true, message: books.length < 1 ? "no books in dtb" : "", data: books})
    } catch (err) {
        res.status(500).send({success: false, message: err})
    }
}

export const getBook = async (req, res) => {
    try {
        const {id} = req.params
        const book = await Book.findById(id)
        if (!book) {
            res.status(404).send({success: true, message: "book not find"})
        }
        res.status(200).send({success: true, data: book})
    } catch (err) {
        res.status(500).send({success: false, message: err})
    }
}
export const editBook = async (req, res) => {
    try {
        const {id} = req.params
        const book = await Book.findByIdAndUpdate(id, req.body, {new: true})
        if (!book) {
            res.status(404).send({success: true, message: "book not find"})
        }
        res.status(200).send({success: true, message: "book updated", data: book})
    } catch (err) {
        res.status(500).send({success: false, message: err})
    }
}
export const deleteBook = async (req, res) => {
    try {
        const {id} = req.params
        const book = await Book.findByIdAndDelete(id)
        if (!book) {
            res.status(404).send({success: true, message: "book not find"})
        }
        res.status(200).send({success: true, message: "book deleted"})
    } catch (err) {
        res.status(500).send({success: false, message: err})
    }
}
