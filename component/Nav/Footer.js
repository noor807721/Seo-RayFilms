import React from "react";
import  Link  from "next/link";


const Footer = () => {
  return (
    <>
    <footer className="Footer">
      <div className="social">
        <a href="https://telegram.me/IMDBHDFILM" target="blank" >
          <i className="fab fa-telegram"></i>
        </a>
        <a href="https://www.instagram.com/cartoonmoviesnews/" target="blank" >
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/people/Ray-Admin/100078741858256/" target="blank" >
          <i className="fab fa-facebook"></i>
        </a>
      </div>
      <ul className="list-inline">
        <li className="list-inline-item">
          <Link href="/">Home</Link>
        </li>
        <li className="list-inline-item">
          <Link href="/page/support">Contact Us</Link>
        </li>
        <li className="list-inline-item">
          <Link href="/page/about">About</Link>
        </li>
        <li className="list-inline-item">
          <Link href="/page/faq">Faq</Link>
        </li>
        <li className="list-inline-item">
          <Link href="/page/privacy">Privacy Policy</Link>
        </li>
      </ul>
      <p className="copyright">RayFilms © 2022</p>
    </footer>
    </>
  );
};

export default Footer;
