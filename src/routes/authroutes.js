import { Router } from "express";
import {loginController, registerController} from "../controller/authController.js";
import { check } from "express-validator"
import validator from "../utils/validator.js";
const router = Router()
//ATENTO A QUE NO TENGA NINGUN ESPACIO  !   !   !   !  !
router.post("/login",
    [
        check("email", "Emai is required").isEmail(),
        validator
    ],loginController )

    router.post("/register",
    [
        check("password", "Enter a Valid pasword!!!").isStrongPassword(), 
        validator
    ],registerController )
export default router