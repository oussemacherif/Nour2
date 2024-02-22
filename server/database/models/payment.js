const Payment = (connection, DataTypes) => {
    return connection.define("payment", {
      part1: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      part2: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  };
  
  module.exports = Payment;