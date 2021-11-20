import React from 'react';
// import Logo from '../../images/logoHenry.png';

import styles from './Nav.module.css'

export default function NavBar({incomes, expenses}) {
    var balance=incomes-expenses;
    return (     
        <>    
            <hr className={styles.linea}/> 
            <div className={styles.footer}>    
                {/* <img id="logoHenry" src={Logo} width="30" height="30"  alt="Img not found!" />                */}
                <h2>Your balace: ${balance.toLocaleString()}</h2>
                
                <p>Powered by Martin Gonzalez - Parana - Entre Rios  - 31 de Octubre de 2021</p>
            </div>           
        </>
    )
}