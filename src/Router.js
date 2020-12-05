import React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import Cloths from './Cloths'
import Accessories from './Accessories'
import Store from './Store'


const Router = (props) => (<Switch>
    <Route path="/" exact>
    <Redirect to="/Store" />
</Route>
<Route path="/Home" exact>
    <Redirect to="/Store" />
</Route>
    <Route exact path='/' component={Store}/>
    <Route path="/Home" component={Store} />
    <Route path="/shirts" render={(props) => (
    <Cloths {...props} type={"shirts"} />
  )}/>
    <Route path="/jackets" render={(props) => (
    <Cloths {...props} type={"jackets"} />
  )}/>
    <Route path="/Accessories" component={Accessories } />

  


    

    </Switch>)
export default Router;
