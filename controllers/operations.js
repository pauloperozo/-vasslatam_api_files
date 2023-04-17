//////////////////////////////////////////////////////////////////////////////////////////
import path from 'path'
import  { readFileSync } from 'fs'
//////////////////////////////////////////////////////////////////////////////////////////
const Read = ( name ) => {

    try {

        const home = process.cwd()
        const src = path.join( home,`/uploads/${name}`)
        const context = readFileSync( src )
        return context.toString()
        
    } catch (e) {
        console.error( e )
        throw new Error( e )
    }
 
}
//////////////////////////////////////////////////////////////////////////////////////////
const ContarLineasControllers = async ( req, res ) => {

    try {
        const name = req.params.name
        const context = Read( name )
        const result  = context.split("\r\n").length
        return res.json({menssage:`Cantidad De Lineas: ${result}`})
    } catch (e) {
        console.error( e )
        return res.status(500).json({message:"Error Al Leer El Archivo"})
    }

 }
//////////////////////////////////////////////////////////////////////////////////////////
const ContarPalabrasControllers = async ( req, res ) => {

    try {
        const name = req.params.name
        const context = Read( name )
        const result  = context.split(" ").length
        return res.json({menssage:`Cantidad De Palabras: ${result}`})
    } catch (e) {
        console.error( e )
        return res.status(500).json({message:"Error Al Leer El Archivo"})
    }
 }
//////////////////////////////////////////////////////////////////////////////////////////
const BuscarPalabrasControllers = async ( req, res ) => { 

    try {
        const name  = req.params.name
        const value = req.params.value 
        const context = Read( name )
        const result  = context.split(" ").filter( palabra => palabra.toUpperCase() == value.toUpperCase() ).length
        return res.json({menssage:`coincidencias : ${result}`})
    } catch (e) {
        console.error( e )
        return res.status(500).json({message:"Error Al Leer El Archivo"})
    }

}
//////////////////////////////////////////////////////////////////////////////////////////
const IrLineaControllers = async ( req, res ) => {

    try {
        const name  = req.params.name
        const value = Number( req.params.value ) - 1
        const context = Read( name )
        const result  = context.split("\r\n")[ value ]
        return res.json({menssage: result })
    } catch (e) {
        console.error( e )
        return res.status(500).json({message:"Error Al Leer El Archivo"})
    }

 }
//////////////////////////////////////////////////////////////////////////////////////////
const BuscarPalindromesControllers = async ( req, res ) => { 

    try {
        const name  = req.params.name
        const context = Read( name )
        const result  = context.split(" ").filter( palabra => palabra == Array.from(palabra).reverse().join('') ).length
        return res.json({menssage:`coincidencias : ${result}`})
    } catch (e) {
        console.error( e )
        return res.status(500).json({message:"Error Al Leer El Archivo"})
    }

}
//////////////////////////////////////////////////////////////////////////////////////////
export {  ContarLineasControllers,ContarPalabrasControllers,BuscarPalabrasControllers,IrLineaControllers,BuscarPalindromesControllers }
//////////////////////////////////////////////////////////////////////////////////////////


