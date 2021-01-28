import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import VerifikasiCode from './pages/verifikasicode/VerifikasiCode';
import WrappContext from './service/context/WrappContext';
import Home from './pages/home/Home';
import Allproduct from './pages/allproduct/Allproduct';
import DetailProduct from './pages/detailproduct/DetailProduct';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <div className="App">
      <WrappContext>
        <BrowserRouter>
          <Switch>
            <Route path='/profile'>
              <Profile />
            </Route>

            <Route path='/detail-product'>
              <DetailProduct />
            </Route>

            <Route path='/all-product'>
              <Allproduct />
            </Route>

            <Route path="/verification-code">
              <VerifikasiCode />
            </Route>

            <Route path="/sign-up">
              <Signup />
            </Route>

            <Route path="/sign-in">
              <Signin />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </WrappContext>
    </div>
  );
}

export default App;
