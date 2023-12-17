import {productModel, productCartModel} from "../models/product.models.js"
import readDataBase from "../utils/readDatabase.js"
import { writeFile } from "fs/promises"

const getProductsService = async () => {
    try {
        const productsList = await productModel.find() //REEMPLAZAMOS EL readDataBase()
        return productsList
    } catch (error) {
        console.log("A error appears" + error)
        //HAY MILES DE FORMAS DE TRATAR CON  ERRORES, LIBRERIAS Y FRAMEWORKS
        throw new Error("Internal error Server?")
    }
}

const getProductsCartService = async () => {
    try {
        const productsList = await productCartModel.find() //REEMPLAZAMOS EL readDataBase()
        return productsList
    } catch (error) {
        console.log("A error appears" + error)
        //HAY MILES DE FORMAS DE TRATAR CON  ERRORES, LIBRERIAS Y FRAMEWORKS
        throw new Error("Internal error Server?")
    }
}


const getProductByIdService = async (idProduct) => {
    try {
        const productSelected = await productModel.findOne({ _id: idProduct })        // const products = await readDataBase()
        // const productSelected = products.find((item) => item.id === id)
        // if (!productSelected) return { message: "Product not found" }
        return productSelected
    } catch (error) {
        console.error(error)
        throw new Error("Internal error Server?")
    }
}

const getProductCartByIdService = async (idProduct) => {
    try {
        const productSelected = await productCartModel.findOne({ _id: idProduct })        // const products = await readDataBase()
        // const productSelected = products.find((item) => item.id === id)
        // if (!productSelected) return { message: "Product not found" }
        return productSelected
    } catch (error) {
        console.error(error)
        throw new Error("Internal error Server?")
    }
}
//creamos otro buscador por nombr
const getProductByNameService = async (request) => {
    try {
        const name = request.params.name
        const productSelected = await productModel.findOne({ name: name })        // const products = await readDataBase()
        // const productSelected = products.find((item) => item.id === id)
        if (!productSelected) return { message: "Product not found" }
        return productSelected
    } catch (error) {
        console.error(error)
        throw new Error("Internal error Server?")
    }
}

const createProductService = async (request) => {
    try {
        const newProduct = request.body
        const newProductDB = new productModel({
            id: newProduct.id,
            name: newProduct.name,
            price: newProduct.price,
            stock: newProduct.stock,
            mark: newProduct.mark,
            category: newProduct.category,
            descShort: newProduct.descShort,
            descLarge: newProduct.descLarge,
            freeDelivery: newProduct.freeDelivery,
            ageSince: newProduct.ageSince,
            ageUntil: newProduct.ageUntil,
            image: newProduct.image,
        })
        await newProductDB.save()
        return { message: "The product has been created! :D" }
    } catch (error) {
        console.error(error)
        return { messageError: "Error adding the product D:" }
    }
}

const createProductCartService = async (request) => {
    try {
        const newProduct = request.body
        const newProductDB = new productCartModel({
            id: newProduct.id,
            name: newProduct.name,
            price: newProduct.price,
            image: newProduct.image,
            amount: newProduct.amount
        })
        await newProductDB.save()
        return { message: "The product has been added to cart :D" }
    } catch (error) {
        console.error(error)
        return { messageError: "Error adding product to cart D:" }
    }
}

const updateProductService = async (request, response) => {
    try {
        const id = request.params.id
        const updateProduct = request.body
        const product = await productModel.findOneAndUpdate({ _id: id }, updateProduct)
        if (!product) return undefined
        return product

    } catch (error) {
        console.error(error)
        return { message: "Error updating the product" }
    }
}
const deleteProductService = async (request, response) => {
    try {
        const id = request.params.id
        const deleteProduct = await productModel.deleteOne({ _id: id })
        if (deleteProduct.deletedCount == 0) return { message: "Product not found" }
        return { message: "Product Deleted" }
    } catch (error) {
        console.log(error)
    }
}
const deleteProductCartService = async (request, response) => {
    try {
        const id = request.params.id
        const deleteProduct = await productCartModel.deleteOne({ _id: id })
        if (deleteProduct.deletedCount == 0) return { message: "Product not found" }
        return { message: "Product Deleted" }
    } catch (error) {
        console.error(error)
    }
}
export {
    getProductsService,
    getProductByIdService,
    createProductService,
    updateProductService, deleteProductService,
    getProductByNameService,
    createProductCartService,
    getProductsCartService,
    getProductCartByIdService,
    deleteProductCartService
}
//EL DATABASE LOCAL TAMBIEN SE ACTUALIZA SI TIENE LA EXTENSION JSON EN VEZ DE TXT.