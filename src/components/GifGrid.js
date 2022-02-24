import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const {data:images, loading} = useFetchGifts( category );
    
    return (
        <>
            <h2 className='animate__animated animate__fadeInLeftBig'>{category}</h2>
            {!loading && <p className='animate__animated animate__flash'>Loading data...</p>}

            <div className='card-grid'>
                    {
                        images.map(( img,i) => {
                        return  <GifGridItem key={i} {...img} />
                        })
                    }
            </div> 
        </>
    )
}
