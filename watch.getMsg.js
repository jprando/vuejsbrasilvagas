const NOBODY = 'POR FAVOR, SÓ POSTE SE A VAGA FOR PARA FRONT-END!'

const getMsg = ({body, title, labels, html_url}) =>  {
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

  const msgTitle = title.trim().replace(']',']\n')
  const msgLabels = labels.map(label => label.name).join(', ')
  const msgBody = !body.includes(NOBODY) ? '\n```'+body+'```...\n' : ''
  
  let msg = `#vaga ${msgTitle}\n\nlabels: ${msgLabels}\n${msgBody}\n${html_url}`

  return msg.trim()
}

module.exports = { getMsg }
