import React from 'react'
import { Link } from 'react-router-dom';

const CardPokemon = ({ pokemon }) => {

    return (
        <Link to={`/pokemon/${pokemon?.id}`} className='card-pokemon'>
            <div className="card-img">
                <img
                    src={pokemon?.sprites?.other?.dream_world?.front_default}
                    alt={`Pokemon ${pokemon?.name}`}
                />
            </div>
            <div className="card-info">
                <span className="pokemon-id">#{pokemon?.id}</span>
                <h3>{pokemon?.name}</h3>
                <div className="card-types">
                    {pokemon?.types.map(type => (
                        <span key={type?.type?.name} className={type?.type?.name}>
                            <img src={`https://raw.githubusercontent.com/idanfdz/pokedex2.0/e809a4610118a8fcc7df55df0c561fe99d429321/src/assets/type/${type?.type?.name}.svg`} alt={type?.type?.name} />
                            {type?.type?.name}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    )
}

export default CardPokemon