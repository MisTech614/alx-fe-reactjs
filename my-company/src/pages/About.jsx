function About() {
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(15, 23, 42, 0.06)'
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '12px',
    color: '#0f172a'
  };

  const paragraphStyle = {
    fontSize: '1rem',
    color: '#4b5563',
    lineHeight: 1.7,
    marginBottom: '10px'
  };

  const listStyle = {
    marginTop: '12px',
    paddingLeft: '20px',
    color: '#4b5563'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Us</h1>
      <p style={paragraphStyle}>
        Our company has been providing top-notch services since 1990. We specialize in various
        fields including technology, marketing, and consultancy.
      </p>
      <p style={paragraphStyle}>
        Over the years, we&apos;ve worked with organizations of all sizes—from early-stage
        startups to global enterprises—helping them modernize operations, accelerate growth,
        and delight their customers.
      </p>
      <ul style={listStyle}>
        <li>35+ years of industry experience</li>
        <li>Cross-functional teams across technology, strategy, and design</li>
        <li>Client-centric approach focused on measurable outcomes</li>
      </ul>
    </div>
  );
}
export default About;
