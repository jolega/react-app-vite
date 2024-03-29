import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en < 05-funciones/>>', () =>  {

    test ('Get User debe de retornar un objeto ',  () =>  {
    
 
      const  testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
      }    
      const user =  getUser() ;

        expect(  testUser ).toEqual( user ) ;
    })

    test ('Get User debe de retornar un objeto con su nombre ',  () =>  {
    
        const name = 'Johan' ;
        const  testUser = {
            uid: 'ABC567',
            username: name
        }    
        const user =  getUsuarioActivo(name) ;
  
          expect(  testUser ).toEqual( user ) ;
      })  

});