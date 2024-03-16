const config = require("./config.js");
const { Sequelize,DataTypes } = require('sequelize');

const connection = new Sequelize(
  config.database,
  config.user,
  config.password,
  {
    host: config.host,
    dialect: "mysql",
  }
);
const db={}

db.connection=connection
db.Sequelize=Sequelize
db.UsersBf = require ('./models/usersbf.js')(connection,DataTypes)
db.UsersAf = require ('./models/usersaf.js')(connection,DataTypes)
db.Admin = require ('./models/admin.js')(connection,DataTypes)
db.Payment = require ('./models/payment.js')(connection,DataTypes)
db.HousingInfo = require ('./models/housinginfo.js')(connection,DataTypes)
db.Rooms = require ('./models/rooms.js')(connection,DataTypes)
db.Reservation = require ('./models/reservation.js')(connection,DataTypes)
db.InstructionCard = require ('./models/instructionCard(بطاقة إرشادات).js')(connection,DataTypes)


//<------------------------------------  Relations  ---------------------------------------->//
/// Relation between users Before and Intruction Card 1:1
db.UsersBf.hasOne(db.InstructionCard) 
db.InstructionCard.belongsTo(db.UsersBf)

/// Relation between users After and Reservation 1:1
db.UsersAf.hasOne(db.Reservation) 
db.Reservation.belongsTo(db.UsersAf)

/// Realtion between Rooms and Reservation 1:n
db.Rooms.hasMany(db.Reservation)
db.Reservation.belongsTo(db.Rooms)





connection.authenticate() 
  .then(() => {
    console.log('Database connection has been established successfully.'); 
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });


  
  connection.sync()
  .then(() => {
    console.log('Database and tables synchronized.');
  })
  .catch((error) => { 
    console.error('Error synchronizing the database:', error);
  });


module.exports = db
