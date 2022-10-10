/**
 * Node  -  exemplo de uso de um modulo nativo
 * @author Enzo Segatto
 */

const http = require ('http')
http.createServer((req,res)=> {
    res.write("Bem vindo ao node")
    res.end()
}).listen(4040)