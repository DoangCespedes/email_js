import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';  //si no tenemos esa dependencia installarla npm i @emailjs/browser'
import './App.css'
const App = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8lu6llw', 'template_r5qub8o', form.current, 'Sv1FponG5Anp4MxYU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
       <form ref={form} onSubmit={sendEmail} className='field'>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>

    </>
  )
}

export default App