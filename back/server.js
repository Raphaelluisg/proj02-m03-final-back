require('dotenv').config();

const express = require('express');
const cors = require('cors');


const TodolistsRoutes = require('./routes/todolists.routes');
const Conn = require('./conn/conn');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/todolists', TodolistsRoutes);


const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

Conn(db_url, db_user, db_pass, db_data);


const PORT = 4000;

app.listen(process.env.PORT || PORT, () =>{
    console.log(`App listening on port: http://localhost:${PORT}`);
})