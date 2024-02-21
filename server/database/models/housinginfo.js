const Houinfo = (connection, DataTypes) => {
    return connection.define("housinginfo", {
      h_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      h_owner: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      h_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      h_phone:{
        type:DataTypes.STRING,
        allowNull:false
      },
      h_fax:{
        type:DataTypes.STRING,
        allowNull:false
      },
      h_image: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      h_nidhamda5ili :{
        type:DataTypes.TEXT("long")
      }
    });
  };
  
  module.exports = Houinfo;