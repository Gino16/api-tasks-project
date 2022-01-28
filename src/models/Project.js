import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Tasks from './Task';
const Project = sequelize.define('projects', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.TEXT,
  },
  priority: {
    type: Sequelize.INTEGER,
  },
  description: {
    type: Sequelize.TEXT,
  },
  deliverydate: {
    type: Sequelize.DATE,
  },
}, {
  timestamps: false,
});

Project.hasMany(Tasks, { foreignKey: 'projectId', sourceKey: 'id' });
Tasks.belongsTo(Project, { foreignKey: 'projectId', sourceKey: 'id' });

export default Project;