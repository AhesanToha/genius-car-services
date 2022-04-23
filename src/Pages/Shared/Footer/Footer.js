import React from "react";

const Footer = () => {
    let date = new Date()
    let year = date.getFullYear()
  return (
    <footer className="text-center mt-4 fw-bold">
      <p>&copy; copyright {year}</p>
    </footer>
  );
};

export default Footer;
