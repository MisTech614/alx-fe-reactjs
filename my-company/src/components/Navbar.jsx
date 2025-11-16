import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const navbarStyle = {
    backgroundColor: '#0f172a',
    color: '#ffffff',
    padding: '12px 24px',
    boxShadow: '0 2px 8px rgba(15, 23, 42, 0.45)'
  };

  const navInnerStyle = {
    maxWidth: '960px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const logoStyle = {
    fontWeight: 700,
    fontSize: '1.25rem',
    letterSpacing: '0.04em'
  };

  const linksContainerStyle = {
    display: 'flex',
    gap: '16px'
  };

  const linkBaseStyle = {
    textDecoration: 'none',
    color: '#e5e7eb',
    fontSize: '0.95rem',
    padding: '6px 10px',
    borderRadius: '999px',
    transition: 'background-color 0.2s ease, color 0.2s ease'
  };

  const activeLinkStyle = {
    ...linkBaseStyle,
    backgroundColor: '#e5e7eb',
    color: '#0f172a',
    fontWeight: 600
  };

  const getLinkStyle = (path) =>
    location.pathname === path ? activeLinkStyle : linkBaseStyle;

  return (
    <header style={navbarStyle}>
      <div style={navInnerStyle}>
        <div style={logoStyle}>MyCompany</div>
        <nav style={linksContainerStyle}>
          <Link to="/" style={getLinkStyle('/')}>
            Home
          </Link>
          <Link to="/about" style={getLinkStyle('/about')}>
            About
          </Link>
          <Link to="/services" style={getLinkStyle('/services')}>
            Services
          </Link>
          <Link to="/contact" style={getLinkStyle('/contact')}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;

