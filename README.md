# VueJS Brasil Vagas Telegram 🤖

Procuro vagas de emprego referente a VueJS por ai e publico em um grupo do telegram.

Definição de "por ai", issues de repositórios no github com essa finalidade, exemplos:
- [vuejs-br/vagas](https://github.com/vuejs-br/vagas)
- [frontendbr/vagas](https://github.com/frontendbr/vagas)

Este projeto foi feito para ser utilizado no grupo [VueJS Brasil 🇧🇷](https://t.me/vuejsbrasil) do telegram, visite o nosso grupo 😉.

## Variáveis de ambiente

Variáveis de ambiente utilizadas no projeto.

### TELEGRAM_BOT_TOKEN

Token do bot criado no telegram.

### TELEGRAM_CHAT_ID

Chat ID do usuário ou do grupo para o qual o bot deve enviar as mensagens.

## Telegram

Para criar um bot no [telegram](https://telegram.org/), você precisa iniciar uma conversa com o [BotFather](https://t.me/BotFather) (<-- clique aqui para que isso aconteça) no [telegram](https://telegram.org/).

Uma informação importante que você precisa anotar, pois vai precisar nos passos a seguir, é o **TOKEN** do bot que o BotFather vai lhe informar quando você concluir, com sucesso, a criação do bot.

### Enviando mensagem para o lugar certo

No telegram as conversas tem um identificador chamado de `chat id`.

O `chat id` referente a uma conversa será um número:
- de um grupo será um número negativo
- de uma pessoa será um número positivo

### Obtendo o chat id

Para ter acesso a informação do `chat id` de uma conversa de um grupo ou uma conversa privada de uma pessoa, recomendo utilizar o aplicativo, do tipo cli, [tepe](https://crates.io/crates/tepe).

`tepe` é implementado em [rust-lang](https://www.rust-lang.org/) para utilizá-lo siga esses passos:

> os comandos devem ser executados em um terminal

1. [Instale o rust](https://www.rust-lang.org/tools/install)  
2. reinicie o seu computador ou execute: `source ~/.cargo/env` _(no linux)_.
3. execute: `cargo install tepe` _(você vai precisar ter algum compilador C/C++ instalado)_.
4. execute: `tepe test -t token_do_seu_bot_aqui`
5. adicione o seu bot ao grupo ou envie qualquer mensagem para ele no privado.
6. será exibido na conversa o `chat id` anote-o.
7. você pode interromper a execução do comando `tepe test` do passo 4.

> essa não é a unica forma de se obter o chat id de uma conversa no telegram.

## Docker

[jprando/vuejsbrasilvagas](https://hub.docker.com/r/jprando/vuejsbrasilvagas) no docker hub.

[Documentação da instalação do docker](https://docs.docker.com/get-docker/)

> os comandos devem ser executados em um terminal

O comando abaixo vai:
- Baixar a última versão da imagem, gerada no docker hub, baseado nos fontes desse repositório.
- Criar e iniciar o container no docker.

> voce deve substituir os "???" por seu valor correspondente

```sh
docker run --name onomequevcquizer-tgbot-srv \
	--restart=always \
	-e TELEGRAM_BOT_TOKEN=??? \
	-e TELEGRAM_CHAT_ID=??? \
-d jprando/vuejsbrasilvagas
```

Para verificar se o container esta em execução, execute:

```sh
docker ps
```

Para visualizar o log do container, execute:

```sh
docker logs onomequevcquizer-tgbot-srv
```

## Makefile

> somente para sistemas unix como linux ou mac, não testei a utilização do comando make no windows

Este repositório tem um arquivo chamado [makefile](/makefile) para facilitar a execução desse projeto.

Em um terminal, estando na pasta deste projeto, ao executar o comando:

```sh
~/projetos/vuejsbrasilvagas> make
```

ou

```sh
~/projetos/vuejsbrasilvagas> make help
```

Será exibido algumas opções para facilitar o gerenciamento do container e imagem desse projeto no docker.

Edite o arquivo e configure as variáveis, que se encontram no ínicio do arquivo:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

Uma vez configurado corretamente, tudo o que você precisa executar para ter esse projeto funcionando é:

```sh
~/projetos/vuejsbrasilvagas> make deploy
```


## Azure Function

Versão "Azure Functions (serverless)" desse projeto.

https://github.com/vuejs-br/vagas-telegram-bot

## Libs

Principais libs utilizadas nesse projeto:

- [node/javascript](https://nodejs.org/en/about/)
- [telegraf](https://telegraf.js.org/)
- [axios](https://github.com/axios/axios)
- [pm2](https://pm2.keymetrics.io/)