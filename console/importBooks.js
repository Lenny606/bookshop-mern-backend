import axios from "axios";
import Book from "../models/book.model.js";
import {createDTOsFromResponse} from "../utils/utils.js";

const SK_BOOK_BASE_URL = "https://stephen-king-api.onrender.com/api";

(async () => {
    try {
        const response = await axios.get(`${SK_BOOK_BASE_URL}/books`)
        const books = response.data.data
        if (!books || books.length === 0) {
            console.log("Import [INFO] - no books from API")
            return
        }

        const BookDTOs = createDTOsFromResponse(books)

        const saved = await Book.insertMany(BookDTOs)
        console.log("Import [INFO] - processed", saved.length, "books")
    } catch (err) {
        console.error("Chyba při načítání dat:", err)
    }
})()