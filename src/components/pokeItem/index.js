import React from "react";
import './styles.css'
import screenPokedex from '../assets/images/screenPokedex.png';
export default function PokeItem(props){
    
    return(
        <div className="PokeItem">
            <div className="screenFrame">
                <div className="screen">
                    <img className="pokeImg" src={props.pokeImage} alt={props.pokeName}/>
                </div>
            </div>
            <div className="pokeInfoField">
                <span className="pokeInfo">Nome: {
                props.pokeName
                }</span>
                <span className="pokeInfo" >Tipo: {
                props.pokeType
                }</span>
                <span className="pokeInfo" >Altura: {
                props.pokeHeight
                }"</span>
                <span className="pokeInfo" >Peso: {
                props.pokeWeight
                } lbs</span>
            </div>
        </div>
    );
}