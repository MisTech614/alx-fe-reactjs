function Home() {
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(15, 23, 42, 0.06)',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1.3fr)',
    gap: '24px',
    alignItems: 'center'
  };

  const headingStyle = {
    fontSize: '2.2rem',
    marginBottom: '12px',
    color: '#0f172a'
  };

  const paragraphStyle = {
    fontSize: '1rem',
    color: '#4b5563',
    marginBottom: '16px',
    lineHeight: 1.6
  };

  const buttonStyle = {
    padding: '10px 18px',
    borderRadius: '999px',
    border: 'none',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    fontSize: '0.95rem',
    cursor: 'pointer',
    boxShadow: '0 5px 12px rgba(37, 99, 235, 0.35)'
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '16px',
    objectFit: 'cover'
  };

  return (
    <div style={containerStyle}>
      <div>
        <h1 style={headingStyle}>Welcome to Our Company</h1>
        <p style={paragraphStyle}>
          We are dedicated to delivering excellence in all our services. Our team of experts
          partners with you to transform your business, unlock growth opportunities, and
          build long-term value.
        </p>
        <button style={buttonStyle}>Explore Our Services</button>
      </div>
      <div>
        <img
          style={imageStyle}
          src="https://images.pexels.com/photos/1181555/pexels-photo-1181555.jpeg"
          alt="Team working together"
        />
      </div>
    </div>
  );
}
export default Home;
