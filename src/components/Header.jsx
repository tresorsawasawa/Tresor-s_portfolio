import React, { useState, createRef } from 'react';
// import { IconContext } from 'react-icons';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const menu = createRef();
  const navbar = createRef();

  const links = [
    {
      id: 1,
      name: 'Home',
      to: 'home',
    },
    {
      id: 2,
      name: 'Portfolio',
      to: 'portfolio',
    },
    {
      id: 3,
      name: 'About',
      to: 'about',
    },
    {
      id: 4,
      name: 'Testimonials',
      to: 'testimonials',
    },
    {
      id: 5,
      name: 'contacts',
      to: 'contacts',
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleShowLinks = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header_container" ref={menu}>
      <nav>
        <div className="logo">
          <Link
            to="home"
            spy
            smooth
            duration={500}
            delay={800}
            className="logo-area"
          >
            Tresor
            <span>.</span>
          </Link>
        </div>

        <div
          onClick={() => handleShowLinks()}
          className={isOpen ? 'hamburger open' : 'hamburger'}
          aria-hidden="true"
        >
          <FaBars />
        </div>
      </nav>

      <nav className="nav_container" ref={navbar}>
        <div
          onClick={() => handleCloseMenu()}
          className={isOpen ? 'closeButton open' : 'closeButton'}
          aria-hidden="true"
        >
          <AiOutlineClose />
        </div>
        <ul className={isOpen ? 'nav_list open' : 'nav_list'}>
          {links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.to}
                spy
                smooth
                duration={500}
                delay={800}
                key={link.id}
                className="clickable"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
