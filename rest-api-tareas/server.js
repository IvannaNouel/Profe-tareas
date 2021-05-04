require('dotenv').config(); //Para cargar las variables de entorno

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

const app = express();

const port = 4000;

//Conexión BD
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;


db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Conectando a la base de datos..."));

//Prueba GET del servidor
/*app.get("/", (req, res) => {
    res.send("Hola mundo..probando..1..2...3");
});*/

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tareas", require("./routes/tareas-routes"));


app.listen(port, () => {
    console.log("El servidor esta escuchando....");
});


