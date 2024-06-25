import './App.css'
import { useImageCat } from "./hooks/useImageCat"
import { useCatFact } from "./hooks/useCatFact"

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {

    const { fact, getFactUpdated} = useCatFact()
    const { imageUrl } = useImageCat({fact})

    const handleClick = async () =>{
       getFactUpdated()
    } 

    return (
        <main>
            <h1> App de gatitos </h1>
            <button onClick={handleClick}>Obtener nueva curiosidad</button>
            <section>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Iamgen extraida usando las tres primeras palabras de ${fact}`} />}
            </section>
        </main>
    )
}