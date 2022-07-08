import { useState } from 'react'
import { AddCategory } from './AddCategory'


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = () => {
    setCategories([...categories, 'Valorant'])
    
  }


  return (
    <>  
        <AddCategory/>
        <h1>GifExpertApp</h1>
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
          {
            categories.map(category => {
              return <li key={category} >{category}</li>
            })
          }
        </ol>
    </>
  )
}
