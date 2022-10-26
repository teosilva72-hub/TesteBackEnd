const express = require('express');
const app = express.Router();
const ModelAddress = require('../../Model/DataAddress');
const ModelUser = require('../../Model/DataUser');
const ControllerUser = require('../../Controller/ControllerUser');

app.get('/enderecos-usuario/:id', async (req, res) => {
    try{
        const address = await ModelAddress.findAll({where:{id_usuario: req.params.id}});
        const user = await ModelUser.findOne({where:{id_usuario: req.params.id}})
        res.status(200).json({Status: 'sucesso', Mensagem: 'Ação realizada com sucesso', dados: user, Endereco: address});
    }catch(error){
        res.status(400).json({List: false, Error: error});
    }
});

app.delete('/enderecos-usuario/:id', async (req, res) => {
    try{
        const user = await ModelAddress.destroy({where:{id_usuario: req.params.id}});
        res.status(200).json({Status: 'sucesso', Mensagem: 'Ação realizada com sucesso', dados: user});
    }catch(error){
        res.status(400).json({List: false, Error: error});
    }
});

app.put('/enderecos-usuario/:id', async (req, res) => {
    try{
        const user = await ModelAddress.findOne({where:{id_usuario: req.params.id}});
        await user.update(req.body);
        res.status(200).json({Status: 'sucesso', Mensagem: 'Ação realizada com sucesso', dados: user});
    }catch(error){
        console.log(error)
        res.status(400).json({List: false, Error: error});
    }
});

app.post('/enderecos-usuario', async(req, res) => {
    try{
        const User = new ControllerUser();
        let checked = false;
        checked = await User.Verify(req.body);
        if(checked[0]){
            res.status(201).json({Status: 'sucesso', Mensagem: 'Ação realizada com sucesso', dados: checked[1]});
        }else{
            res.status(400).json({Status: 'Error ao salvar'});
        }
        
    }catch(error){
        console.log(error)
        res.status(500).json({Error: true});
    }
});
module.exports = app;