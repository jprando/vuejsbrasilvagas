const { telegramSendMessage } = require('./telegram')

const NOBODY = 'POR FAVOR, SÓ POSTE SE A VAGA FOR PARA FRONT-END!'

const getLabels = i => i.labels.map(l => l.name).join(', ')

const getMsg = i =>  {
  let body = i.body;

  [
    '## Nossa empresa', 'Nossa empresa', '## Empresa',
    '## Descrição da vaga', '## Local', '## Requisitos',
    '## Contratação', '## Como se candidatar', '## Labels',
    '#### Alocação', '#### Regime', '#### Nível', '**'
  ].forEach(w => { body = body.split(w).join(' ') });

  [' ', '\r\n', '\r','\n'].forEach(c => {
    body = body.split(c)
    .map(w => w.trim())
    .filter(w => w !== '')
    .slice(0, 65)
    .join(c)
  })

  let msg = `#vaga ${i.title}\n\nlabels: ${getLabels(i)}\n`+
  `${!body.includes(NOBODY) ? '\n'+body+'...\n' : ''}\n`+
  `${i.html_url}`

  return msg.trim()
}

const vuejsOnly = issues => issues.filter(i => 
  ['VUE', 'VUEJS', 'VUE.JS', 'VUE JS'].some(vuejs =>
    [i.title, i.body]
      .map(txt => txt.toUpperCase())
      .some(txt => txt.includes(vuejs))
  )
)

const getAttributes = issues => issues.map(
  ({html_url, title, labels, body}) =>
  ({html_url, title, labels, body})
)
  
const sendMessage = issues => issues.map(getMsg).forEach(telegramSendMessage)

module.exports = { vuejsOnly, getAttributes, sendMessage }
