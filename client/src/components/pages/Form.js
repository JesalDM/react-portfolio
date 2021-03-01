import React from 'react';

function Form(){
    return(
        <form>
            <div className="row">
                <div className="col-md-12 form-group">
                {/* Name input field */}
                    <label for="fullName">Name*</label>
                    <br/>
                    <input type="text" className="form-control" id="fullName" placeholder="Your Name" required />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 form-group">
                {/* Email address input field */}
                <label for="user-email">Email*</label>
                <br/>
                <input type="email" className="form-control" id="user-email" placeholder="Your E-mail" required />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 form-group">
                {/* Message input box */}
                <label for="messageText">Message*</label>
                <br/>
                <textarea className="form-control" id="messageText" rows="4" placeholder="Your message" required></textarea>
                </div>
            </div>
            <div>
                {/* Button to submit the contact form details */}
                <button type="submit" value="Submit" className="input-btn btn" id="contactBtn">Submit</button>
            </div>
        </form>
    )
}

export default Form;


