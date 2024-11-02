import express from 'express';
import {getStatistics} from "./admin.stats.js";
import {verifyAdminToken} from "../middleware/verifyAdminToken.js";

const router = express.Router()

router.get('/', verifyAdminToken, getStatistics)

export default router;