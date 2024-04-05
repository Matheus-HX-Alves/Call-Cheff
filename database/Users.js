const sequelize = require("sequelize");
const connection = require("./database");
const { name } = require("ejs");

const Users = connection.define('Users',{
    Email:{
        email: sequelize.STRING,
        allowNull: false
    },
    Password:{
        type: sequelize.STRING,
        allowNull: false
    },
    Name:{
        type: sequelize.STRING,
        allowNull: false
    },
    LastName:{
        type: sequelize.STRING,
        allowNull: false
    },
    Cpf:{
        type: sequelize.STRING,
        allowNull: false
    },
    Birthday:{
        type: sequelize.DATE,
        allowNull: false
    },
    Cep:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    NumberHouse:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    House:{
        type: sequelize.STRING,
        allowNull: false
    },
    address:{
        type: sequelize.STRING,
        allowNull: false
    },
    reference:{
        type: sequelize.STRING,
        allowNull: false
    },
    Tel:{
        type: sequelize.INTEGER,
        allowNull: false
    },
})

Users.sync({force: false}).then(()=>{});
module.exports = Users;