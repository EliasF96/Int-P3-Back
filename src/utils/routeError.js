const routeError = (request, response)=>{
    response.status(400).json({
        message: `Erro at the route: ${request.url}. Please check it cause the method ${request.method} wasn't implemented!`
    })
}
export default routeError