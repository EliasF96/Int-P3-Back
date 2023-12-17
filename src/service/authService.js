

import UserModel from "../models/user.models.js";
import bcrypt from "bcryptjs"
//ESTE CODIGO VALIDA SI EL PASS ES IGUAL AL PASS HASHEADO
const loginService = async (request, response) => {
    const { email, password } = request.body  //TOMA LOS DATOS EMAIL Y PASS
    try {
        const user = await UserModel.findOne({ email }) //USAMOS LA FUNCION PARA BUSCARLOS CON ESE EMAIL EN ESPECIFICO
        if (!user) {      //CASO DE NO ENCOTRARLO, MENSAJE
            return response.status(400).json({ message: "Invalid  Values in E or P" })
        }
        const isValidPassword = bcrypt.compareSync(password, user.password) //VALIDA LA CONTRASEÑA ENCRIPTADA CON LA DE LA BBDD
        if (!isValidPassword) {
            return response.status(400).json({ message: "Incorrect email or password" })
        }
        const token = generateJWT(email);
        return response.status(200).json({ token })
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: "Internal server error" })
    }
}
//DEBEMOS CREAR EL REGISTRO 
const registerService = async (request, response) => {
    try {
        const { email, password } = request.body
        const newUser = new UserModel({
            email,
            //RECIBE UN PASSWORD, Y POR DEFECTO DA 10 
            password: bcrypt.hashSync(password)
        })
        await newUser.save()
        return response.status(201).json({ message: "User created susscessfully!" })
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: "Internal server error" })
    }
}
export  { loginService, registerService }