import server from "./src/server.js";
import { config } from "dotenv";
import connect from "./src/database/configuration.js";
config()
connect()
//CON PORT INDICAMOS QUE USARÁ EL PUERTO DE ENV O EL OTRO POR DEFECTO
const PORT = process.env.PORT || 8080;

server.listen(PORT, ()=> console.log("Hola inicie el servidor en el puerto: "+PORT))