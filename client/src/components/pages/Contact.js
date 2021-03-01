import React from 'react';
import '../../styles/Contact.css';
import Form from './Form';


function Contact(){
    return(
        <div id="contact">
            <div className="container">
                <div className="main-section contact">
                    <div className="contact_section">
                        <div className="row section-title">
                            <div className="col-sm-9">
                                <h2>Contact Me</h2>
                            </div>
                            {/* Navigate to the home page link */}
                            <div className="col-sm-3 pt-3 navigate-top about">
                                <a className="pt-5" href="/">GO TO HOME</a>
                            </div>
                        </div>
                        {/* Address, phone and email details */}
                        <div className="row">
                            <div className="col-md-4">
                                <div className="contact_block">
                                    <div className="contact_block_icon rollIn animated">
                                        <a href="https://www.google.com/maps/place/105+Osprey+Dr,+Portsmouth,+NH+03801/@43.08999,-70.7817797,17z/data=!3m1!4b1!4m5!3m4!1s0x89e2bfb10619868f:0x4dcdde00631eebfb!8m2!3d43.08999!4d-70.779591" target="_blank" rel="noreferrer">
                                            <span><i className="fas fa-home"></i></span>
                                        </a>
                                    </div>
                                    <span> 105 Osprey Drive <br/>
                                    Portsmouth, NH 03801 </span> 
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact_block">
                                    <div className="contact_block_icon icon2 rollIn animated">
                                        <a href="tel:603-502-8253">
                                            <span><i className="fas fa-phone"></i></span>
                                        </a>
                                    </div>
                                    <span> (603)-502-8253 </span> 
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact_block">
                                    <div className="contact_block_icon icon3 rollIn animated">
                                        <a href="mailto:jesaldmehta@gmail.com">
                                            <span><i className="fas fa-envelope-square"></i></span>
                                        </a>
                                    </div>
                                    <span>jesaldmehta@gmail.com </span>
                                </div>
                            </div>
                        </div>
                        {/* Github and LinkedIn profile links */}
                        <div className="row mt-5">
                            <div className="col-md-6">
                                <div className="contact-info-box fadeInLeft animated">
                                    <h3>Let's connect!</h3>
                                    <p>For inquiries or collaborations please contact me by phone/email or fill out the form alongside.</p>
                                </div>
                                <ul className="social-link animated bounceInUp">
                                    <li className="github ">
                                        <a href="https://github.com/JesalDM/" target="_blank" rel="noreferrer">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </li>
                                    <li className="linkedIn">
                                        <a href="https://www.linkedin.com/in/jesal-mehta-264bb2169/" target="_blank" rel="noreferrer">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                    </li>          
                                </ul>
                            </div>
                            <div className="col-md-6 fadeInRight animated">
                                {/* Form group input elements */}
                                 <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;