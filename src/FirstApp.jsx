

const newMessage = 'Johan Garcia !!!' ;
const  welcome = () =>  {
    return 'Welcome '
}
const object = {
    name : 'Johan',
    year : '32' ,
};
// <></> = Fragment 
export const FirstApp = ( props ) => {

  console.log (props)


  return (
    <>
     <h1>First App</h1>
      <h1>{ props.title }</h1>
     <h1>{ welcome () }</h1>
     <h1>{ 1 + 2 }</h1>
     <h1>{/* 1 + 1 this is a comment */ }</h1>
     <code> { JSON.stringify( object )}</code>
     <h1>{ newMessage } </h1>
     <p>i am text</p>
    </>
 
  )
}
