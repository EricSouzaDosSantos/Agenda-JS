# CRUD - Contatos

Este código implementa um CRUD (Create, Read, Update, Delete) para gerenciar uma lista de contatos. As funções disponíveis são as seguintes:

## Create

A função `createContact` permite criar um novo contato. Ela solicita ao usuário as seguintes informações:

- Nome do contato
- Número do contato
- Email do contato

Após coletar as informações, a função armazena o contato em um array chamado `ArrayContact`. Também registra a data e hora da criação do contato.

## Read

A função `listContact` lista todos os contatos presentes no array `ArrayContact`. Ela exibe o nome, número, email, data de criação e hora de cada contato em uma caixa de diálogo. Os contatos são exibidos em ordem de inserção.

## Update

A função `updateContact` permite atualizar as informações de um contato existente. Ela solicita ao usuário o número do contato que deseja atualizar.

Se o número do contato for encontrado na lista, o usuário é informado e é pedido a confirmação para prosseguir com as atualizações.

Em seguida, é apresentado um menu com as opções de atualização disponíveis:

- [1] -&gt; Nome: permite atualizar o nome do contato
- [2] -&gt; Email: permite atualizar o email do contato
- [3] -&gt; Número: permite atualizar o número do contato
- [4] -&gt; Sair: encerra a função de atualização

Após a atualização, o contato é atualizado no array `ArrayContact`.

## Delete

A função `deleteContact` permite Deletar as informações de um contato existente. Ela solicita ao usuário o número do contato que deseja Deletar

em seguida pede uma confirmação, perguntando se o usuario realmente deseja deletar aquele contato.

## Utilização

Para utilizar esse código, você pode importar as funções exportadas e chamá-las de acordo com a função desejada. Por exemplo:

```
import { createContact, listContact, updateContact, deleteContact } from './crud.js';

createContact(); // Cria um novo contato
listContact(); // Lista todos os contatos existentes
updateContact(); // Atualiza as informações de um contato
deleteContact(); //Deleta as informações de um contato
```

Lembre-se de que isso é apenas um exemplo de código, e é necessário implementar outras funcionalidades, validação dos dados inseridos e aprimoramentos diversos.
