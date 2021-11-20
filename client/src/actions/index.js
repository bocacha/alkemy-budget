import axios from 'axios';



export function getIncome (){
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/income`,{        
        });
        return dispatch({
            type:'GET_INCOME', 
            payload: json.data
        })
    }
}

export function getExpense (){
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/expense`,{        
        });
        return dispatch({
            type:'GET_EXPENSE', 
            payload: json.data
        })
    }
}

export function getBudget (){
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/budget`,{        
        });
        return dispatch({
            type:'GET_BUDGET', 
            payload: json.data
        })
    }
}

export function getBudgetByMonth (month){
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/budget/${month}`,{        
        });
        return dispatch({
            type:'GET_BUDGET_BY_MONTH', 
            payload: json.data
        })
    }
}

export function getBudgetByYear (year){
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/budget/${year}`,{        
        });
        return dispatch({
            type:'GET_BUDGET_BY_YEAR', 
            payload: json.data
        })
    }
}

export function getBudgetByCategory (category){
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/budget/${category}`,{        
        });
        return dispatch({
            type:'GET_BUDGET_BY_CATEGORY', 
            payload: json.data
        })
    }
}

export function postTransaction(payload){   
    console.log("payload es: " + payload) ;
    console.log("payload.concept es: " + payload.concept) ;
    console.log("payload.amount es: " + payload.amount) ;
    return async function(dispatch){        
        var json = await axios.post('http://localhost:3001/transaction',payload);       
         //return json;
        console.log("json.data es: " + json.data) ;
        return dispatch({
            type:'POST_TRANSACTION',
            payload: json.data
            
        })
    }
    // return async function(){
    //     var json = await axios.post('http://localhost:3001/transaction',payload,{
    //     });
    //     return json;
    // }
}