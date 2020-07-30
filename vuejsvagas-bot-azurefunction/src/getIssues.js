const fetch = require('node-fetch');

const { FRONTENDBR_VAGAS_ISSUES_URL } = require('./config')

let lastDateRequest = process.env.LAST_DATE_REQUEST || new Date().toISOString()

const getIssues = async () => {
  try {
    const result = await fetch(FRONTENDBR_VAGAS_ISSUES_URL + lastDateRequest)
      .then(response => response.json())
      
    lastDateRequest = new Date().toISOString()
    
    const rateLimitExceeded = 'API rate limit exceeded for'
    if (result.message && result.message.startsWith(rateLimitExceeded)) {
      throw new Error(result.message)
    }
    
    return result
  } catch(err) {
    console.error('getIssues', err)
    throw err
  }
}

module.exports = { getIssues }
