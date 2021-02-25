import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css'

function Home(){
    return(
        <div>
            <header id="header">
                <div class="intro pb-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5">
                                <img src="/assets/portfolio-intro4.png" alt="Jesal Mehta's pic" class="home-page-photo"/>
                            </div>
                            <div class="intro-text col-lg-7">
                                <h1>Jesal Mehta</h1>
                                <p>Business Analyst / Web Developer</p>
                                {/* // Links to navigate to the other sections in the website */}
                                <a href="#portfolio" class="btn btn-custom btn-lg">Portfolio</a> 
                                <a href="#about-me" class="btn btn-custom btn-lg">About Me</a> 
                                <a href="#contact" class="btn btn-custom btn-lg">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home;