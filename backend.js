// -------------------------------- \\
// This file is part of the
// homestuff-project.
// Author: goetzmoritz
// -------------------------------- \\

const express = require('express');
const app = express();
require('dotenv').config();

dotenv = process.env;

const mongoose = require('mongoose')

mongoose.connect(dotenv.MYDB, { useNewUrlParser: true , useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to mongodb.'))
app.use(express.json())
app.listen(dotenv.MYPORT, function(){
    console.log(`Backend started on port ${dotenv.MYPORT}.`)
})