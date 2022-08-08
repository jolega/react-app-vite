import PropTypes from "prop-types";

export const CounterApp = ( { value } ) => {


  function handleAdd ( event ) { 
   
    console.log( event ) 
  
  }

    return (

        <>
        <h1> Counter App </h1>
        <h2> { value }</h2>

        <button onClick= { (event) => handleAdd (event) }> +1  </button>
        </>
    )
}

CounterApp.propTypes = {
    value:   PropTypes.number.isRequired,

  }
  
  CounterApp.defaultProps = {
    value :  0 ,
  }