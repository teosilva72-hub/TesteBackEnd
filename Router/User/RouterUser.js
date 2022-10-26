const express = require('express');
const app = express.Router();
const ModelUser = require('../../Model/DataUser');
const ControllerUser = require('../../Controller/ControllerUser');
//const emailValidator = require('email-validator');

app.get('/usuarios', async (req, res) => {
    try{
        const user = await ModelUser.findAll();
        res.status(200).json({Usuarios: user});
    }catch(error){
        res.status(400).json({List: false, Error: error});
    }
});

app.get('/usuarios/:id', async (req, res) => {
    try{
        const user = await ModelUser.findAll({where:{id_usuario: req.params.id}});
        res.status(200).json({Usuarios: user});
    }catch(error){
        res.status(400).json({List: false, Error: error});
    }
});

app.delete('/usuarios/:id', async (req, res) => {
    try{
        const user = await ModelUser.destroy({where:{id_usuario: req.params.id}});
        res.status(200).json({Usuarios: user});
    }catch(error){
        res.status(400).json({List: false, Error: error});
    }
});

app.put('/usuarios/:id', async (req, res) => {
    try{
        const user = await ModelUser.findOne({where:{id_usuario: req.params.id}});
        await user.update(req.body);
        res.status(200).json({Usuarios: user});
    }catch(error){
        console.log(error)
        res.status(400).json({List: false, Error: error});
    }
});

app.post('/usuarios', async(req, res) => {
    try{
        const User = new ControllerUser();
        let checked = false;
        checked = await User.Verify(req.body);
        if(checked[0]){
            res.status(201).json({Status: 'sucesso', Mensagem: 'Ação realizada com sucesso', dados: checked[1], endereco: checked[2]});
        }else{
            res.status(400).json({Status: 'Error ao salvar'});
        }
        
    }catch(error){
        console.log(error)
        res.status(500).json({Error: true});
    }
});

module.exports = app;