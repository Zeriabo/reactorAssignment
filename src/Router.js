import React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import Shirts from './Shirts'
import Jackets from './Jackets'
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
    <Route path="/Shirts" component={Shirts} />
    <Route path="/Jackets" component={Jackets} />
    <Route path="/Accessories" component={Accessories} />

  


    

    </Switch>)
export default Router;
