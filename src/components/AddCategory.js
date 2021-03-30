import React, {useState}from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{

        setInputValue(e.target.value);
    }

    const hadleSubmit = (e) =>{
        e.preventDefault();
        if ( inputValue.trim().length > 2 ){
            setCategories(cats => [inputValue,...cats]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={hadleSubmit}>
            <h2>Añadir Categoria</h2>
            
            <input 
            placeholder='ingrese una busqueda'
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            
            />
           
            <button> Agregar</button>
        </form>
    )
}
AddCategory.prototype = {
    setCategories:PropTypes.func.isRequired,
    setInputValue:PropTypes.string.isRequired
}