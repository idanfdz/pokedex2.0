import { useState, useEffect } from "react"
import { useForm } from "../hook/useForm";
import { PokemonContext } from "./PokemonContext"


const PokemonProvider = ({ children }) => {
    const [allPokemon, setAllPokemon] = useState([])
    const [globalPokemon, setGlobalPokemon] = useState([])
    const [offset, setOffset] = useState(0)

    const { valueSearch, onInputChange, onResetForm } = useForm({
        valueSearch: ''
    })


    // Estados simples
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)
    const [filteredPokemon, setFilteredPokemon] = useState([])
    const [typeSelected, setTypeSelected] = useState({
        fire: false,
        grass: false,
        steel: false,
        water: false,
        psychic: false,
        ground: false,
        ice: false,
        flying: false,
        ghost: false,
        normal: false,
        poison: false,
        rock: false,
        fighting: false,
        dark: false,
        bug: false,
        dragon: false,
        electric: false,
        fairy: false,
        shadow: false,
        unknow: false,
    })


    const getAllPokemon = async (limit = 50) => {
        const basdeUrl = 'https://pokeapi.co/api/v2/'

        const res = await fetch(`${basdeUrl}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json()

        const promises = data?.results?.map(async (pokemon) => {
            const res = await fetch(pokemon?.url)
            const data = await res?.json()
            return data
        })
        const results = await Promise.all(promises)
        setAllPokemon([...allPokemon, ...results])
        setLoading(false)
    }

    const getGlobalPokemon = async () => {
        const basdeUrl = 'https://pokeapi.co/api/v2/'
        const res = await fetch(`${basdeUrl}pokemon?limit=649&offset=0`)
        const data = await res?.json()

        const promises = data?.results?.map(async (pokemon) => {
            const res = await fetch(pokemon?.url)
            const data = await res?.json()
            return data
        })

        const results = await Promise.all(promises)

        setGlobalPokemon(results)
        setLoading(false)

    }

    const getPokemonById = async (id) => {
        const basdeUrl = 'https://pokeapi.co/api/v2/'

        const res = await fetch(`${basdeUrl}pokemon/${id}`)
        const data = await res?.json()
        return data
    }


    useEffect(() => {
        getAllPokemon()
    }, [offset])

    useEffect(() => {
        getGlobalPokemon()
    }, [])

    const onClickLoadMore = () => {
        setOffset(offset + 50)
    }

    const handleCheckBox = (e) => {
        setTypeSelected({
            ...typeSelected,
            [e.target.name]: e.target.checked
        })

        if (e.target.checked) {
            const filteredResult = globalPokemon.filter(pokemon => pokemon.types
                .map(type => type.type.name)
                .includes(e.target.name)
            )
            setFilteredPokemon([...filteredPokemon, ...filteredResult])
        } else {
            const filteredResult = filteredPokemon.filter(pokemon => !pokemon.types
                .map(type => type.type.name)
                .includes(e.target.name)
            )
            setFilteredPokemon([...filteredResult])
        }
    }
    return (
        <PokemonContext.Provider
            value={{
                valueSearch,
                onInputChange,
                onResetForm,
                allPokemon,
                globalPokemon,
                getPokemonById,
                onClickLoadMore,
                loading,
                setLoading,
                active,
                setActive,
                handleCheckBox,
                filteredPokemon,
            }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider
