const { getIssues } = require('./getIssues')
const { vuejsOnly, sendMessage } = require('../../utils')

const search = async (repoName = 'vuejs-br/vagas') => {
  await getIssues(repoName)      
    .then(vuejsOnly)
    .then(sendMessage)
}

module.exports = { search }
