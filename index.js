const log = require('debug')('vuejsbr:vagasbot')
const error = require('debug')('vuejsbr:vagasbot:error')

const { watch } = require('./watch')

const githubRepos = [
  'vuejs-br/vagas',
  'frontendbr/vagas'
]

const watchAll = () => {
  try {
    githubRepos.forEach(watch)
  } catch (err) {
    error(err)
  }
}

watchAll()

const ONE_HOUR = 1000 * 60 * 60
setInterval(watchAll, ONE_HOUR)

log('VueJS Brasil Vagas iniciado')
