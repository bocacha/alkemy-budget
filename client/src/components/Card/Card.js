import React from 'react';
import style from './card.module.css';


export default function Card({concept,amount,date,type}){
    return (
        <div className={style.card}>
            
            <h5 id="concept">{concept}</h5>
            <h5 id="date">{date}</h5>   
            <h4 id="amount">${amount}</h4>         
            <h5 id="type">{type} </h5>           
        </div>
    )
}