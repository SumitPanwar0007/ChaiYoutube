import mongoose from 'mongoose';
import express from 'express'

import dotenv from 'dotenv'
import connectDB from './Database/indexdb.js';

dotenv.config({
    path:'./env'
})

const app = express()
app.use(express.json()) // for parsing application/json
// connect to MongoDB database




connectDB();