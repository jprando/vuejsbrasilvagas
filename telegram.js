const { Telegraf } = require('telegraf')
const { BOT_TOKEN, CHAT_ID, ERRO401, ERRO400, STARTMSG } = require('./config')

if(!BOT_TOKEN) {
  console.error(ERRO401)
  process.exit(1)
}

if(!CHAT_ID) {
  console.error(ERRO400)
  process.exit(1)
}

const config = { disable_web_page_preview: true, parse_mode:'Markdown' }

const bot = new Telegraf(BOT_TOKEN)
bot.start((ctx) => ctx.reply(STARTMSG))
bot.launch()

bot.telegram.getChat(CHAT_ID).then(console.info)

const telegramSendMessage = msg => {
  try {
    bot.telegram.sendMessage(CHAT_ID, msg, config)
  } catch (err) {
    console.error('telegramSendMessage', err)
  }
}

module.exports = { telegramSendMessage }
