const timeOut = 1000
const rodar = () => console.log("Hello")


const finish = setTimeout(rodar, timeOut)
clearTimeout(finish)

// setTimeout(() => clearTimeout(finish), 5000)