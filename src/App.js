import { BrowserRouter, Switch, Route } from 'react-router-dom'

// styles
import './App.css'

// page components
import Navbar from './Components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Create from './pages/Create/Create'
import Search from './pages/Search/Search'
import Recipe from './pages/Recipe/Recipe'
import ThemeSelector from './Components/ThemeSelector/ThemeSelector'
import { useTheme } from './Hooks/useTheme'

function App() {
  const { mode } = useTheme()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
      <Navbar />
      <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App