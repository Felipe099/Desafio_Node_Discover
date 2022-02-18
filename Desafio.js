const questions = [
  "Como voce se sente?",
  "O que esta aprendendo hj?",
  "O que pretende fazer no futuro?"
]

const ask = (index = 0) => {
  process.stdout.write("\n" + questions[index] + " >")
}

ask()

const answers = []
process.stdin.on("data", data => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    process.exit()
  } 
})

process.on("exit", () => {
  
  console.log(`
  Boa Felipe!

  Como voce se sente?
  >${answers[0]}

  O que esta aprendendo hj?
  >${answers[1]}

  O que pretende fazer no futuro?
  >${answers[2]}

  Te espero aqui amanhã
  `)
})