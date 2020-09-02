import React, { Component } from 'react';
import "../Blog-view/blogview4.css";
import Image from "../Images/phone.png";
import Readmore2 from "./Readmore2";

export default class relatedBlogs extends Component {
    render() {
        return (
            <div className = "top">
                <p className = "How-to-increase-your_">How to increase your productivity with a Music</p>
                <p className = "FASHION-Aug-24-20_">FASHION  <span className ="txt">    |   Aug 24, 2020  </span> </p>
                <img src = {Image} className = "pic1" />
                <p className = "This-is-an-example-o_">This is an example of a WordPress post, you could edit
                     this to put information about yourself or your site so
                      readers know where you are coming from. You can create
                       as many posts as you like in order to share with your 
                       readers what is on your mind.
                </p>
                <Readmore2 />
            </div>
        )
    }
}
