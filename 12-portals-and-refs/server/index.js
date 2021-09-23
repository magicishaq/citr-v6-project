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
  const staticContext = {}
  //when it goes through staticRouter it will give the error codes
  const reactMarkup = (
    <StaticRouter url={request.url} context={staticContext}>
      <App />
    </StaticRouter>
  )
  response.status(staticContext.statusCode || 200)
  response.send(`${parts[0]}${renderToString(reactMarkup)}${parts[1]}`) //the complete site
  response.end()
})

console.log(`listening on http://localhost:${PORT}`)
app.listen(PORT)
