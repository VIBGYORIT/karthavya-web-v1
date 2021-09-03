import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from "./PageNotFound";
import NavBar from "../components/dashboardComponents/NavBar";
import DashboardHome from "./dashboardPages/DashboardHome";
import DashboardEditProfile from "./dashboardPages/DashboardEditProfile";
import '../css/dashboard/Dashboard.css';

class Dashboard extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            name: this.props.location.state.name,
            email: '',
            contact: '',
            accountId: '',
            deviceCount: '',
            devices: null,
        }
    }

    render() {
        return (
            <div className="Dashboard">
                <Router className="router">
                    <NavBar className="navbar" USER_NAME={ this.state.name }/>
                    <Switch>
                        <Route exact path="/dashboard/" component={ DashboardHome }/>
                        <Route path="/dashboard/edit-profile" component={ DashboardEditProfile }/>
                        <Route component={ PageNotFound }/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Dashboard;