const Sequelize = require('sequelize');
const sequelize = new Sequelize('leo_schema', 'root', 'leo12345leo', {dialect: 'mysql', host: 'localhost', logging: false});
 
module.exports = sequelize;