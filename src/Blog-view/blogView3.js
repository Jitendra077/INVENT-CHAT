import React, { Component } from 'react';
import "../Blog-view/BlogView.css";
import Image from "../Images/man.jpg";
import Readmore from "./Readmore";

export default class relatedBlogs extends Component {
    render() {
        return (
            <div className = "background">
                <p className = "Related-Blogs">Related Blogs</p>
                <p className = "How-to-increase-your3__">How to increase your productivity with a Music</p>
                <p className = "FASHION-Aug-24-20">FASHION  <span className ="txt">    |   Aug 24, 2020  </span> </p>
                <img src = {Image} className = "pic" />
                <p className = "This-is-an-example-o_1">This is an example of a WordPress post, you could edit
                     this to put information about yourself or your site so
                      readers know where you are coming from. You can create
                       as many posts as you like in order to share with your 
                       readers what is on your mind.
                </p>
                <Readmore />
            </div>
        )
    }
}
