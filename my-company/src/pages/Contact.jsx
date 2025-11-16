import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setSubmitted(false);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    alert('Form submitted!');
  };

  const containerStyle = {
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(15, 23, 42, 0.06)',
    maxWidth: '640px'
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '12px',
    color: '#0f172a'
  };

  const inputStyle = {
    display: 'block',
    width: '100%',
    padding: '10px 12px',
    margin: '8px 0 14px',
    borderRadius: '10px',
    border: '1px solid #d1d5db',
    fontSize: '0.95rem'
  };
  
  const labelStyle = {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#374151'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical'
  };

  const buttonStyle = {
    padding: '10px 18px',
    borderRadius: '999px',
    border: 'none',
    backgroundColor: '#16a34a',
    color: '#ffffff',
    fontSize: '0.95rem',
    cursor: 'pointer',
    boxShadow: '0 5px 12px rgba(22, 163, 74, 0.35)'
  };

  const successStyle = {
    marginTop: '10px',
    fontSize: '0.9rem',
    color: '#16a34a'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      <p style={{ color: '#4b5563', marginBottom: '16px' }}>
        Have a question or want to work with us? Send us a message and we&apos;ll get back to you
        as soon as possible.
      </p>

      <form onSubmit={handleSubmit}>
        <label style={labelStyle} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label style={labelStyle} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label style={labelStyle} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={textareaStyle}
          required
        />

        <button type="submit" style={buttonStyle}>
          Send Message
        </button>

        {submitted && (
          <div style={successStyle}>
            Thank you, {formData.name || 'there'}! We&apos;ve received your message.
          </div>
        )}
      </form>
    </div>
  );
}
export default Contact;
