import React from 'react';
import style from './Paginate.module.css';

export default function Paginate({itemsPerPage,allTransactions,paginate}){
    const pageNumbers = [];

    for( let i = 0; i < Math.ceil(allTransactions/itemsPerPage);i++){
        pageNumbers.push(i+1);
    }

    return(
        <div className={style.navContainer}>
            <div className={style.pagination}>
                { 
                pageNumbers &&
                pageNumbers.map((number) =>{
                    return (
                        <div className={style.number} key={number}>
                            <p onClick={() => paginate(number)}>{number}</p>
                            
                        </div>
                    )
                    
                })}
            </div>
        </div>
    )
}