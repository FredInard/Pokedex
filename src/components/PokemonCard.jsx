import PropTypes from "prop-types";

const PokemonCard = ({pokemon}) => {
  
console.log('test'+ {pokemon})

  return (
    <figure>
      {pokemon.imgSrc != undefined ? <img src={pokemon.imgSrc} alt={pokemon.name}/> : <p>???</p>}
      <figcaption> {pokemon.name}</figcaption>
    </figure>
  )
}

// PokemonCard.PropTypes = {
//   pokemonList: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     imgSrc:PropTypes.string,
//   }).isRequired
// }

// export default PokemonCard;


// function PokemonCard() {
//   return(

//  <figure> <img src={pokemon.imgSrc} alt="pokemon " />
//   {/* <figcaption> {pokemon.name}</figcaption> */}
//  </figure>
 
//   );

// }


export default PokemonCard;