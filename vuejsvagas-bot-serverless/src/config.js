const GITHUB_API = 'https://api.github.com'
const REPO = 'frontendbr/vagas'
const ISSUES = 'issues?state=open&direction=desc&since='
const ISSUES_ENDPOINT = `/repos/${REPO}/${ISSUES}`

const FRONTENDBR_VAGAS_ISSUES_URL = `${GITHUB_API}${ISSUES_ENDPOINT}`

const BOT_TOKEN = process.env.VUEJSVAGAS_BOT_TOKEN
const CHAT_ID = process.env.VUEJS_BRASIL_CHAT_ID

const ERRO401 = 'TelegramError: 401: BOT_TOKEN environment is required'
const ERRO400 = 'TelegramError: 400: CHAT_ID environment is required'
const STARTMSG= 'Procuro vagas de VueJS por ai e publico no grupo @vuejsbrasil'

module.exports = {
  FRONTENDBR_VAGAS_ISSUES_URL,
  BOT_TOKEN,
  CHAT_ID
}
