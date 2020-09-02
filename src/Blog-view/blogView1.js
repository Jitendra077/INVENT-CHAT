import React, { Component } from 'react'
import Img from "../Images/green-T.jpg"
import "../Blog-view/BlogView.css"


export default class blogList1 extends Component {
    render() {
        return (
            <div  className = "background">
                
                 <p className = "FASHION__"  >FASHION</p>
                <p className = "How-to-increase-your__"> How to increase your productivity with a Music</p>
               
                <p className = "date__">Aug 24, 2020</p>
                <img src = {Img} className = "greenT" />

                <p className = "This-is-an-example__">This is an example of a WordPress post, 
                you could edit this to put information about yourself or your site so readers 
                know where you are coming from. You can create as many posts as you like in order
                 to share with your readers what is on your mind.This is an example of a WordPress
                  post, you could edit this to put information about yourself or your site so readers
                   know where you are coming from. You can create as many posts as you like in order to
                    share with your readers what is on your mind. This is an example of a WordPress post,
                     you could edit this to put information about yourself or your site so readers know where
                      you are coming from. You can create as many posts as you like in order to share with your
                       readers what is on your mind. This is an example of a WordPress post, you could edit this
                        to put information about yourself or your site so readers know where you are coming from.
                         You can create as many posts as you like in order to share with your readers what is on your mind.
                </p>
                <p className = "How-to-increase__"> How to increase </p>
                <p className = "This-is-an-example__">This is an example of a WordPress post, 
                you could edit this to put information about yourself or your site so readers 
                know where you are coming from. You can create as many posts as you like in order
                 to share with your readers what is on your mind.This is an example of a WordPress
                  post, you could edit this to put information about yourself or your site so readers
                   know where you are coming from. You can create as many posts as you like in order to
                    share with your readers what is on your mind. This is an example of a WordPress post,
                     you could edit this to put information about yourself or your site so readers know where
                      you are coming from. You can create as many posts as you like in order to share with your
                       readers what is on your mind. This is an example of a WordPress post, you could edit this
                        to put information about yourself or your site so readers know where you are coming from.
                         You can create as many posts as you like in order to share with your readers what is on your mind.
                </p>
               
            </div>
        )
    }
}
