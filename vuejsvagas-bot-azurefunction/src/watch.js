const { getIssues } = require('./getIssues')
const { vuejsOnly, sendMessage } = require('./watch.utils')

const watch = async () => {
  try {
    await getIssues()      
      .then(vuejsOnly)
      .then(sendMessage)
  } catch (err) {
    console.error('watch', err)
  }
}

module.exports = { watch }
