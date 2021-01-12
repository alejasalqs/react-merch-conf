import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Layout } from '../components/Layout';
import { CheckOut } from '../containers/CheckOut';
import { Home } from '../containers/Home';
import { Information } from '../containers/Information';
import { NotFound } from '../containers/NotFound';
import { Payment } from '../containers/Payment';
import { Success } from '../containers/Success';
import { AppContext } from '../context/AppContext';
import { useInitialState } from '../hooks/useInitialState';


export const App = () => {
    // En este caso como switch es lo que está en medio de layout actua como el hijo que le pasamos por props
    const initialState = useInitialState();
    return (
        
        <AppContext.Provider value={initialState}>
            <Router>
                <Layout>
                    <Switch>
                        <Route  exact path="/" component={Home}/>

                        <Route  exact path="/checkout" component={CheckOut}/>

                        <Route  exact path="/checkout/information" component={Information}/>

                        <Route  exact path="/checkout/payment" component={Payment}/>

                        <Route  exact path="/checkout/success" component={Success}/>

                        <Route  component={NotFound}/>
                    </Switch>
                </Layout>
            </Router>
        </ AppContext.Provider>
    )
}
