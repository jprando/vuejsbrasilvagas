const { getIssues } = require('./getIssues')
const { vuejsOnly, sendMessage } = require('./watch.utils')

const watch = async (repoName = 'vuejs-br/vagas') => {
  try {
    await getIssues(repoName)      
      .then(vuejsOnly)
      .then(sendMessage)
  } catch (err) {
    console.error('watch', err)
  }
}

module.exports = { watch }
