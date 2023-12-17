import express from 'express';
import * as productController from '../controller/productController.js';
import  productBodyValidator from '../utils/productBodyValidator.js';
const router  = express.Router();

//AHORA QUE USAMOS EL VALIDADOR, PRIMERO PASA POR ÉL Y LUEGO AL CONTROLADOR
router.get('/products',productController.getProductsController)
router.get('/products/:id', productController.getProductsByIDController)
router.post('/products', productController.postProductController)
//USAMOS OTRO POST CON EL VALIDADOR COMPLETO. Primero importar el validator creado
// router.post('/product', body("id").isEmpty(),body("name").isEmpty(), validator, productController.postProductController)
router.get('/products-name/:name', productController.getProductByNameController)
router.put('/products/:id', productBodyValidator, productController.updateProductController)
router.delete('/products/:id',  productController.deleteProductController)

router.get('/cart', productController.getProductsCartController)
router.get('/cart/:id', productController.getProductCartByIdController)
router.post('/cart', productController.postProductCartController)
router.delete('/cart/:id',  productController.deleteProductCartController)

export default router
