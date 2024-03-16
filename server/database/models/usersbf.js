const UsersBF = (connection, DataTypes) => {
    return connection.define("usersbf", {
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
      photo :{
        type:DataTypes.JSON,
        allowNull:false
      },
      waslt_tarssim: {
        type:DataTypes.JSON,
        allowNull:false,
      },
      chahadet_i9ama:{
       type: DataTypes.JSON,
       allowNull:false
      },
      CIN:{
        type: DataTypes.JSON,
        allowNull:false
       },
       Chhada_tebiya:{
        type: DataTypes.JSON,
        allowNull:false
       },
       wassl_5alass :{
        type: DataTypes.JSON,
        allowNull:false
       },
       msgwithreq:{
        type:DataTypes.TEXT("long"),
        allowNull:true
       },
       status:{
        type: DataTypes.ENUM,
        values: ['pending', 'not accepted']
       },
       reasons:{
        type:DataTypes.TEXT("long"),
        allowNull:true
       },

    });
  };
  
  module.exports = UsersBF;