const ArrayContact = []

//Create
export const createContact = () => {

    const nameContact = prompt("Qual o nome do contato:")
    const numberContact = parseInt(prompt("Qual o número do contato:"))
    const emailContact = prompt("Qual o email do contato:")
    const dateCreation = Date()

    ArrayContact.push({ nameContact, numberContact, emailContact, dateCreation })
    alert(ArrayContact)
}

//Read
export const listContact = () => {

    let listContacts = ""

    ArrayContact.forEach((dataContact) => {

        listContacts += ` nome: ${dataContact.nameContact} \n number: ${dataContact.numberContact} \n email: ${dataContact.emailContact} \n Data de criação: ${dataContact.dateCreation} \n ________________________________________ \n`

    })

    alert("*****Lista de usuarios****** \n" + listContacts)


}

//Update
export const updateContact = () => {
    const findNumber = parseInt(prompt("Qual numero deseja atualizar"))
    const foundContact = ArrayContact.find(number => number.numberContact == findNumber)

    if (!foundContact) {
        alert("numero não encontrado")
        return;
    }
    alert("Eba foi encontrado")

    let confirm = window.confirm("Deseja fazer outras atualizações?")
    if (confirm) {

        let entrada = true

        while (entrada) {

            let opcao = parseInt(prompt(` que mais deseja atualizar:
        [1] -> Nome
        [2] -> Email
        [3] -> Numero
        [4] -> Sair`))

            switch (opcao) {

                case 1:

                    const newName = prompt("Qual o novo nome")

                    foundContact.nameContact = newName

                    if (newName) {
                        alert("seu nome foi atualizado com sucesso")
                    }

                    break;

                case 2:

                    const newEmail = prompt("Qual o novo email")

                    foundContact.emailContact = newEmail

                    if (newName) {
                        alert("seu email foi atualizado com sucesso")
                    }

                    break;

                case 3:

                    const newNumber = prompt("Qual o novo numero")

                    foundContact.numberContact = newNumber

                    if (newNumber) {
                        alert("seu numero foi atualizado com sucesso")
                    }

                    break;

                case 4:

                    entrada = false

                    break;

                default:

                    alert("opção indisponivel")

                    break;
            }
        }
    }
}

//Delete
export const deleteContact = () => {

    const findNumber = parseInt(prompt("Qual numero deseja atualizar"))
    const foundContact = ArrayContact.find(number => number.numberContact == findNumber)




}