import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/dashboard/NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="NavBar">
                <div className="logo">KARTHAVYA</div>
                <ul>
                    <Link to="/dashboard/" className="link">
                        <li>Home</li>
                    </Link>
                    <Link to="/dashboard/edit-profile/" className="link">
                        <li>Edit Profile</li>
                    </Link>
                </ul>
                <div className="profile">
                    <div className="name">
                        { 'Logged in as ' + this.props.USER_NAME }
                    </div>

                </div>
                <div className="logout">
                    <a href="/login">
                        Logout
                    </a>
                </div>
            </nav>
        )
    }
}

export default NavBar;