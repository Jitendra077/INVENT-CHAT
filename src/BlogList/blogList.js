import React, { Component } from 'react';
import "./blogList.css";
import Img from "../Images/green-T.jpg"



class blogList extends Component {

     onClickSubscribe = () => {
        alert("Subscribed !!")
    }
    render() {

        return (
            <div > 
                <p className = "Email-Newsletter_">Email Newsletter</p>
                <p className = "Subscribe-my-Newslet">Subscribe my Newsletter for new blog posts, tips & new photos</p>
                <input type = "text" placeholder = "Your name" className = "text" />
                <input type = "text1" placeholder = "Your email adress" className = "text" />
                <div  >
                    <button className ="subscribeButton "onClick = {this.onClickSubscribe}  >
                        <span className = "SUBSCRIBE1">SUBSCRIBE</span>
                    </button>
                </div>

                <p className = "FASHION_L" >FASHION</p>
                <p className = "How-to-increase-your_L"> How to increase your productivity with a Music</p>
                <p className = "date">Aug 24, 2020</p>
                <img src = {Img} className = "greenT" />

                <p className = "This-is-an-example-o">This is an example of a WordPress post, you could edit this
                     to put information about yourself or your site so readers 
                     know where you are coming from. You can create as many posts 
                     as you like in order to share with your readers what is on your
                      mind.
                </p>
                <button className = "Rectangle_L"><span className = "Read-more">Read more</span></button>
               

            </div>
        );
    }
}

export default blogList;