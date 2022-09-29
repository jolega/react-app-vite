import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en <02-template-string />>', () =>  {

    test ('Get Saludo debe de retonar "Hola  + nombre" ',  () =>  {
    
 
        const name = 'Johan' ;
        const message = getSaludo( name ) ;

        expect( message ).toBe(`Hola ${ name }`)
    })

});