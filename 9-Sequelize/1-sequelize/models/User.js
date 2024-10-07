import { DataTypes } from sequelize;
import db from '../db/dbconnect';

const User = db.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
  occupation: {
    type: DataTypes.STRING,
    required: true
  },

  newsletter: {
    type: DataTypes.BOOLEAN
  },
});
