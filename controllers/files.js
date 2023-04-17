import path from 'path'
import  { readFileSync, readdirSync, writeFileSync,unlinkSync } from 'fs'
//////////////////////////////////////////////////////////////////////////////////////////
const Index =  async ( req, res ) => {

    try {

        const home = process.cwd()
        const src = path.join( home,`/uploads/`)
        const files = readdirSync( src ).filter( file => file.includes('.txt') ).map( file => ( { name: file } ) )
        return res.json( files )
        
    } catch (e) {
        console.error( e )
        res.status(500).json({message:"Error Guardando el Archivo"})
    }
 
}
//////////////////////////////////////////////////////////////////////////////////////////
const Create =  async ( req, res ) => {

    try {

        const { file } = req
        const home = process.cwd()
        const src = path.join( home,`/uploads/${file.originalname}`)
        writeFileSync(src,req.file.buffer)
        return res.json({message:"Archivo Guardado"})
        
    } catch (e) {
        console.error( e )
        res.status(500).json({message:"Error Guardando el Archivo"})
    }
}
//////////////////////////////////////////////////////////////////////////////////////////
const Read =  async ( req, res ) => {

    try {

        const file = req.params.name
        const home = process.cwd()
        const src = path.join( home,`/uploads/${file}`)
        const context = readFileSync( src )
        return res.send( context )
        
    } catch (e) {
        console.error( e )
        res.status(500).json({message:"Error Al Leer El Archivo"})
    }
 
}
//////////////////////////////////////////////////////////////////////////////////////////
const Delete =  async ( req, res ) => {

    try {

        const file = req.params.name
        const home = process.cwd()
        const src = path.join( home,`/uploads/${file}`)
        unlinkSync( src )
        return res.json({message:"Archivo Borrado"})
        
    } catch (e) {
        console.error( e )
        res.status(500).json({message:"Error Al Leer El Archivo"})
    }

}
//////////////////////////////////////////////////////////////////////////////////////////
export default { Index, Create, Read ,Delete }
//////////////////////////////////////////////////////////////////////////////////////////