import { useEffect, useState } from "react"

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useImageCat( {fact}) {
    const [imageUrl, setImageUrl] = useState()

    //efecto para recuperar la imagen de la API de imagenes de gatos
    useEffect(() =>{
        if (!fact) return
        const threeFirstWord = fact.split(' ', 3).join(' ')
        console.log(threeFirstWord)
    
        fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { _id } = response
                const url = `/cat/${_id}/says/${threeFirstWord}`
                setImageUrl(url)
            })
    }, [fact])

    return {imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
}