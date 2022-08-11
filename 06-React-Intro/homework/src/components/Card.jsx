import React from 'react';
import s from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return ( 
  <div className = {s.Card}>
    <button onClick = {props.onClose} className = {s.btn}>X</button>
    <h1 >{props.name}</h1>
    <div >
      <h4 >Min</h4>
      <h6>{props.min}</h6>
      <h4>Max</h4>
      <h6>{props.max}</h6>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='img' />
    </div>
  </div>
  )
};