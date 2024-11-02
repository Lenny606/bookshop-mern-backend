import express from 'express';
import Book from "./book.model.js";
import {createBook, getBook, getBooks, editBook, deleteBook} from "./book.controller.js";
import {verifyAdminToken} from "../middleware/verifyAdminToken.js";

const router = express.Router()

router.post('/create', verifyAdminToken, createBook) //needs token
router.get('/', getBooks)
router.get('/:id', getBook)
router.put('/edit/:id', verifyAdminToken ,editBook)
router.delete('/:id', deleteBook)

export default router;