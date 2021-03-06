import React from 'react'

const Pokemon = ({pokemon}) => {
  return (
    <div className='pokemon'>
        <div className='pokemon_name'>
            <p></p>
        </div>
        <div className='pokemon_meta'>
            <span>{pokemon.maxHP}</span>
            <span>{pokemon.maxCP}</span>
        </div>
        <div className='pokemon_image'>
            <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <div className='pokemon_attacks'>
           { pokemon?.attacks?.special.map(attack => (
                    <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
                ))} 
        </div>
    </div>
  )
}

export default Pokemon