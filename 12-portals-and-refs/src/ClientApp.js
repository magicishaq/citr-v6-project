import { hydrate } from 'react' //im expecting complete markup at this point
import { BrowserRouter } from 'react-router-dom'
import App from './App'

//stuff that should only happen in the browser like analytics
hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
