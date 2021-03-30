import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


function GifExpertApp(){
    

    const [categories, setCategories] = useState(['vegeta']);

   
    return (
        <>
        <h2>GifExpertApp</h2>

        {/* Primer Modulo Buscador de categorias y añade a la lista */}
        <AddCategory setCategories={setCategories}/>
        <hr/>
      
        {/* Segundo Modulo despliega categorias */}
        <ol>
            {
            categories.map( (category) => (<GifGrid key={category} category={category}/>))
            }
        </ol>

        </>
        
    )
}

export default GifExpertApp
