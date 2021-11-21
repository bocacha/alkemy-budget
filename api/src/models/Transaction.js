const { DataTypes } = require('sequelize');
const D = DataTypes;

module.exports = (sequelize) => {
   sequelize.define('transaction', {
    id:{
      type:D.INTEGER,
      allowNull:true,
      primaryKey:true,
      autoIncrement:true
    },
    concept: {
      type: D.STRING,
      allowNull: true,
    },
    amount: {
      type: D.INTEGER,
      allowNull: true,
    },    
    date: {
      type: D.STRING,
      allowNull: true,
    },   
    type: {
      type: D.STRING,
      allowNull: true,
    },
  });
}