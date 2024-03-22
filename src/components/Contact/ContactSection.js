import { useRef } from "react";
import emailjs from '@emailjs/browser';
import "../Contact/ContactSection.css";
import "../Contact/ContactSectionResponsive.css";

export default function ContactSection(){

    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      
      const apiKey = process.env.REACT_APP_SECRET_KEY;
      const emailServiceIdKey = process.env.REACT_APP_EMAIL_SERVICE_KEY;
      const emailTemplateIdKey = process.env.REACT_APP_EMAIL_TEMPLATE_KEY;

      emailjs
        .sendForm(emailServiceIdKey, emailTemplateIdKey, form.current, {
          publicKey: apiKey,
        })
        .then(
          () => {
            console.log('SUCCESS!');
            e.target.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return (

  <section className="contact-section">
    <h1 className="contact-title">Contact Me</h1>
    <h4 className="contact-subtitle">Fell free to reach out me for any questions or  opportunities!</h4>
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="input-container">
            <label>Name</label>
            <input placeholder="Your Name" type="text" name="from_name" />
          </div>
          <div className="input-container">
            <label>Email</label>
            <input placeholder="Your Email" type="email" name="user_email" />
          </div>
          <div className="input-container">
            <label>Message</label>
            <textarea placeholder="Message" cols={25} rows={10} name="message" />
          </div>
          <button className="send-message-button" type="submit">Send</button>
        </form>
    </section>
      
  )
}