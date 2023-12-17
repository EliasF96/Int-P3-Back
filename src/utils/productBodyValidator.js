//OTRO EJEMPLO DONDE VAMOS A VALIDAR LOS CAMPOS CUANDO AGREGEMOS O MODIFIQUEMOS UN PRODUCTO  
const productBodyValidator = (request, response, next) => {
    const { name, description, price, image, stock } = request.body
    //CREAMOS UN VALIDADOR MEJOR
    const validationArray = []
    if (typeof name !== "string") validationArray.push("Name must be string")
    if (typeof description !== "string") validationArray.push("Description must be string")
    if (typeof price !== "number") validationArray.push("Price must be Number")
    if (typeof stock !== "number") validationArray.push("Stock must be Number")
    if (price <= 0 || stock <= 0) validationArray.push("Price and Stock must be a positive value")
    if (validationArray.length > 0) {
        return response.status(400).json({message: "Error en el body", errors: validationArray })
    }
    next()
}
export default productBodyValidator