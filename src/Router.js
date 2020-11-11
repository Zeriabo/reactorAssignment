import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import App from './App'
import Shirts from './Shirts'
import Jackets from './Jackets'
import Accessories from './Accessories'


const Router = (props) => (<BrowserRouter><Switch>
    <Route exact path='/' component={App}/>
    <Route path="/Home" component={App} />
    <Route path="/Shirts" component={Shirts} />
    <Route path="/Jackets" component={Jackets} />
    <Route path="/Accessories" component={Accessories} />
    
    
    
    </Switch></BrowserRouter>)
export default Router;
