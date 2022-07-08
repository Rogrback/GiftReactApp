import React from 'react'
import { useState } from 'react'

export const AddCategory = () => {
  
    const [inputValue, setInputValue] = useState([])

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={ e => onSubmit(e)}>
            <input 
                type= "text"
                placeholder= "Buscar gifs"
                value= { inputValue }
                onchange= { e => onInputChange(e)}
            />
        </form>
        
    )
}
