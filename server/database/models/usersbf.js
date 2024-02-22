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
      doc1: {
        type:DataTypes.JSON,
        allowNull:false,
      },
      doc2:{
       type: DataTypes.JSON,
       allowNull:false
      },
      doc3:{
        type: DataTypes.JSON,
        allowNull:false
       },
       doc4:{
        type: DataTypes.JSON,
        allowNull:false
       },
       status:{
        type: DataTypes.ENUM,
        values: ['pending', 'not accepted']
       },
       comment:{
        type:DataTypes.TEXT("long"),
        allowNull:true
       }

    });
  };
  
  module.exports = UsersBF;