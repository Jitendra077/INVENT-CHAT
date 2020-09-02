import React, { Component } from 'react';
import Navbar from "./Navbar";
import BlogList from "./blogList";
import BlogList1 from "./blogList1";
import BlogList2 from "./blogList2";
import BlogList3 from "./blogList3";
import Footer from "./footer";


export default class main extends Component {
    render() {
        return (
            <div  style = {{backgroundColor:" #232427"}}>
                <Navbar />
                <BlogList />
                <BlogList1 />
                <BlogList2 />
                <BlogList3 />
                <Footer />
               
            </div>
        )
    }
}
