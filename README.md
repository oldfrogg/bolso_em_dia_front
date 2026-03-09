# Front End BOLSO EM DIA

## Sobre
* Este repositório é um projeto acadêmico de desenvolvimento Front End.
* Nele temos um site de navegação para controlar uma API de gerenciamento de cadastro do projeto 'Bolso em Dia' em uma interface amigável.
* É necessário ter o Back End e o MySQL Server rodando em sua máquina para poder utilizar esse Front. Por isso, primeiro dirija-se ao [Back End](https://github.com/oldfrogg/bolso_em_dia_back) desse projeto e siga os passos para instalá-lo e executá-lo corretamente.

## Objetivos
* Desenvolver uma interface agradável e intuitiva para o usuário utilizar o projeto 'Bolso em Dia', que permite controlar seu fluxo financeiro;
* Familiarizar-se com o React e o Node.js;
* Familiarizar-se com a criação e reutilização de componentes do React;
* Trabalhar com rotas, props, hooks, e fazer requisições a um servidor local;

## Rotas
* / - Login;
* /login/ - Login;
* /home/ - Dashboard, mostra transações e saldo do período atual, além de contar com botão que leva à rota de criar uma transação;
* /meus_periodos/ - Lista de períodos: Lista todos os períodos do usuário;
* /criar_editar_transacao/:id?/ - Criar ou Editar Transação: Rota que permite ao usuário criar ou editar uma transação;
* /transacoes_periodo/ - Transações de um período: Permite que o usuário visualize suas transações e saldo em qualquer período;
* /criar_usuario/ - Criação de usuário: Permite o cadastro de um usuário novo;
* /editar_usuario/ - Edição de usuário: Permite a edição do cadastro de um usuário existente.

## Como utilizar

- Caso tenha o git instalado e configurado nas variáveis de ambiente do sistema, clonar através do
```bash
git clone https://github.com/oldfrogg/bolso_em_dia_front
cd bolso_em_dia_front
```

- Também é possível fazer o download do projeto diretamente através do Github.

É necessário ter o Node.JS instalado em sua máquina e as variáveis de ambiente relacionadas corretamente configuradas.

Para instalar os componentes necessários para a visualização do projeto, navegue via prompt de comando até o diretório onde estão os arquivos baixados.

- Abra o projeto no editor de sua preferência, e, na raiz do projeto, crie um arquivo ".env" e insira a seguinte variável de ambiente. É necessário utilizar a porta 3001, pois o Back estará rodando na porta 3000 e configurado para aceitar requisições da porta 3001.
```env
PORT=3001
```

Então, instale os pacotes necessários para o projeto (descritos no package.json) através do seguinte comando:
```bash
> npm i
```

Após a finalização da instalação das dependências, inicie o projeto através do comando:
```bash
> npm start
```

Com isso a aplicação ficará ativa em um servidor local. 
Você poderá acessá-lo através do navegador utilizando:
```bash
http://localhost:3001/
```
ou:
```bash
http://127.0.0.1:3001/
```

Agora já será possível trabalhar na aplicação a partir do navegador.

Para encerrar, basta, no prompt de comando, utilizar CTRL + 'C' e confirmar com 'S'.