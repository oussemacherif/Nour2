const UsersAF = (connection, DataTypes) => {
    return connection.define("usersaf", {
      fname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      user_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      room_number: {
        type:DataTypes.STRING,
        allowNull: false,
      },
      user_image:{
        type:DataTypes.JSON,
        allowNull:false,
      },
      fac_name :{
        type:DataTypes.STRING,
        allowNull:true,
},

    });
  };
  
  module.exports = UsersAF;