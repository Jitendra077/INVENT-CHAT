import React, { Component } from 'react';
import "./footer.css";
import Insta from "../Images/instaf.png";
import Fb from "../FooterImages/fbf.svg";


export default class footer extends Component {
    render() {
        return (
            <div className = "footer">
                <img src = {Insta}  className ="insta"/>
                <img src = {Fb}  className ="fb" /> 
            </div>
        )
    }
}
