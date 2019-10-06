module.exports = function(sequelize, DataTypes) {
  var Eater = sequelize.define("Eater", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    restaurant1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    restaurant2: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    restaurant3: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true
    }
  });

  Eater.associate = function(models) {
    //Associating an Eater with Messages.
    //When an eater is deleted, so are any associated messages
    Eater.hasMany(models.Message, { onDelete : "cascade" });
  };
  return Eater;
};
