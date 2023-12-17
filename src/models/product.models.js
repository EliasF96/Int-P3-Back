import { Schema, model } from "mongoose";
//EN ESTA MODALIDAD, LOS OBJETOS DE DATOS SON COLECCIONES, QUE ENTRE VARIOS DE ELLOS, CONFORMAN UNA COLECCION, ESO ES LA BASE DE DATOS

//CON SCHEMA DAMOS ESTRUCTURA A LOS CAMPOS 
const ProductSchema =  Schema({ 
    name:{
        type : String,
        require : [true, "Name required"],
        unique : true
    },
    price: {
        type: Number,
        require: [true, "Required!"],
        unique:true
    },
    stock : Number,
    mark : String,
    category: String,
    descShort: String,
    descLarge: String,
    freeDelivery: String,
    ageSince: Date,
    ageUntil: Date,
    image: String,
}) 

const ProductCartSchema =  Schema({ 
        name: String,
        price: Number,
        image: String,
        amount: Number
})  


const productModel = model("Product", ProductSchema)
const productCartModel = model("Cart", ProductCartSchema)
export  {productModel, productCartModel}