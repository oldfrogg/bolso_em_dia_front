# Front End BOLSO EM DIA

## Sobre
- Este é um projeto acadêmico desenvolvido para a conclusão da Pós Graduação em Dev Foundations da FIAP em parceria com o BB, com a proposição de um desafio relacionado a temas bancários;
- Nele temos um site de navegação para controlar uma API de gerenciamento de cadastro do projeto 'Bolso em Dia' em uma interface amigável;
- É necessário ter o Back End e o MySQL Server rodando em sua máquina para poder utilizar esse Front. Por isso, primeiro dirija-se ao [Back End](https://github.com/oldfrogg/bolso_em_dia_back) desse projeto e siga os passos para instalá-lo e executá-lo corretamente.

## Objetivos
- Conclusão da Pós Graduação em Dev Foundations da FIAP;
- Aprimorar o conhecimento sobre desenvolvimento Full Stack;
- Desenvolver uma interface agradável e intuitiva para o usuário utilizar o projeto 'Bolso em Dia', que permite controlar seu fluxo financeiro;
- Familiarizar-se com o React e o Node.JS;
- Familiarizar-se com a criação e reutilização de componentes do React;
- Trabalhar com rotas, props, hooks, e fazer requisições a um servidor local;
- Aprimorar o conhecimento sobre desenvolvimento Full Stack;

## Pré-requisitos
- Node.JS 20.9.0 (Deve ser baixado e instalado);
- NPM (Incluso no Node.JS);
- Back End informado na seção "Sobre", com os seus pré-requisitos.

## Instalando o projeto

- É necessário ter o Node.JS instalado em sua máquina e as variáveis de ambiente relacionadas corretamente configuradas.

- Lembrar de, a cada instalação que altere as variáveis de ambiente do sistema, reiniciar o terminal e/ou o editor.

### 1 - Clonando o repositório
- Navegue via prompt de comando até o diretório onde deseja efetuar a instalação. 

- Caso tenha o git instalado e configurado nas variáveis de ambiente do sistema, clonar através do
```bash
git clone https://github.com/oldfrogg/bolso_em_dia_front
cd bolso_em_dia_front
```

- Também é possível fazer o download do projeto diretamente através do Github.

### 2 - Criando o arquivo .env na raiz do projeto

- Abra o projeto no editor de sua preferência, e, na raiz do projeto, crie um arquivo ".env" e insira a seguinte variável de ambiente:

```env
PORT=3001
```

- É necessário utilizar a porta 3001, pois o Back estará rodando na porta 3000 e configurado para aceitar requisições da porta 3001.

### 3 - Instalando as dependências
- Estando no diretório do arquivo através do terminal, instalar as dependências necessárias:

```bash
npm i
```

### 4 - Executando a aplicação
- Execute o comando, para rodar a aplicação:
```bash
npm start
```

### 5 - Utilizando a aplicação
- Com isso a aplicação ficará ativa em um servidor local. 
Você poderá acessá-lo através do navegador utilizando:
```bash
http://localhost:3001/
```
ou:
```bash
http://127.0.0.1:3001/
```

- Agora já será possível trabalhar na aplicação a partir do navegador.

- Para encerrar, basta, no prompt de comando, utilizar CTRL + 'C' e confirmar com 'S'.

## Rotas
- / - Login;
- /login/ - Login;
- /home/ - Dashboard, mostra transações e saldo do período atual, além de contar com botão que leva à rota de criar uma transação;
- /meus_periodos/ - Lista de períodos: Lista todos os períodos do usuário;
- /criar_editar_transacao/:id?/ - Criar ou Editar Transação: Rota que permite ao usuário criar ou editar uma transação;
- /transacoes_periodo/ - Transações de um período: Permite que o usuário visualize suas transações e saldo em qualquer período;
- /criar_usuario/ - Criação de usuário: Permite o cadastro de um usuário novo;
- /editar_usuario/ - Edição de usuário: Permite a edição do cadastro de um usuário existente.

## Autor
O projeto foi desenvolvido por Jhonatta Tavares.

## Licença
Licença MIT, portanto, é de livre uso, alteração e publicação.

