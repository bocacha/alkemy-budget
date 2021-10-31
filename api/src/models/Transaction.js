const { DataTypes } = require('sequelize');
const D = DataTypes;

module.exports = (sequelize) => {
   sequelize.define('transaction', {
    id:{
      type:D.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    concept: {
      type: D.STRING,
      allowNull: false,
    },
    amount: {
      type: D.DECIMAL(20, 2),
      allowNull: false
    },    
    date: {
      type: D.STRING,
      allowNull: false
    },   
    type: {
      type: D.STRING,
      allowNull: false
    },
  });
}