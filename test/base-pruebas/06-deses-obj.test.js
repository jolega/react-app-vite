import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en <06-deses-obj />>', () =>  {

    test ('Get User debe de retornar un objeto ',  () =>  {
        
        const name = 'Tony',
              year =  45,
              password =  'Ironman' ;
            
        const persona = {
                nombre: name,
                edad: year,
                clave: password
            };

        const personaTest = {
                nombreClave: password,
                anios: year,
                latlng: {
                    lat: 14.1232,
                    lng: -12.3232
                 }
        }
    
        const personaDeses = usContext( persona ) ;
        expect(  personaTest ).toEqual( personaDeses ) ;
    
    })
    });