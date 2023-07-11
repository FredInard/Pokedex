import { useState } from 'react'
import './App.css'
import PokemonCard from "./components/PokemonCard"
import NavBar from './components/navbar';


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [count, setCount] = useState(0);

  // const handleClickAdd = () => {
  //  if (count<pokemonList.length - 1){
  //   setCount(count + 1)
  // }
  // else {
  //   console.log("il y a bien un précédent")
  // }
  // }

  // const handleClick = () => {
  //   if (count>0) {
  //   setCount(count - 1)
  // }else {
  //   console.log("il y a bien un suivant")
  // }
  // }

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[count]}/>
      </div>
      <div>
        <NavBar count={count} setCount={setCount} pokemonList={pokemonList}/>
      </div>
      {/* <div>
        <p>{count}</p>
        <button onClick={handleClick}>Précédent</button>
        <button onClick={handleClickAdd}>Suivant</button>
      </div> */}
    </>
  )
}



export default App

