const axios = require('axios')
const { GITHUB_API, ISSUES_URL } = require('./config')

const http = axios.create({
  baseURL: GITHUB_API
})

let lastDateRequest = new Date()
// lastDateRequest = '2020-07-20T00:00:00Z'

const getIssues = async () => {
  const result = await http.get(ISSUES_URL + lastDateRequest).then(r => r.data)
  lastDateRequest = new Date()
  return result
}

module.exports = { getIssues }
