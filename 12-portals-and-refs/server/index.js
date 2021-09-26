//quick node js server
import express from 'express'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import * as fs from 'fs'

import App from '../src/App'

const PORT = process.env.PORT || 3000
const html = fs.readFileSync('dist/index.html').toString()
const parts = html.split('not rendered')

const app = express() //new express app
app.use('/dist', express.static('dist')) //serve it statically
app.use((request, response) => {
  response.write(parts[0]) //they get everything in the head of the website

  const staticContext = {}
  //when it goes through staticRouter it will give the error codes
  const reactMarkup = (
    <StaticRouter url={request.url} context={staticContext}>
      <App />
    </StaticRouter>
  )

  const stream = renderToNodeStream(reactMarkup)
  stream.pipe(response, { end: false })
  steam.console('end', () => {
    response.status(staticContext || 200)
    response.write(parts[1])
  })
})

console.log(`listening on http://localhost:${PORT}`)
app.listen(PORT)
