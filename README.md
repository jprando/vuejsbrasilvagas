# VueJS Brasil Vagas Telegram 🤖

Procuro vagas de VueJS por ai e publico em um grupo do telegram.

Definição de "por ai", issues de repositórios no github com essa finalidade, xemplos:
- [vuejs-br/vagas](https://github.com/vuejs-br/vagas)
- [frontendbr/vagas](https://github.com/frontendbr/vagas).

## Variáveis de ambiente

Variáveis de ambiente utilizadas no projeto.

### TELEGRAM_BOT_TOKEN

Token do bot criado no telegram.

### TELEGRAM_CHAT_ID

Chat ID do usuário ou do grupo para o qual o bot deve enviar as mensagens.

## Telegram

Para criar um bot no [telegram](https://telegram.org/), você precisar iniciar uma conversa com o [BotFather](https://t.me/BotFather)(<-- clique aqui para que isso aconteça) no [telegram](https://telegram.org/).

Uma informação importante que você precisa anotar, pois vai precisar nos passos a seguir, é o **TOKEN** do bot que o BotFather vai lhe informar quando você concluir a criação do bot.

### Obtendo o chat id

Para ter acesso a informação do `chat id` de uma conversa de um grupo(número negativo) ou pessoa(número positivo), recomendo utilizar o aplicativo, do tipo cli, [tepe](https://crates.io/crates/tepe).

`tepe` é implementado em [rust-lang](https://www.rust-lang.org/) para utilizá-lo siga esses passos:

>os comandos devem ser executados em um terminal

1. [Instale o rust](https://www.rust-lang.org/tools/install)  
2. reinicie o seu computador ou execute: `source ~/.cargo/env` _(no linux)_.
3. execute: `cargo install tepe` _(você vai precisar ter algum compilador C/C++ instalado)_.
4. execute o comando abaixo antes de adicionar o bot a um grupo ou interagir come ele no privado: `tepe test -t token_do_seu_bot_aqui`
5. adicione o seu bot ao grupo ou envie qualquer mensagem para ele no privado.
6. será exibido na conversa o `chat id` anote-o.
7. você pode interromper a execução do comando `tepe test` do passo 4.

## Docker

[jprando/vuejsbrasilvagas](https://hub.docker.com/r/jprando/vuejsbrasilvagas) no docker hub.

O comando abaixo vai:
- Baixar a última versão da imagem, gerada no docker hub, baseado nos fontes desse repositório.
- Criar e iniciar o container no docker.

```sh
docker run --name onomequevcquizer-telegram-bot-srv \
	--restart=always \
	-e TELEGRAM_BOT_TOKEN=??? \
	-e TELEGRAM_CHAT_ID=??? \
-d jprando/vuejsbrasilvagas
```

Para visualizar o log do que esta acontecendo, execute:

`docker logs onomequevcquizer-telegram-bot-srv`

> "onomequevcquizer-telegram-bot-srv" deve ser o mesmo utilizado ao criar e iniciar o container, caso tenha informado outro nome para o container.

## Azure Function

Versão "Azure Functions/serverless" desse bot.

https://github.com/vuejs-br/vagas-telegram-bot

## Libs

Principais libs utilizadas nesse projeto:

- [node/javascript](https://nodejs.org/en/about/)
- [telegraf](https://telegraf.js.org/)
- [axios](https://github.com/axios/axios)
- [pm2](https://pm2.keymetrics.io/)