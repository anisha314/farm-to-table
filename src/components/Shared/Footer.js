import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">Farm-to-Table</div>
        <div className="footer-right">&copy; {new Date().getFullYear()} Farm-to-Table. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
