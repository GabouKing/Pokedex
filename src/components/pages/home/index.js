import './styles.css';
import React , {useState}from 'react';
import HomeButton from '../../assets/images/HomeButton.png';
import api from '../../../services/api';
import Footer from '../../footer';
import PokeItem from '../../pokeItem';

export default function Home() {
  const [pokemon,setPokemon]= useState(null);  
  const[typePokemon, setTypePokemon]= useState(null);
  const[typedPokemon, setTypedPokemon]= useState('');

  const handleChange = (event) => {
    setTypedPokemon(event.target.value);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    
  if(!typedPokemon){
    return;
  }
  
  try{
    const response = await api.get(`/pokemon/${typedPokemon.toLocaleLowerCase()}`);
    
    
     setPokemon(response.data);
     
     if(response.data.types.length>1){
    setTypePokemon(response.data.types[0].type.name+" | "+response.data.types[1].type.name)
     }else{
      setTypePokemon(response.data.types[0].type.name);
     }
     
     
  }catch (error){    
    setPokemon(null);
     setTypePokemon(null);
     console.log('Pokemon não encontrado! \n Erro:'+event)
  }
}
  

  return (
    <div className="Home">
      <form className="header" onSubmit={handleSubmit}>
            <img className ='homeButton' src={HomeButton} alt="Botão Home da Pokédex" />
            <input value={typedPokemon} className="pokeFilter" placeholder="Filtre o Pokémon desejado" onChange={handleChange}/>
        </form>
      <div className="Home-pokeList">
        
         
         {pokemon ? (
                    
         <PokeItem 
         pokeImage={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}
          pokeName={pokemon.name} pokeType={typePokemon}
          pokeHeight={pokemon.height}
          pokeWeight={pokemon.weight}
          />         
         ):(
         <div className="LoadingField">
            <img className="LoadingImg"src={`https://i.imgur.com/aMz1Qtu.gif`} alt="Loading"/>
            <p>Procurando dados do pokemon</p>
         </div>)}
        </div>
        <Footer/>
      
      
    </div>
  );
}