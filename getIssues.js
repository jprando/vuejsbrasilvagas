const fetch = require('node-fetch');
const formatISO = require('date-fns/formatISO')
const { utcToZonedTime } = require('date-fns-tz')
const { TIME_ZONE, issuesUrl } = require('./config')

const log = require('debug')('vuejsbr:vagasbot:getIssues')

let lastDateRequest

const setLastDate = (value = new Date()) => {
  lastDateRequest = formatISO(utcToZonedTime(value, TIME_ZONE))
}

if (process.env.LAST_DATE_REQUEST) {
  setLastDate(new Date(process.env.LAST_DATE_REQUEST))
} else {
  setLastDate()
}

log('INIT: current datetime:', lastDateRequest)

const getIssues = async repoName => {
  log(`getting opened issues from ${repoName} since ${lastDateRequest}`)

  const result = await fetch(issuesUrl(repoName) + lastDateRequest)
    .then(response => response.json())

  setLastDate()

  log(`${repoName} ${result.length} issues`)

  return result
}

module.exports = { getIssues }
