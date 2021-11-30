const functions = require("firebase-functions");
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors({ origin: true }))


const MONGODB_URI = functions.config().database.url

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
const db = mongoose.connection

db.on('error', (err) => console.error(err))
db.once('open', () => console.log('DB Connected.'))


app.use(express.json())

const statsRouter = require('./routes/stats')

app.use('/stats', statsRouter)


exports.app = functions.https.onRequest(app);
