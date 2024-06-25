import { useEffect, useState } from "react"
import './App.css'

export function App() {

    const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
    const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
    //const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?`
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    //efecto para recuperar el texto de la API de datos de gatos
    useEffect(() =>{
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const {fact} = data
            setFact(fact)
            })
    }, [])

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


    return (
        <main>
            <h1> App de gatitos </h1>
            <section>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} />}
            </section>
        </main>
    )
}