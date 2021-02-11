import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import './App.css';

import Landing from './components/Landing';
import Plans from './components/Plans';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
        <Route path="/">
          <Landing />
        </Route>
        <Route path="/plans">
          <Plans />
        </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
