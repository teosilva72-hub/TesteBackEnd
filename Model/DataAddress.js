const sequelize = require('sequelize')
const { Sequelize } = require('../Setting/conn');
const Conn = require('../Setting/conn');
const address = Conn.conn.define('enderecos_usuario', {
    id_endereco_usuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    logradouro: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    numero: {
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    cidade: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    uf: {
        type: Sequelize.STRING(2),
        allowNull: false,
    },
    cep: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    bairro: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    complemento: {
        type: Sequelize.STRING(255)
    }
    
}, { freezeTableName: true, timestamps: false }
);
//address.sync({ force: true });
module.exports = address