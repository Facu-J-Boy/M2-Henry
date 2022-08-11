import React from 'react';
import s from './SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className = {s.fondo}>
      <input type = 'text' placeholder ='Ciudad...' className = {s.searchBar}/>
      <button className = {s.searchBtn} onClick = {() => props.onSearch ('Buscando ciudad')}>Agregar</button>
    </div>
  )
};