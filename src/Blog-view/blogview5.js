import React, { Component } from 'react'
import "./blogview4.css"
import fbImg from "../Images/fb.png";
import InstaImg from "../Images/insta.png";
import TwitterImg from "../FooterImages/group-2.png";
import img from "../FooterImages/group-8.png";

export default class blogview5 extends Component {
    render() {

        const onClickSubscribe = () => {
            alert("Subscribed !!")
        }
        return (
            <div>
                <p className = "Share">SHARE</p>
                <div className = "fbImg" >
                         <img src = {fbImg} alt ="fbImg" />
                </div>
                <div  className = "instaImg">
                        <img src = {InstaImg}  />
                </div>
                <div className = "twitterImg">
                         <img src = {TwitterImg}   />
                </div>
                <div className = "Img">
                        <img src = {img} alt = "error" />
                </div>
                <div className = "Email-Newsletter">
                    <p>Email Newsletter</p>
                </div>
                <div className = "Subscribe-my-Newslet">
                    <p>Subscribe my Newsletter for new blog posts, tips & new photos</p>
                </div>
                <div >
                    <input  className = "Rectangle-Copy-23"/>
                    <p className = "Your-name">Your name</p>
                </div>
                <div >
                    <input  className = "Rectangle-Copy-23_" />
                    <p className = "Your-email" >Your email adress</p>
                </div>
                <div  >
                    <button className ="subscribeButton "onClick = {onClickSubscribe}  >
                        <span className = "SUBSCRIBE1">SUBSCRIBE</span>
                    </button>

                </div>
            </div>
        )
    }
}
