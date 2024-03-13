import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'

export const FilterBar = () => {

    const { active, handleCheckBox } = useContext(PokemonContext)

    return (
        <div className={`container-filters ${active ? 'active' : ''}`}>
            <div className="filter-by-type">
                <span>Tipo</span>
                <div className="group-type">
                    <input type="checkbox" name="grass" id="grass" onChange={handleCheckBox} />
                    <label htmlFor="grass">Planta</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="fire" id="fire" onChange={handleCheckBox} />
                    <label htmlFor="fire">Fuego</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="bug" id="bug" onChange={handleCheckBox} />
                    <label htmlFor="bug">Bicho</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="fairy" id="fairy" onChange={handleCheckBox} />
                    <label htmlFor="fairy">Hada</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="dragon" id="dragon" onChange={handleCheckBox} />
                    <label htmlFor="dragon">Dragón</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="ghost" id="ghost" onChange={handleCheckBox} />
                    <label htmlFor="ghost">Fantasma</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="ground" id="ground" onChange={handleCheckBox} />
                    <label htmlFor="ground">Tierra</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="normal" id="normal" onChange={handleCheckBox} />
                    <label htmlFor="normal">Normal</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="psychic" id="psychic" onChange={handleCheckBox} />
                    <label htmlFor="psychic">Psíquico</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="steel" id="steel" onChange={handleCheckBox} />
                    <label htmlFor="steel">Acero</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="dark" id="dark" onChange={handleCheckBox} />
                    <label htmlFor="dark">Siniestro</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="electric" id="electric" onChange={handleCheckBox} />
                    <label htmlFor="electric">Eléctrico</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="fighting" id="fighting" onChange={handleCheckBox} />
                    <label htmlFor="fighting">Lucha</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="flying" id="flying" onChange={handleCheckBox} />
                    <label htmlFor="flying">Volador</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="ice" id="ice" onChange={handleCheckBox} />
                    <label htmlFor="ice">Hielo</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="poison" id="poison" onChange={handleCheckBox} />
                    <label htmlFor="poison">Veneno</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="rock" id="rock" onChange={handleCheckBox} />
                    <label htmlFor="rock">Roca</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="water" id="water" onChange={handleCheckBox} />
                    <label htmlFor="water">Agua</label>
                </div>
            </div>
        </div>
    )
}
