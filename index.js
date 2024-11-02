import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config()
const app = express();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.send("Hello World")
})

//MW
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173', 'https://bookshop-mern-frontend.vercel.app'],
    // methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    // allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Authorization"]
    // // "Access-Control-Allow-Credentials": true,
}))

//routes
import booksRoutes from "./books/book.route.js";
import ordersRoutes from "./orders/order.route.js";
import userRoutes from "./users/user.route.js";
import adminStatsRoutes from "./stats/admin.stats.route.js";
app.use("/api/v1/books", booksRoutes)
app.use("/api/v1/orders", ordersRoutes)
app.use("/api/v1/auth", userRoutes)
app.use("/api/v1/admin/stats", adminStatsRoutes)

async function main() {
    await mongoose.connect(process.env.DB_URL)
    app.use("/", (req, res) => {
        res.send('server is running')
    })
}

main().then(() => {
    console.log("DB is connected")
}).catch(err => console.error(err))

app.listen(port, () => {

    console.log('listening on port' + port)
})