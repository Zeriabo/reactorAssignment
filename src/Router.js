import React from 'react';
import { Switch, Route, BrowserRouter,Redirect } from 'react-router-dom';
import App from './App'
import Shirts from './Shirts'
import Jackets from './Jackets'
import Accessories from './Accessories'
import Store from './Store'


const Router = (props) => (<BrowserRouter><Switch>
    <Redirect from="/" to="/Store" />
    <Route exact path='/' component={Store}/>
    <Route path="/Home" component={Store} />
    <Route path="/Shirts" component={Shirts} />
    <Route path="/Jackets" component={Jackets} />
    <Route path="/Accessories" component={Accessories} />

  


    

    </Switch></BrowserRouter>)
export default Router;
