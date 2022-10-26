const sequelize = require('sequelize')
const { Sequelize } = require('../Setting/conn');
const Conn = require('../Setting/conn');
const User = Conn.conn.define('usuarios', {
    id_usuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    sobrenome: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    telefone: {
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    cpf: {
        type: Sequelize.STRING(45),
        allowNull: false,
    }
    
}, { freezeTableName: true, timestamps: false }
);
//User.sync({ force: true });
module.exports = User