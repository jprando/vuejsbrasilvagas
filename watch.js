const { getIssues } = require('./getIssues')
const { vuejsOnly, sendMessage } = require('./watch.utils')

const watch = async (repoName = 'vuejs-br/vagas') => {
  await getIssues(repoName)      
    .then(vuejsOnly)
    .then(sendMessage)
}

module.exports = { watch }
