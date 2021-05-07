const messages = [
  "Owen", 
  "Alexander", 
  "Eren", 
  "David",
  "Maria",
  "Laura" ,
  "Ancel",
  "Kiara",
  "Gabo",
  "Merced"
]

const random_msg = () => {
  const message = messages[Math.floor(Math.random()*messages.length)]
  console.log(message)
}

module.exports = { random_msg }