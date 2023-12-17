import { getProductsService, getProductByIdService, createProductService, updateProductService, deleteProductService, getProductByNameService, createProductCartService, getProductsCartService, getProductCartByIdService, deleteProductCartService } from "../service/productService.js"

//CREAMOS ESTE METODO DE LECTURA A PARTE PARA LUEGO MIGRARLO AL SERVIDOR Y USARLO
const getProductsController = async (request, response) => {
    try {
        const products = await getProductsService()
        if (products.length === 0) {
            return response.status(404).json({ message: "Products not found" })
        }
        response.json(products)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const getProductsCartController = async (request, response) => {
    try {
        const products = await getProductsCartService()
        if (products.length === 0) {
            return response.status(404).json({ message: "Products not found" })
        }
        response.json(products)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}
const getProductsByIDController = async (request, response) => {
    try {
        const id = request.params.id
        const productSelected = await getProductByIdService(id)
        if (!productSelected) return response.status(404).json({ message: "Products not found" })
        response.json(productSelected)
    } catch (error) {
        console.error(error)
    }
}
const getProductCartByIdController = async (request, response) => {
    try {
        const id = request.params.id
        const productSelected = await getProductCartByIdService(id)
        if (!productSelected) return response.status(404).json({ message: "Products cart not found" })
        response.json(productSelected)
    } catch (error) {
        console.error(error)
    }
}
const getProductByNameController = async (request, response) => {
    try {
        const productSelected = await getProductByNameService(request)
        response.json(productSelected)
    } catch (error) {
        console.error(error)
    }
}
const postProductController = async (request, response) => {

    const createProduct = await createProductService(request)
    response.json(createProduct)
}

const postProductCartController = async (request, response) => {
    const createProduct = await createProductCartService(request)
    response.json(createProduct)
}

const updateProductController = async (request, response) => {
    try {
        const updateProduct = await updateProductService(request)
        if (!updateProduct)
            return response.status(404).json({ message: "Product not found" })
        response.status(204).json(updateProduct)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}
const deleteProductController = async (request, response) => {
    const deletedProduct = await deleteProductService(request)
    response.json(deletedProduct)
}
const deleteProductCartController = async (request, response) => {
    const deletedProduct = await deleteProductCartService(request)
    response.json(deletedProduct)
}

export {
    getProductsController,
    getProductsByIDController,
    postProductController,
    updateProductController,
    deleteProductController,
    getProductByNameController,
    postProductCartController,
    getProductsCartController,
    getProductCartByIdController,
    deleteProductCartController
}