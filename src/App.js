import { Home } from './pages';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const App = ({theme, changeTheme}) => {
  
  return (

      <Router>
        <Switch>
          <Route><Home theme={theme} changeTheme={changeTheme} /></Route>
        </Switch>
      </Router>
  )
}

export default App
