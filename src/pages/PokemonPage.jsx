import React, { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'

export const PokemonPage = () => {

  const { getPokemonById } = useContext(PokemonContext)
  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState({})

  const { id } = useParams()

  const fetchPokemon = async (id) => {
    const data = await getPokemonById(id)
    setPokemon(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchPokemon(id)
  }, [])

  return (
    <main className='container main-pokemon'>
      {loading ? (<Loader />) : (
        <>
          <div className="header-main-pokemon">
            <span className="number-pokemon">#{pokemon.id}</span>
            <div className="container-img-pokemon">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={`Pokemon ${pokemon.name}`}
              />
            </div>

            <div className="container-info-pokemon">
              <h1>{pokemon.name}</h1>
              <div className="card-types">
                {pokemon.types.map((type, index) => (
                  <span className={`${type.type.name}`} key={index}>
                    {type.type.name}
                  </span>
                ))}
              </div>
              <div className="info-pokemon">
                <div className="group-info">
                  <h2>Altura</h2>
                  <span>{(pokemon.height * .10).toFixed(1)} m</span>
                </div>
                <div className="group-info">
                  <h2>Peso</h2>
                  <span>{pokemon.weight}kg</span>
                </div>
              </div>
              <div className="abilities-container container">
                <h2>Habilidades</h2>
                <div className="info-abilities">
                  {
                    pokemon.abilities.map((ability) => (

                      <div className="ability-info">
                        <span>{ability.ability.name}</span>
                      </div>

                    ))
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="container-stats">
            <h1>Estadísticas</h1>
            <div className="stats">
              <div className="stat-group">
                <span>Hp</span>
                <span className="counter-stat">
                  {pokemon.stats[0].base_stat}
                </span>
                <progress value={`${pokemon.stats[0].base_stat}`} max="160"></progress>
                <span className="counter-stat">
                  160
                </span>
              </div>
              <div className="stat-group">
                <span>Attack</span>
                <span className="counter-stat">
                  {pokemon.stats[1].base_stat}
                </span>
                <progress value={`${pokemon.stats[1].base_stat}`} max="160"></progress>
                <span className="counter-stat">
                  160
                </span>
              </div>
              <div className="stat-group">
                <span>Defense</span>
                <span className="counter-stat">
                  {pokemon.stats[2].base_stat}
                </span>
                <progress value={`${pokemon.stats[2].base_stat}`} max="160"></progress>
                <span className="counter-stat">
                  160
                </span>
              </div>
              <div className="stat-group">
                <span>Special Attack</span>
                <span className="counter-stat">
                  {pokemon.stats[3].base_stat}
                </span>
                <progress value={`${pokemon.stats[3].base_stat}`} max="160"></progress>
                <span className="counter-stat">
                  160
                </span>
              </div>
              <div className="stat-group">
                <span>Special Defense</span>
                <span className="counter-stat">
                  {pokemon.stats[4].base_stat}
                </span>
                <progress value={`${pokemon.stats[4].base_stat}`} max="160"></progress>
                <span className="counter-stat">
                  160
                </span>
              </div>
              <div className="stat-group">
                <span>Speed</span>
                <span className="counter-stat">
                  {pokemon.stats[5].base_stat}
                </span>
                <progress value={`${pokemon.stats[5].base_stat}`} max="160"></progress>
                <span className="counter-stat">
                  160
                </span>
              </div>
            </div>
          </div>
        </>
      )

      }
    </main>
  )
}

