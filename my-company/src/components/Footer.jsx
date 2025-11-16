function Footer() {
  const footerStyle = {
    padding: '16px 24px',
    backgroundColor: '#0b1220',
    color: '#9ca3af',
    marginTop: '32px'
  };

  const innerStyle = {
    maxWidth: '960px',
    margin: '0 auto',
    fontSize: '0.85rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#9ca3af'
  };

  return (
    <footer style={footerStyle}>
      <div style={innerStyle}>
        <span>© {new Date().getFullYear()} MyCompany. All rights reserved.</span>
        <a href="#top" style={linkStyle}>
          Back to top
        </a>
      </div>
    </footer>
  );
}
export default Footer;

  