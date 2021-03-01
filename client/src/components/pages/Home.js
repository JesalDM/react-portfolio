import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Home.css';
import '../../App.css';

function Home(){

    return(
        <div>
            <header id="header">
                <div className="intro pb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <img src="/assets/portfolio-intro4.png" alt="Jesal Mehta's pic" className="home-page-photo"/>
                            </div>
                            <div className="intro-text col-lg-7">
                                <h1>Jesal Mehta</h1>
                                <p>Business Analyst / Web Developer</p>
                                {/* // Links to navigate to the other sections in the website */}
                                <a href="/portfolio" className="btn btn-custom btn-lg">Portfolio</a> 
                                <a href="/aboutMe" className="btn btn-custom btn-lg">About Me</a> 
                                <a href="/contact" className="btn btn-custom btn-lg">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home;