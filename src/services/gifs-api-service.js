const limit = 10;
const api_key = '3zzSm1iR8zyJdVtPvJtv2Sk8rZA72OaC';

export const getImages = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=${limit}`;
    return await fetch(encodeURI(url))
    .then(response => response.json())
    .then(({ data }) => {
        const imgs = data.map(img => {
            return  {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
        return imgs;
    })
    .catch (err => console.warn(err));
}

export const gteGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=${limit}`;
    const response = await fetch( url );
    const { data } = await response.json();

    const gifs = data.map(img => {
        return  {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}