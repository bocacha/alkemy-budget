const { Router } = require('express');
const { Transaction } = require('../db.js');
const axios = require('axios');

const errorHandler = require('../../utils/middlewares/errorHandlers');
const setHeaders = require('../../utils/middlewares/setHeaders');

const router = Router();
router.use(setHeaders);
router.use(errorHandler);

const getDBData = async () => {
    console.log("entre a FIND ALL")
    return await Transaction.findAll({
        order: [['date', 'DESC']],
    })
};

router.get('/income', async (req, res) => {
    console.log("entre a INCOME")
    const data = await getDBData();
    const income = data.filter(transaction => transaction.type === "income");
    income.length > 0 ? 
    res.status(200).send(income) : 
    res.status(404).send('There is no incomes registered!');     
});

router.get('/expense',async (req, res) => {
    console.log("entre a expense");
    const data = await getDBData();
    const expense = data.filter(transaction => transaction.type === "expense");
    expense.length > 0 ?
    res.status(200).send(expense) :
    res.status(404).send('There is no expenses registered!');
});

router.post("/transaction", async (req, res) => {
    let { id,concept,amount,date,type} = req.body ;
   
     try {
        await Transaction.create({id,concept,amount,date,type}) ; 
                   
        res.status(200).send('Transaction created!') ;        
    } catch (error) {
      console.log(error)
      res.status(400).send(error);
    }
});

router.delete("/transaction/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await Transaction.destroy({
            where: {
                id:id
            }
    })
    res.status(200).send("Transaction deleted!")
    }catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
});
module.exports = router;