const log = require('debug')('vuejsbr:vagasbot:telegram')
const error = require('debug')('vuejsbr:vagasbot:telegram:error')

const {
  TELEGRAM: {
    botToken, chatId, error: { msg400: errorMsg400, msg401: errorMsg401}
  }
} = require('../../config')

module.exports = () => {
  if (!botToken) {
    error('TELEGRAM_BOT_TOKEN', errorMsg401)
    process.exit(1)
  }

  log('INIT: TELEGRAM_BOT_TOKEN OK')

  if (!chatId) {
    error('TELEGRAM_CHAT_ID', errorMsg400)
    process.exit(1)
  }

  log('INIT: TELEGRAM_CHAT_ID OK')
}
