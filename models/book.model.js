import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    trending: {
        type: Boolean,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    oldPrice: {
        type: Number,
        required: true
    },
    newPrice: {
        type: Number,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    publisher : {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: true
    },
    ISBN: {
        type: String,
        required: true
    },
    pages : {
        type: Number,
        required: false
    },
    notes: {
        type: Array,
        required: false
    }

}, {timestamps: true})

const Book = mongoose.model('Book', bookSchema)
export default Book;