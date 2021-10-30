const { DataTypes } = require('sequelize');
const D = DataTypes;

module.exports = (sequelize) => {
   sequelize.define('transaction', {
    id:{
      type:D.INTEGER,
      allowNull:false,
      primaryKey:true
    },
    concept: {
      type: D.STRING,
      allowNull: false,
    },
    amount: {
      type: D.STRING,
      allowNull: false
    },    
    date: {
      type: D.DATE,
      allowNull: false
    },   
    type: {
      type: D.STRING,
      allowNull: false
    },
  });
}