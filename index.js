const { watch } = require('./watch')

watch()

setInterval(watch, 1000 * 60 * 60 /* 1 hour */)

console.log('VueJS Brasil Vagas iniciado...')
