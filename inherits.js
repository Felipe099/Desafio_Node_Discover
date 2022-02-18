const { inherits } = require('util');
const { EventEmitter } = require('events');

function Character(name, age) {
    this.name = name;
    this.age = age;

}

inherits(Character, EventEmitter);

const felipe = new Character('Felipe', 25);
felipe.on('information', () =>  console.log(` > Meu nome é ${felipe.name} e tenho ${felipe.age} anos`));

console.log('Qual seu nome e idade?');
felipe.emit('information');
