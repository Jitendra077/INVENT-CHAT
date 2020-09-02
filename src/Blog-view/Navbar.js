import React, { Component } from 'react';
import "../Blog-view/Navbar.css"
import Img from "../FooterImages/group-71.png"

export default class Navbar extends Component {
    render() {
        return (
            <div >
                  <nav className = "Nav">
                  <img src= {Img} class="Group-71"/>
                 <p className = "Blog">Blog</p>
                </nav>
            </div>
        )
    }
}
