const { Telegraf } = require('telegraf')
const { BOT_TOKEN, CHAT_ID } = require('./config')

if(!BOT_TOKEN) {
  console.error('TelegramError: 401: TELEGRAM_BOT_TOKEN environment is required')
  process.exit(1)
}

if(!CHAT_ID) {
  console.error('TelegramError: 400: TELEGRAM_CHAT_ID environment is required')
  process.exit(1)
}

const config = { disable_web_page_preview: true }

const bot = new Telegraf(BOT_TOKEN)
bot.start((ctx) => ctx.reply('Procuro vagas de VueJS por ai e publico no grupo @vuejsbrasil'))
bot.launch()

const telegramSendMessage = msg => {
  try {
    bot.telegram.sendMessage(CHAT_ID, msg, config)
  } catch (err) {
    console.error('telegramSendMessage', err)
  }
}

module.exports = { telegramSendMessage }
