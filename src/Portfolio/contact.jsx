import "./contact.css";
import React, { useState } from 'react';

const Contact = () => {
    const[submitted,setFormstatus] = useState(false);

const onsubmit = () =>{
    setTimeout(() => {
        setFormstatus(true);
    },1000);

};
if(submitted){
    return (
        <>
        <div className="text1">Thank you!</div>
        <div className="text2">We'll be in touch soon.</div>
        </>
);
}

    return (
        <div className="container">
            <h2 className="Con">Hire me</h2>
            <p className="aboutme"> Don't hesitate to get in touch. I'm always happy to chat about software engineering projects and opportunities!</p>
            <div className="container-left">
            <form onSubmit={onsubmit}>
                <div className="first-div">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input className="form-control" type='text' id='name' required/>
                </div>
                <div className="first-div">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-control" type='email' id='email' required/>
                </div>
                <div className="text-div">
                    <label className="form-label1" htmlFor="message">Message</label>
                    <textarea className="form-control" rows="6"  id='message' required/>
                </div>
                <div>
                <button className="button" type="submit">Send</button>
                <a href="./CV_Sabrina_Sharmin (7).pdf" download className="download">Download CV</a>
                </div>
                
               
</form>
</div>
<div className="container-right">
    </div>
    </div>

    )
}
export default Contact;