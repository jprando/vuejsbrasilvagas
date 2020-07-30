const axios = require('axios')
const { GITHUB_API, issuesUrl } = require('./config')

const http = axios.create({
  baseURL: GITHUB_API
})

let lastDateRequest = process.env.LAST_DATE_REQUEST || new Date().toISOString()

const getIssues = async repoName => {
  try {
    const result = await http.get(issuesUrl(repoName) + lastDateRequest)
      .then(r => r.data)
    lastDateRequest = new Date()
    
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
