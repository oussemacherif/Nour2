const config = require("./config.js");
const { Sequelize,DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  config.database,
  config.user,
  config.password,
  {
    host: config.host,
    dialect: "mysql",
  }
);


const Test = sequelize.define('test', {
 
  name: { 
    type: DataTypes.STRING,
    allowNull : false,
  },
})

sequelize.authenticate() 
  .then(() => {
    console.log('Database connection has been established successfully.'); 
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });


  
//   sequelize.sync()
//   .then(() => {
//     console.log('Database and tables synchronized.');
//   })
//   .catch((error) => { 
//     console.error('Error synchronizing the database:', error);
//   });


module.exports = {
  Test}
