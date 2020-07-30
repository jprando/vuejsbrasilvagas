const ERRO401 = 'TelegramError: 401: BOT_TOKEN environment is required'
const ERRO400 = 'TelegramError: 400: CHAT_ID environment is required'
const STARTMSG = 'Procuro vagas de VueJS por ai e publico no grupo @vuejsbrasil'

const GITHUB_API = 'https://api.github.com'
const ISSUES = 'issues?state=open&direction=desc&since='

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const CHAT_ID = process.env.TELEGRAM_CHAT_ID

const issuesUrl= repoName => `/repos/${repoName}/${ISSUES}`

module.exports = {
  GITHUB_API,
  BOT_TOKEN,
  CHAT_ID,
  ERRO401,
  ERRO400,
  STARTMSG,
  issuesUrl
}
