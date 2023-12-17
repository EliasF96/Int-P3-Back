import {readFile} from "fs/promises"
const readDataBase = async () =>{
    try {
        // console.log(__dirname) PARA VER LA DIRECCION ESTABLECIDA AL BD
        const productsList = await readFile("/database.json", "utf-8")
        const productsListParsed = JSON.parse(productsList)
        return productsListParsed
    } catch (error) {
        console.error(error)
    }
    

}
export default readDataBase