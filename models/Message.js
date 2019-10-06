//.NAME
//  message.js
//.WHAT
//  Model for the messages sent to a person.
////////////////////////////////////////////////////////
module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define("Message", {
    msgtext: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    contactType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profileID : {
      type: DataTypes.INTEGER,
      allowNull: true
    }

  });

  Message.associate = function(models) {
    // We're saying that a Message should belong to an Eater
    // A Message can't be created without an Eater due to the foreign key constraint
    Message.belongsTo(models.Eater, {
      foreignKey: { 
        allowNull: false }
    });
  };
  return Message;
};
