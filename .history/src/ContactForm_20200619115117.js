import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import TextareaAutosize from 'react-autosize-textarea';
import Col from 'react-bootstrap/Col';
import * as emailjs from 'emailjs-com';


const ContactForm = () => {

    const footerText = "Send us your message below and we'll get back to you as soon as we can!";
    const disclaimer = "* DESCO respects your privacy and will never share your info without your permission."

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');  
    const [name, setName] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [buttonText, setButtonText] = useState('Send it!');
    const [buttonColor, setButtonColor] = useState('outline-light');

    const handleSetName = (e) => {
        setName(e.target.value);
    }

    const handleSetEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleSetMessage = (e) => {
        setMessage(e.target.value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        let templateParams= {
            senderName: name,
            senderEmail: email,
            senderMessage: message
        }

        emailjs.send(
            'gmail',
            'template_LPT4DwVi',
            templateParams,
            'user_gDmbitL08aVbHwdMtqF7M'
        )
        setButtonText('Success!');
    }



    return(
        <Col sm={6} lg={4} className="mr-5">
                <h1 className="display-6 mb-1 text-white">Contact Us!</h1>
                <p className="lead text-white footer-text">{footerText}</p>
                <input type="text" id="name" className="form-control mb-2" placeholder="Name" onChange={handleSetName}></input>
                <input type="text" id="email" className="form-control" placeholder="Email" onChange={handleSetEmail}></input>
                <TextareaAutosize className="form-control text-area" placeholder="Your Message" onChange={handleSetMessage}></TextareaAutosize>
                <br/>
                <Button variant={buttonColor} onClick={submitForm}>{buttonText}</Button>
                <p className="disclaimer text-white mt-3">{disclaimer}</p>
        </Col>
    );
}

export default ContactForm;