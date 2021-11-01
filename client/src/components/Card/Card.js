import React from 'react';
import style from './card.module.css';


export default function Card({concept,amount,date,type}){
    return (
        <div className={style.card}>
            <h2 id="amount">{amount}</h2>
            <h3 id="concept">{concept}</h3>
            <h3 id="date">{date}</h3>            
            <h4 id="type">{type} </h4>           
        </div>
    )
}