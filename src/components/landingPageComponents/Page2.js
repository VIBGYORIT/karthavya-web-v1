import React from "react";
import '../../css/landingPage/LandingPage2.css';

class Page2 extends React.Component {
    render() {
        return (
            <div className="page-2">
                <div className="title">
                    { this.props.title }
                </div>
                <div className="image">
                    { this.props.image }
                </div>
                <div className="view">
                    <button>
                        View 3D Model
                    </button>
                </div>
                <div className="note">
                    { this.props.note }
                </div>
                <div className="info">
                    <div>{ this.props.line1 }</div>
                    <div>{ this.props.line2 }</div>
                </div>
            </div>
        );
    }
}

export default Page2;