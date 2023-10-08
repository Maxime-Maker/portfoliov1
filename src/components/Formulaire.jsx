import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Formulaire = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xrjxxxv',
        'template_wb0zoaj',
        form.current,
        'xQkRFnU38jMwwEOAe'
      )
      .then(
        (result) => {
          console.log(result.text);
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log(error.text);
        }
      );

    console.log(form.current);
  };

  return (
    <div className="form-container" id="contact">
      <h2>Envoyer moi un Mail</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="user_name">Nom</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default Formulaire;
