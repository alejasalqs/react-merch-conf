import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { CheckOut } from '../containers/CheckOut';
import { Home } from '../containers/Home';
import { Information } from '../containers/Information';
import { NotFound } from '../containers/NotFound';
import { Payment } from '../containers/Payment';
import { Success } from '../containers/Success';


export const App = () => {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route  exact path="/" component={Home}/>

                        <Route  exact path="/checkout" component={CheckOut}/>

                        <Route  exact path="/checkout/info" component={Information}/>

                        <Route  exact path="/checkout/payment" component={Payment}/>

                        <Route  exact path="/checkout/success" component={Success}/>

                        <Route  component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
