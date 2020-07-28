/// 1º - instalar o rust no sistema https://www.rust-lang.org/tools/install
/// 2º - executar o comando: cargo install tepe
/// 3º - configurar o caminho ate o binario tepe em TEPE_PATH (which tepe)

const { exec } = require("child_process");
const { TEPE_PATH, BOT_TOKEN, CHAT_ID } = require('./config')

const telegramSendMessage = msg => {
  msg = msg.replace('"','\"')
  exec(`${TEPE_PATH}/tepe send -t ${BOT_TOKEN} -c ${CHAT_ID} -m "${msg}"`)
}

module.exports = { telegramSendMessage }

// TODO: achar uma lib em js boa para enviar mensagens para o telegram via js
