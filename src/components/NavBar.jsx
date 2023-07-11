import React from 'react';

const NavBar = ({ count, setCount, pokemonList }) => {
  const handleClickAdd = () => {
    if (count < pokemonList.length - 1) {
      setCount(count + 1);
    } else {
      console.log("il y a bien un suivant");
    }
  };

  const handleClick = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      console.log("il y a bien un précédent");
    }
  };

  return (
    <div>
      {console.log("CL ICI:", count)}
      <p>{count}</p>
      <button onClick={handleClick}>Précédent</button>
      <button onClick={handleClickAdd}>Suivant</button>
    </div>
  );
};

export default NavBar;