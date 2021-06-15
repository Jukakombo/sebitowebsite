import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
const NavLinksG = () => {
  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className="main-menu__list one-page-scroll-menu">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          About
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="services"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          Services
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="project"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          Location
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="team"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          Team
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          Contact
        </ScrollLink>
      </li>
      <li className="dropdown">
        <ScrollLink
          activeClass="current"
          to="blog"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          Products
        </ScrollLink>
        <button className="dropdown-btn" onClick={handleDropdownStatus}>
          <i className="fa fa-angle-right"></i>
        </button>
        <ul className="dropdown-list">
          <li>
            <Link href="/buildingmaterials">
              <a>Building-Materials</a>
            </Link>
          </li>
          <li>
            <Link href="/fooditems">
              <a>Food-Items</a>
            </Link>
          </li>
          <li>
            <Link href="/nonefooditems">
              <a>None-Food-Items</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <ScrollLink
          activeClass="current"
          to="blog"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          Blog
        </ScrollLink>
        <button className="dropdown-btn" onClick={handleDropdownStatus}>
          <i className="fa fa-angle-right"></i>
        </button>
        <ul className="dropdown-list">
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/blog-details">
              <a>Blog Details</a>
            </Link>
          </li>
          <li>
            <Link href="/admin">
              <a href="www.facebook.com">Admin</a>
            </Link>
          </li>
        </ul>
      </li>

      <li className="search-btn search-opener">
        <a href="#">
          <i className="fa fa-search"></i>
        </a>
      </li>
    </ul>
  );
};

export default NavLinksG;