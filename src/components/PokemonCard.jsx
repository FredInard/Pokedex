const PokemonCard = ({pokemon}) => {
  
  console.log('test'+ {pokemon})
  
  // let pokemon = pokemonList[0]

  return (
    <figure>
      {pokemon.imgSrc != undefined ? <img src={pokemon.imgSrc} alt={pokemon.name}/> : <p>???</p>}
      <figcaption> {pokemon.name}</figcaption>
    </figure>
  )
}

export default PokemonCard;

