import React from 'react';
import '../../css/landingPage/Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <div className="line-1">Get access before<br/>everyone else.</div>
                <div className="email">
                    <input type="email" name="email" placeholder="Enter your mail address" autoComplete="off"/>
                </div>
                <div className="line-2">
                    We’re onboarding new customers one at a time to ensure every user has the best possible experience.
                </div>
                <div className="footer-buttons">
                    <button className="footer-sign-up">Sign up</button>
                    <button className="footer-login">Login</button>
                </div>
                <div className="footer">
                    <div className="copyrights">&copy; 2020 VIBGYOR</div>
                    <div className="pages">
                        <div className="page privacy-policy">
                            <a href="/privacy-policy">Privacy Policy</a>
                        </div>
                        <div className="page terms-and-conditions">
                            <a href="/terms-and-conditions">Terms and Conditions</a>
                        </div>
                        <div className="page site-map">
                            <a href="/site-map">Site Map</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;