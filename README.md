Projeto Final: Aplicativo para Barbearia (BarberTime) Este projeto foi desenvolvido como avaliação final para a disciplina de

Programação para Dispositivos Móveis. O principal objetivo foi propor, planejar e desenvolver um aplicativo móvel funcional, aplicando os conceitos e ferramentas abordados durante o curso.

O aplicativo simula um sistema de agendamento para uma barbearia, permitindo que os usuários se cadastrem, façam login e agendem horários de forma isolada e persistente.

Tecnologias Utilizadas

Ionic Framework (v7+): Utilizado como a base para o desenvolvimento do aplicativo híbrido.

Angular (v17+): Framework principal, utilizando a arquitetura de Componentes Standalone.

TypeScript: Linguagem de programação principal, adicionando tipagem estática ao JavaScript.

Sass (SCSS): Para estilização avançada dos componentes.

Local Storage: Para persistência de dados do usuário e dos agendamentos, simulando uma sessão de usuário e um banco de dados local.

Funcionalidades Implementadas Sistema de Usuários:

Cadastro de novos usuários (com validação de e-mail duplicado e confirmação de senha).

Login de usuários existentes.

Sistema de sessão que exibe o nome do usuário logado na tela de perfil.

Logout funcional, limpando todos os dados da sessão.

Isolamento de Dados: Cada usuário possui sua própria lista de agendamentos, que não é visível para outros usuários.

Jornada de Agendamento Completa:

Seleção de Serviço.

Seleção de Barbeiro.

Seleção de Data e Hora (com horários e minutos pré-definidos).

Tela de Confirmação com o resumo completo.

Visualização de Agendamentos: Uma aba "Meus Horários" que exibe uma lista de todos os agendamentos confirmados pelo usuário logado.

Persistência de Dados: Os dados de usuários e agendamentos são salvos no Local Storage, garantindo que as informações não sejam perdidas ao recarregar a aplicação.

Pré-requisitos Antes de começar, garanta que você tenha os seguintes softwares instalados:

Node.js (versão LTS recomendada)

Ionic CLI (npm install -g @ionic/cli)

Como Executar o Projeto Clone o repositório:

Bash

git clone https://github.com/mrMoraess/projetofinalppdm.git Navegue até a pasta do projeto:

Bash

cd barber-time Instale as dependências:

Bash

npm install Execute o servidor de desenvolvimento:

Bash

ionic serve O aplicativo será aberto automaticamente no seu navegador em http://localhost:8100.

Roteiro de Teste do Sistema Para testar todas as funcionalidades do aplicativo, siga este roteiro:

Teste 1: Sessão do Usuário A Cadastro: Na tela de login, clique para se cadastrar. Crie o "Usuário A" (ex: Nome: Ana Silva, Email: ana@email.com, Senha: 123456).

Login: Faça login com os dados de Ana Silva.

Verificação de Perfil: Vá para a aba "Perfil" e verifique se o nome "Ana Silva" é exibido.

Criar Agendamento: Vá para a aba "Agendar" e crie um agendamento completo, selecionando serviço, barbeiro, data e hora, e confirmando ao final.

Verificar Agendamento: Vá para a aba "Meus Horários" e confirme que o agendamento da Ana está listado.

Logout: Volte para o "Perfil" e clique em "Sair".

Teste 2: Isolamento de Dados com Usuário B Cadastro: Na tela de login, cadastre um novo "Usuário B" (ex: Nome: Bruno Costa, Email: bruno@email.com, Senha: 123456).

Login: Faça login com os dados de Bruno Costa.

Verificação CRUCIAL: Vá para a aba "Meus Horários". A lista de agendamentos deve estar VAZIA, provando que os dados do Usuário A não estão visíveis para o Usuário B.

Teste 3: Persistência de Dados do Usuário A Logout: Saia da conta de Bruno Costa.

Login: Faça login novamente como Ana Silva.

Verificação Final: Vá para a aba "Meus Horários". O agendamento original feito pela Ana deve reaparecer, provando que os dados dela persistiram.

Autores

Pedro Henrique Ferreira Messias

Guilherme Fernandes Rezende

Matheus Rodrigues de Moraes

Fontes
