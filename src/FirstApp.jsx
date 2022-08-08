import PropTypes from "prop-types";

const newMessage = 'Johan Garcia !!!' ;
const  welcome = () =>  {
    return 'Welcome '
}
const object = {
    name : 'Johan',
    year : '32' ,
};
// <></> = Fragment 
export const FirstApp = ( { title, subTitle, num  }) => {


  return (
    <>
     <h1>First App</h1>
      <h1>{ title }</h1>
      <h2>{ subTitle }</h2>
     <h1>{ welcome () }</h1>
     <h1>{ num + 1 + 2 }</h1>
     <h1>{/* 1 + 1 this is a comment */ }</h1>
     <code> { JSON.stringify( object )}</code>
     <h1>{ newMessage } </h1>
     <p>i am text</p>
    </>
 
  )
}

// component mandatory variables
FirstApp.propTypes = {
  num :  PropTypes.number.isRequired,
  subTitle :   PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  num :  0 ,
  subTitle :  'not subtitle',
  title: ' not title ',
  titleTwo : 'not title Two',
}
