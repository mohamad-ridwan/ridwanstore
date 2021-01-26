import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signin from './pages/signin/Signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Signin />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
