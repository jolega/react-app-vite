import { useState } from 'react'
import PropTypes from "prop-types";


export const CounterApp = ( { value } ) => {

  const [ counter, setCounter ] = useState ( value ) ;

  const  handle = ( event, action ) => { 

    (action === 'sum' ) 
      ? setCounter ( counter + 1 ) 
      : (action === 'rest' ) 
        ?  setCounter ( counter -1 )  
        :setCounter  ( value ) ;

  }
    return (

        <>
        <h1> Counter App </h1>
        <h2> { value }</h2>
        <h2> { counter }</h2>

        <button onClick= { (event) => handle (event, "sum") }> +1  </button>
        <button onClick= { (event) => handle (event, "rest") }> -1  </button>
        <button onClick= { (event) => handle (event, "reset") }> Reset  </button>
        </>
    )
}

CounterApp.propTypes = {
    value:   PropTypes.number.isRequired,

  }
  
  CounterApp.defaultProps = {
    value :  0 ,
  }