import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

const GifExpertApp = () => {
    const initialState = ['Margot'];
    const [categorias, setCategorias] = useState(initialState);
    
/*     const handleAdd = () => {
        if (categorias.indexOf('HunterXHunter') === -1) {
            //setCategorias(['HunterXHunter', ...categorias]);
            setCategorias(cats => [...cats, 'HunterXHunter']);
        }
    } */
 
    return <>
        <h2>Gif Expert App</h2>
        <AddCategory setCategorias={ setCategorias } />
        <hr/>

        <ol>
           {
               categorias.map((cat,i) => 
                    <GifGrid key={ cat + i } category={ cat } />
               )
           } 
        </ol>
    </>;
}

export default GifExpertApp;