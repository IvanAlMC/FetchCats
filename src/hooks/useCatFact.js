import { useEffect, useState } from "react"
import { getFact } from "../services/facts"

export function useCatFact () {
    const [fact, setFact] = useState()

    const getFactUpdated = () =>{
        getFact().then(newFact => setFact(newFact))
    }

    //efecto para recuperar el texto de la API de datos de gatos
    useEffect(getFactUpdated, [])

    return {fact, getFactUpdated}
}
