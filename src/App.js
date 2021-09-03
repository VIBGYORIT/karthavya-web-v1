import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import './css/App.css';
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
// import Render3D from "./three-js/Render3D";
import DashboardDemo from "./pages/DashboardDemo";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";
import CustomerDetail from "./pages/CustomerDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import SiteMap from "./pages/SiteMap";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ LandingPage }/>
                <Route path="/login/" component={ Login }/>
                <Route path="/login" component={ Login }/>
                <Route path="/signup/" component={ Signup }/>
                <Route path="/dashboard/" component={ Dashboard }/>
                <Route path="/dashboard-demo/" component={ DashboardDemo } />
                <Route path="/product/" component={ Product }/>
                <Route path="/customer-detail/" component={ CustomerDetail }/>
                <Route path="/privacy-policy/" component={ PrivacyPolicy }/>
                <Route path="/terms-and-conditions/" component={ TermsAndConditions }/>
                <Route path="/site-map/" component={ SiteMap }/>
                <Route component={ PageNotFound }/>
            </Switch>
        );
    }
}

export default App;
