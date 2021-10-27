const database = require('../database/connection');

class ClienteController {

    //Incluir
    incluir(request, response) {

        const {nome, email} = request.body;
        
        //console.log(nome, email);

        database.insert({nome, email}).table("cliente").then(data => {
            //console.log(data);
            response.status(200).json({message: "Cliente cadastrado com sucesso !!!"})
        }).catch(error => {
            //console.log(error);
            response.status(400).json({message: "Erro ao tentar cadastar um cliente !!!"})
        });
    };

    //Listar todos os Clientes
    listar(request, response) {
        database.select("*").table("cliente").then(cliente => {
            //console.log(cliente);
            response.json(cliente);
        }).catch(error => {
            //console.log(error);
            response.status(400).json({message: "Erro ao tentar listar clientes !!!"})
        });
    };

    //Listar um Clientes pelo Id
    listarClientesId(request, response) {
        const id = parseInt(request.params.id);

        database.select("*").table("cliente").where({id:id}).then(cliente => {
            //console.log(cliente);
            response.json(cliente);
        }).catch(error => {
            //console.log(error);
            response.status(400).json({message: "Erro ao tentar listar clientes !!!"})
        });
    };

    //Editar|Atualizar um Cliente pelo Id
    editarClienteId(request, response) {

        const id = parseInt(request.params.id);
        const {nome, email} = request.body;

        database.where({id:id}).update({nome:nome, email:email}).table("cliente").then(data => {
            response.json({message: "Cliente Atualizao com Sucesso !!!"});
        }).catch(error => {
            response.status(400).json({message: "Erro ao tentar atualizar um clientes !!!"})
        });
    };


    //Excluir|Deletar um Cliene pelo Id
    excluirClienteId(request, response) {
        const id = parseInt(request.params.id);

        database.where({id:id}).del().table("cliente").then(data => {
            response.json({message: "Cliente excluido com sucesso !!!"})
        }).catch(error => {
            response.status(400).json({message: "Erro ao tentar excluir um clientes !!!"})
        });
    };

}

module.exports = new ClienteController();