const { EventEmitter } = require('events')
const ev = new EventEmitter()

// ouvir sempre
ev.on('saySomething', (pessoa) => {
  console.log("estou ouvindo voce:", pessoa)
})
// ouvir uma unica vez
ev.once('saySomething', (pessoa) => {
  console.log("estou ouvindo voce:", pessoa)
})

ev.emit('saySomething', 'felipe')
ev.emit('saySomething', 'aline')

