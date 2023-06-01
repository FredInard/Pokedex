const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

const PokemonCard = () => {
  
  let pokemon = pokemonList[1]
  // console.log(pokemon.imgSrc != undefined ? "on a l'image" : "???")
  // if (pokemon.imgSrc != undefined){
  //   <img src={pokemon.imgSrc} alt={pokemon.name}/>

  // } else {
  //   <p>???</p>
  // }

  return (
    <figure>
      {pokemon.imgSrc != undefined ? <img src={pokemon.imgSrc} alt={pokemon.name}/> : <p>???</p>}
      <figcaption> {pokemon.name}</figcaption>
    </figure>
  )
   
}
export default PokemonCard;

