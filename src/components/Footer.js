import React from "react";
import "../styles/footer.css"; // Ensure your footer CSS file is correctly imported

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <p>
          Developed by{" "}
          <a
            href="https://shovanraut.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shovan Raut
          </a>{" "}
          &{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Narayan Khanal
          </a>
        </p>
      </div>
      <div className="footer-right">
        <p>© {new Date().getFullYear()} Caldwell Robotics</p>
      </div>
    </footer>
  );
};

export default Footer;