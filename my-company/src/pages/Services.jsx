function Services() {
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

  const listStyle = {
    listStyle: 'none',
    paddingLeft: 0,
    marginTop: '16px'
  };

  const itemStyle = {
    padding: '12px 14px',
    marginBottom: '10px',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
    backgroundColor: '#f9fafb',
    color: '#374151'
  };

  const labelStyle = {
    fontWeight: 600,
    display: 'block',
    marginBottom: '4px',
    color: '#111827'
  };

  const descriptionStyle = {
    fontSize: '0.95rem',
    lineHeight: 1.5
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Our Services</h1>
      <ul style={listStyle}>
        <li style={itemStyle}>
          <span style={labelStyle}>Technology Consulting</span>
          <span style={descriptionStyle}>
            We help you define your digital roadmap, choose the right tools, and build scalable,
            secure technology solutions tailored to your business.
          </span>
        </li>
        <li style={itemStyle}>
          <span style={labelStyle}>Market Analysis</span>
          <span style={descriptionStyle}>
            Data-driven insights into your industry, competitors, and customers so you can make
            informed strategic decisions with confidence.
          </span>
        </li>
        <li style={itemStyle}>
          <span style={labelStyle}>Product Development</span>
          <span style={descriptionStyle}>
            End-to-end product development—from ideation and prototyping to launch and continuous
            improvement.
          </span>
        </li>
      </ul>
    </div>
  );
}
export default Services;
