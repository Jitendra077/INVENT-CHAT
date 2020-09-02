import React, { Component } from 'react'
import "./blogList.css"
import Img from "../Images/man.jpg"

export default class blogList1 extends Component {
    render() {
        return (
            <div>
                 <p className = "FASHION" style = {{marginTop:"60px"}} >FASHION</p>
                <p className = "How-to-increase-your"> How to increase your productivity with a Music</p>
                <p className = "date">Aug 24, 2020</p>
                <img src = {Img} className = "greenT" />

                <p className = "This-is-an-example-o">This is an example of a WordPress post, you could edit this
                     to put information about yourself or your site so readers 
                     know where you are coming from. You can create as many posts 
                     as you like in order to share with your readers what is on your
                      mind.
                </p>
                <button className = "Rectangle"><span className = "Read-more">Read more</span></button>
              
            </div>
        )
    }
}
