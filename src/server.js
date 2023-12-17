
import express from "express";
import routesProduct from "./routes/productRoutes.js";
import routerAuth from "./routes/authroutes.js";
import routeError from "./utils/routeError.js";
import cors from "cors"
const server = express() 

server.use(cors() )
server.use(express.json());
server.use("/api", routesProduct)
// server.use(routesProduct)
//server.use(routerAuth)
server.use(routeError)

export default server