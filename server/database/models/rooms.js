const Rooms = (connection, DataTypes) => {
    return connection.define("rooms", {
      room_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      room_beds: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      room_floor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bloc: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  };
  
  module.exports = Rooms;