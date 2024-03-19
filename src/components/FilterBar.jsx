import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
export const FilterBar = () => {

    const { active, setActive, handleCheckBox } = useContext(PokemonContext)

    return (
        <>
            <div className={`container-filters ${active ? 'active' : ''}`}>
                <div className='container-cross-out'>
                    {/* <img src='https://images.freeimages.com/vhq/images/thumbs/f82/cross-out-147164.png' className='cross-out' onClick={() => setActive(!active)} /> */}
                    <img src='https://cdn.icon-icons.com/icons2/1157/PNG/512/1487086362-cancel_81578.png' className='cross-out' onClick={() => setActive(!active)} />
                </div>
                <div className="filter-by-type">
                    <span>Tipo</span>
                    <div className="group-type">
                        <input type="checkbox" name="grass" id="grass" onChange={handleCheckBox} />
                        <label htmlFor="grass" className='grass'>
                            <img src='src/assets/type/grass.svg' alt="" />
                            Planta
                        </label>
                    </div>
                    <div className="group-type">
                        <input type="checkbox" name="fire" id="fire" onChange={handleCheckBox} />
                        <label htmlFor="fire" className='fire'>
                            <img src='src/assets/type/fire.svg' alt="" />
                            Fuego
                        </label>
                    </div>
                    <div className="group-type">
                        <input type="checkbox" name="bug" id="bug" onChange={handleCheckBox} />
                        <label htmlFor="bug" className='bug'>
                            <img src='src/assets/type/bug.svg' alt="" />
                            Bicho
                        </label>
                    </div>
                    <div className="group-type">
                        <input type="checkbox" name="fairy" id="fairy" onChange={handleCheckBox} />
                        <label htmlFor="fairy" className='fairy'>
                            <img src='src/assets/type/fairy.svg' alt="" />
                            Hada
                        </label>
                    </div>
                    <div className="group-type">
                        <input type="checkbox" name="dragon" id="dragon" onChange={handleCheckBox} />
                        <label htmlFor="dragon" className='dragon'>
                            <img src='src/assets/type/dragon.svg' alt="" />
                            Dragón
                        </label>
                    </div>
                    <div className="group-type">
                        <input type="checkbox" name="ghost" id="ghost" onChange={handleCheckBox} />
                        <label htmlFor="ghost" className='ghost'>
                            <img src='src/assets/type/ghost.svg' alt="" />
                            Fantasma
                        </label>
                    </div>
                    <div className="group-type">
                        <input type="checkbox" name="ground" id="ground" onChange={handleCheckBox} />
                        <label htmlFor="ground" className='ground'>
                            <img src='src/assets/type/ground.svg' alt="" />
                            Tierra
                        </label>
                    </div>
                    <div className="group-type">
                        <input type="checkbox" name="normal" id="normal" onChange={handleCheckBox} />
                        <label htmlFor="normal" className='normal'>
                            <img src='src/assets/type/normal.svg' alt="" />
                            Normal
                        </label>
                    </div>
                    <div className="group-type">
                        <input type="checkbox" name="psychic" id="psychic" onChange={handleCheckBox} />
                        <label htmlFor="psychic" className='psychic'>
                            <img src='src/assets/type/psychic.svg' alt="" />
                            Psíquico
                        </label>
                    </div>
                    <div className="group-type">
                        <input type="checkbox" name="steel" id="steel" onChange={handleCheckBox} />
                        <label htmlFor="steel" className='steel'>
                            <img src='src/assets/type/steel.svg' alt="" />
                            Acero
                        </label>
                    </div>
                    <div className="group-type">
                        <input type="checkbox" name="dark" id="dark" onChange={handleCheckBox} />
                        <label htmlFor="dark" className='dark'>
                            <img src='src/assets/type/dark.svg' alt="" />
                            Siniestro
                        </label>
                    </div>
                    <div className="group-type">
                        <input type="checkbox" name="electric" id="electric" onChange={handleCheckBox} />
                        <label htmlFor="electric" className='electric'>
                            <img src='src/assets/type/electric.svg' alt="" />
                            Eléctrico
                        </label>
                    </div>
                    <div className="group-type">
                        <input type="checkbox" name="fighting" id="fighting" onChange={handleCheckBox} />
                        <label htmlFor="fighting" className='fighting'>
                            <img src='src/assets/type/fighting.svg' alt="" />
                            Lucha
                        </label>
                    </div>
                    <div className="group-type">
                        <input type="checkbox" name="flying" id="flying" onChange={handleCheckBox} />
                        <label htmlFor="flying" className='flying'>
                            <img src='src/assets/type/flying.svg' alt="" />
                            Volador
                        </label>
                    </div>
                    <div className="group-type">
                        <input type="checkbox" name="ice" id="ice" onChange={handleCheckBox} />
                        <label htmlFor="ice" className='ice'>
                            <img src='src/assets/type/ice.svg' alt="" />
                            Hielo
                        </label>
                    </div>
                    <div className="group-type">
                        <input type="checkbox" name="poison" id="poison" onChange={handleCheckBox} />
                        <label htmlFor="poison" className='poison'>
                            <img src='src/assets/type/poison.svg' alt="" />
                            Veneno
                        </label>
                    </div>
                    <div className="group-type">
                        <input type="checkbox" name="rock" id="rock" onChange={handleCheckBox} />
                        <label htmlFor="rock" className='rock'>
                            <img src='src/assets/type/rock.svg' alt="" />
                            Roca
                        </label>
                    </div>
                    <div className="group-type">
                        <input type="checkbox" name="water" id="water" onChange={handleCheckBox} />
                        <label htmlFor="water" className='water'>
                            <img src='src/assets/type/water.svg' alt="" />
                            Agua
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}
