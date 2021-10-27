const express = require('express');
const cors = require('cors');

const router = require('./src/routes/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

require('dotenv').config();

const porta = process.env.PORT;

app.listen(porta, () => {
    console.log("Servidor rodando na porta: " + porta)
});


/*
app.get('/',(request,response)=>{
    response.send("Hello world")
});
*/