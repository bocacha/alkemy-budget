const initialState = { 
    incomesList: [],
    expensesList: [],
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_INCOME':
            return {
                ...state,
                incomesList: action.payload,                
            }
        case 'GET_EXPENSE':
            return {
                ...state,
                expensesList: action.payload,                
            }
        case 'POST_TRANSACTION':
            return {
                ...state,
            }
        default : return state
    }
}

export default rootReducer;