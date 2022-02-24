import { useEffect, useState } from 'react'
import { getImages } from '../services/gifs-api-service';

export const useFetchGifts = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: false
    });

    useEffect(() => {
        getImages(category)
            .then( imgs => {
                setState({data: imgs, loading: true}); 
            })
    }, [ category ]);

    return state;
}