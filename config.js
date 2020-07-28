const GITHUB_API = 'https://api.github.com'
const REPO = 'frontendbr/vagas'
const ISSUES = 'issues?state=open&direction=desc&since='
const ISSUES_URL = `/repos/${REPO}/${ISSUES}`

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const CHAT_ID = process.env.TELEGRAM_CHAT_ID
const TEPE_PATH = process.env.TEPE_PATH || '/home/$USER/.cargo/bin'

module.exports = {
  GITHUB_API,
  ISSUES_URL,
  BOT_TOKEN,
  CHAT_ID,
  TEPE_PATH
}
