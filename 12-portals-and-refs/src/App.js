import { useState, StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Details from './Details'
import SearchParams from './SearchParams'
import ThemeContext from './ThemeContext'

const App = () => {
  const theme = useState('darkblue')
  return (
    <ThemeContext.Provider value={theme}>
      <div
        className="p-10 m-10"
        style={{
          background:
            'url("http://pets-images.dev-apis.com/pets/wallpaperA.jpg")',
        }}
      >
        <Router>
          <header className="w-full mt-100px mb-10 text-center p-7 bg-gradient-to-b from-blue-400 via-pink-500 to-green-200 hover:bg-gradient-to-t hover:from-purple-500 hover:via-pink-200 hover:to-red-200 ">
            <Link
              className="text-1xl text-white text-opacity-90 hover:text-gray-500 hover:text-8lg"
              to="/"
            >
              Adopt Me!
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  )
}

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
