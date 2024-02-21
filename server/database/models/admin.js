const Admin = (connection, DataTypes) => {
    return connection.define("admin", {
      admin_fname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      admin_lname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      admin_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      admin_image:{
        type:DataTypes.JSON,
        allowNull:false
      }
    });
  };
  
  module.exports = Admin;