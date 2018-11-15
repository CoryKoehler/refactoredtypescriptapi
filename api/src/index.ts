import app from './App'

const port = process.env.PORT || 4999

app.listen(port, (e) => {
  if (e) return console.log(e)
  return console.log(`Started on localhost:${port}`)
})
