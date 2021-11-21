import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import style from './form.module.css';
import { postTransaction } from '../../actions/index'



function Form() {
  // const[errors,setErrors]= useState({name:""});
  const allIncomes = useSelector((state) => state.incomesList);
  const allExpenses = useSelector((state) => state.expensesList);
  const dispatch = useDispatch();
  

  const [input, setInput] = useState({
    concept: '',
    amount: '',
    date: '',
    type: '',
  })
  

  async function handleSubmit(event) { 
    const hoy= new Date();
    const dia= hoy.getDate();

    const myModel={ 
        concept: input.concept,
        amount: input.amount,
        date: "20/11/2021",
        type: input.type,
    } 
    console.log("myModel en FORM es:" + myModel.concept);
    event.preventDefault();
    dispatch(postTransaction(myModel)); 
    alert('Your Transaction has been created!')         ;
    setInput({
      concept: '',
      amount: '',
      date: '',
      type: '',
    })
    // setErrors({});

  }

  
  // function handleSelect(e){  
  //   setInput({
  //     ...input, temperament:[...input.temperament, +e.target.value ]
  //   })  
  // }
   
  function handleChange(e) {  
    // setErrors(validate({
    //   ...input,
    //   [e.target.name]: e.target.value
    // }));
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
    
  // useEffect(() => {
  //   dispatch(getTemperaments());
  // },[dispatch]);

  return (
    <section className={style.container}>

      <form id="form" onSubmit={handleSubmit} className={style.formul}>

        <div>
          <input className={style.orderLarge}
            placeholder="Concept"
            type="text"
            name="concept"
            required="required"
            value={input.concept}
            onChange={handleChange}
          />
        </div>
                
        <div>
          <input className={style.orderLarge}
          placeholder="Amount $"
            type="text"
            name="amount"
            required="required"
            value={input.amount}
            onChange={handleChange}
          />
        </div >

        <div>
          {/* <select>
            <option onChange={handleChange}value="">Transaction Type:</option>
            <option name="type" value="income">Income</option>
            <option name="type" value="expense">Expense</option>
          </select> */}
          <input className={style.orderLarge}
            placeholder="Type"
            type="text"
            name="type"
            required="required"
            value={input.type}
            onChange={handleChange}
          />
        </div>

        {/* {errors.name && (
          <h4 className={style.danger}>{errors.name}</h4>
        )} */}
        
        <div className={style.footer}>
          <input className={style.orderLarge} type="submit" value="Create Transaction" />
          <Link className={style.order} to='/'>Home!</Link>
        </div>

      </form>
    </section>
  )
}



export default  Form;