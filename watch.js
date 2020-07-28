const { getIssues } = require('./getIssues')
const { vuejsOnly, getAttributes, sendMessage } = require('./watch.utils')

const watch = async () => {
  try {
    await getIssues()      
      .then(vuejsOnly)
      .then(getAttributes)
      .then(sendMessage)
  } catch (err) {
    console.error('watch', err)
  }
}

module.exports = { watch }
