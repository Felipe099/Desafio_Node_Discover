const timeOut = 1000
const rodar = () => console.log("Hello")

const finish = setInterval(rodar, timeOut)

setTimeout(() => clearInterval(finish), 3000)