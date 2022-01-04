const log = require('debug')('vuejsbr:vagasbot')
const error = require('debug')('vuejsbr:vagasbot:error')

const { search } = require('./services/github')

const GITHUB_REPOS = [
  'vuejs-br/vagas',
  'frontendbr/vagas'
]

const searchAll = () => {
  try {
    GITHUB_REPOS.forEach(search)
  } catch (err) {
    error(err)
  }
}

searchAll()

const ONE_SECOND = 1000
const ONE_MINUTE = 60 * ONE_SECOND
const ONE_HOUR = 60 * ONE_MINUTE
setInterval(searchAll, ONE_HOUR)

log('VueJS Brasil Vagas iniciado')
