import React  from 'react';
import { useState,useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getIncome,getExpense} from '../../actions/index'
import {Link} from 'react-router-dom';
import Paginate from '../Paginate';
import Nav from '../Nav/nav';
import Card from '../Card/Card';

import style from './Home.module.css'

export default function Home(){

    const dispatch = useDispatch();

    useEffect (() =>{        
        dispatch(getIncome());
        dispatch(getExpense());
    },[dispatch]);
    

    const allIncomes = useSelector((state) => state.incomesList);
    const allExpenses = useSelector((state) => state.expensesList);
    const allTransactions = allIncomes.concat(allExpenses);
    
    // eslint-disable-next-line
    const [order,setOrder] = useState('');
    const [currentPage,setCurrentPage] = useState(1);
    // eslint-disable-next-line
    const [itemsPerPage,setItemsPerPage]=useState(10);
    const indexLastItem = currentPage * itemsPerPage;
    const indexFirstItem = indexLastItem - itemsPerPage;
    const currentItems = allTransactions.slice(indexFirstItem,indexLastItem);
    // console.log(allTransactions);
    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber);
    }

    const totalIncome = allIncomes.reduce((acc,curr) => parseInt(acc) + parseInt(curr.amount),0);
    const totalExpense = allExpenses.reduce((acc,curr) => parseInt(acc) + parseInt(curr.amount),0);
    return (
        <>   
        <Nav incomes={totalIncome} expenses={totalExpense}/>
        <div className={style.general}>
            <div className={style.nav}>
                <div className={style.navTitle}>                    
                    <h3>Total incomes: ${totalIncome}</h3>
                    <h3>Total expenses: ${totalExpense}</h3>
                    <h3>Balance: ${totalIncome - totalExpense}</h3> 
                    <hr/>
                </div>
                
                <div className={style.navFilters}>
                    {/* <button className={style.navButton}>INCOMES</button>
                    <button className={style.navButton}>EXPENSES</button> */}
                    <Link className={style.link} to='/create_new'>Add NEW</Link>
                    <Link className={style.link} to='/categories'>CATEGORIES</Link>
                    {/* <button className={style.navButton}>CATEGORIES</button> */}
                </div>
            </div>
            <div className={style.container}>                       
                {currentItems?.map( (el) =>{
                    return(
                        <div className={style.cardsContainer} key={el.id}>                            
                            <Card concept={el.concept} amount={el.amount} date={el.date} type={el.type}/>                            
                        </div>
                    );                
                })
                }             
            </div>
        </div>
        <div className={style.pagContainer}>
        <Paginate
                itemsPerPage = {itemsPerPage}
                allTransactions = {allTransactions.length}
                paginate = {paginate} 
            />   
        </div>
        
        </>
    )
}