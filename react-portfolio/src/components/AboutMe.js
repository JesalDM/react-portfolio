import React from 'react';

function AboutMe(){
    return(
        <div id="about-me">
            <div className="container">
                <div className="row section-title">
                    <div className="col-sm-9">
                        <h2>About Me</h2>
                    </div>
                    <div className="col-sm-3 pt-3 navigate-top about">
                        <a className="pt-5" href="#header">GO TO TOP</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-11">
                        <div className = "section">
                            <img src="/assets/profile-picture.png" className="img-fluid float-left" alt="My profile pic"/>
                            {/* Background */}
                            <p>I'm a <strong>Business Analyst</strong>, currently pursuing a Full stack Web Development Bootcamp from University of New Hampshire, to better my skills on my new found passion for technology. I'm a finance graduate  with a couple of years of international experience in a Credit Analyst role. After moving to US, I gathered my first experiences in the IT industry working as a Business Analyst in a fintech Company in Boston, that instantly grabbed my interest to work in this domain.</p>
                            {/* Transferable skills */}
                            <p>I'm easy to work with, and strongly believe in teamwork. My dedication to work, willingness to learn more and firm determination has helped me produce outstanding results within defined timelines. I've consistently demonstrated success in guiding my projects to completion. I am looking to further my knowledge, improve my skills, and continue to learn.</p>
                            {/* Hobbies */}
                            <p>Outside of work, I enjoy travelling, playing indoor games, solving riddles and spending time with friends and family.</p> 
                            {/* Download Resume */}
                            <button className="btn btn-custom resume-btn"><a href="/assets/JesalMehta_Resume.pdf" target="_blank">Download Resume </a></button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default AboutMe;