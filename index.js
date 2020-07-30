const { watch } = require('./watch')

const githubRepos = [
  'vuejs-br/vagas',
  'frontendbr/vagas'
]

const watchAll = () => {
  githubRepos.forEach(watch)
}

watchAll()

const ONE_HOUR = 1000 * 60 * 60
setInterval(watchAll, ONE_HOUR)

console.log(
  'VueJS Brasil Vagas iniciado...\n',
  '- ' + githubRepos.join('\n - ')
)
