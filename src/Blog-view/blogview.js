import React, { Component } from 'react'
import Navbar from "../Blog-view/Navbar"
import BlogView1 from "./blogView1";
import BlogView2 from "./blogView2";
import BlogView3 from "./blogView3";
import BlogView4 from "./blogview4";
import Blogview5 from "./blogview5";

export default class blogview extends Component {
    render() {
        return (
            <div className ="background">
                <Navbar/>
                <Blogview5 />
                <BlogView1 />
                <BlogView2 />
                <BlogView3 />
                <BlogView4 />
            </div>
        )
    }
}
