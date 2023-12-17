import { Schema, model } from "mongoose";
//EN ESTA MODALIDAD, LOS OBJETOS DE DATOS SON COLECCIONES, QUE ENTRE VARIOS DE ELLOS, CONFORMAN UNA COLECCION, ESO ES LA BASE DE DATOS

//CON SCHEMA DAMOS ESTRUCTURA A LOS CAMPOS 
const UserSchema =  Schema({ 
    email:{
        type : String,
        unique : true,
        required : [true, "Email Required!!!"]
    },
    password: {
        type:String,
        required : [true, "Password Required!!!"]
    }
})


const UserModel = model("User", UserSchema)
export default UserModel