import { createContact } from "./crud.js";
import { listContact } from "./crud.js";
import { updateContact } from "./crud.js";

let repeticao = true

while (repeticao) {

    let opcao = parseInt(prompt(`Qual opção você deseja:
[1] -> Criar um contato
[2] -> Listar os contatos existentes
[3] -> Atualizar o contato
[4] -> Deletar o contato
[5] -> Sair da agenda`))

    switch (opcao) {
        case 1:

            createContact()

            break;


        case 2:

            listContact()

            break;


        case 3:

        updateContact()

        break;
        

        case 5:

            repeticao = false

            break;

            default:

            alert("opção indisponivel")

            break;
    }
}