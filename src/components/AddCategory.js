import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategorias }) => {

    const [value, setValue] = useState('');

    const handleOnChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim().length > 3) {
            setCategorias( cats  => addCategory(cats,value));
        }
    }

    const addCategory = (cats, value) => {
        if (cats.indexOf(value) === -1) {
            setValue('');
            return [value, ...cats];
        } else {
            return cats;
        }
    }

    return <form onSubmit={ handleSubmit }>
        <input
            type="text" 
            value={ value }
            onChange= { handleOnChange }
        ></input>
    </form>;
  
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}