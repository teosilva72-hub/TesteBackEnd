const emailValidator = require('email-validator');
const ModelUser = require('../Model/DataUser');
const ModelAddress = require('../Model/DataAddress');
const { Op } = require("sequelize");
module.exports = class Controlleruser {

    async Verify(data) {
        let checked = true;
        checked = this.isEmpty(data);
        if (checked || checked == undefined) {
            const check = emailValidator.validate(data.email);
            if (check) {
                const user = await ModelUser.findOne({
                    where: {
                        [Op.or]: [
                            { email: data.email },
                            { cpf: data.cpf }
                        ]
                    }
                });
                if (user === null) {
                    const usuario = await ModelUser.create(data);
                    const id = await ModelUser.findOne({ where: { email: data.email }, attribute: ['id_usuario'] });
                    data.id_usuario = id.id_usuario;
                    const endereco = await ModelAddress.create(data)
                    return [true, usuario, endereco];
                }
                return false;
            }
        }
    }

    async VerifyAddress(data){
        let checked = true;
        checked = this.isEmptyAddress(data);
        if(checked || undefined){
            const address = await ModelAddress.create(data);
            return [true, address]
        }
    }

    isEmpty(data) {
        if (data.nome == '' || data.sobrenome == '' || data.email == '' || data.telefone == '' || data.cpf == '' || data.logradouro == '' || data.numero == '' || data.cidade == '' || data.uf == '' || data.cep == '' || data.bairro == '')
            return false

    }
    isEmptyAddress(data){
        if (data.logradouro == '' || data.numero == '' || data.cidade == '' || data.uf == '' || data.cep == '' || data.bairro == '')
        return false
    }
}