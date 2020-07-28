const axios = require('axios')
const { GITHUB_API, ISSUES_URL } = require('./config')

const http = axios.create({
  baseURL: GITHUB_API
})

let lastDateRequest = process.env.LAST_DATE_REQUEST || new Date()
/// lastDateRequest = '2020-07-27T23:03:00Z'

const getIssues = async () => {
  const result = await http.get(ISSUES_URL + lastDateRequest).then(r => r.data)
  lastDateRequest = new Date()
  return result
}

module.exports = { getIssues }
