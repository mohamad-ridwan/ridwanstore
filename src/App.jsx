import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, useHistory, withRouter } from 'react-router-dom';
import Signin from './pages/signin/Signin';
import VerifikasiCode from './pages/verifikasicode/VerifikasiCode';
import WrappContext from './service/context/WrappContext';
import Home from './pages/home/Home';
import Allproduct from './pages/allproduct/Allproduct';
import DetailProduct from './pages/detailproduct/DetailProduct';
import Profile from './pages/profile/Profile';
import Setting from './pages/setting/Setting';
import API from './service/globalapi';
import { useEffect } from 'react';
import Keranjang from './pages/keranjang/Keranjang';
import FormSignup from './pages/signup/FormSignup';

function App() {

  return (
    <div className="App">
      <WrappContext>
        <BrowserRouter>
          <Switch>

            <Route path='/keranjang'>
              <Keranjang />
            </Route>

            <Route path='/setting'>
              <Setting />
            </Route>

            <Route path='/profile'>
              <Profile />
            </Route>

            <Route path='/detail-product/:id'>
              <DetailProduct />
            </Route>

            <Route path='/all-product/:id'>
              <Allproduct />
            </Route>

            <Route path="/verification-code">
              <VerifikasiCode />
            </Route>

            <Route path="/sign-up">
              <FormSignup />
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

export default withRouter(App)
