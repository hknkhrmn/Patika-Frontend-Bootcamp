import { useState } from 'react';

function Contact() {
  return (
    <section className="contact" id="contact">
      <ContactHeader />
      <div className="contact-container">
        <ContactForm />
        <MapContainer />
      </div>
    </section>
  );
}

function ContactHeader() {
  return (
    <div className="contact-header">
      <h1>CONTACT US</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore culpa facilis iusto sint repellat, omnis
        deserunt veniam incidunt voluptates vel.
      </p>
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="contact-form">
      <div className="contact-info">
        <div className="info-item">
          <h3 style={{ fontWeight: 'lighter' }}>Mobile Number</h3>
          <p style={{ fontWeight: 'lighter', color: '#4e4e4e' }}>+135 773 321 4442</p>
        </div>
        <div className="info-item">
          <h3 style={{ fontWeight: 'lighter' }}>Email Address</h3>
          <p style={{ fontWeight: 'lighter', color: '#4e4e4e' }}>demo@demo.com</p>
        </div>
      </div>
      <h2 style={{ fontWeight: 'lighter' }}>Make An Appointment</h2>
      <div>
        <input 
          type="text" 
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="email" 
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea 
          placeholder="Your Message" 
          rows="6"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}

function MapContainer() {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.483483467664!2d-70.5594!3d41.4556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ad45bbcb%3A0xf05e4d125e82af10!2sDos%20Mas!5e0!3m2!1str!2str!4v1700000000000"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Contact;