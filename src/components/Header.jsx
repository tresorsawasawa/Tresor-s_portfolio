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

  const handleShowMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header_container" ref={menu}>
      <div className="header_content">
        <nav className="logo_hamb_container">
          <div className="logo clickable">
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
            onClick={() => handleShowMenu()}
            className={
              isOpen
                ? 'hamburger_container open clickable'
                : 'hamburger_container clickable'
            }
            aria-hidden="true"
          >
            <FaBars className="hamburger" />
          </div>
        </nav>

        <nav
          className={
            isOpen
              ? 'nav_container menu_container open close'
              : 'menu_container remove'
          }
          ref={navbar}
        >
          <div
            onClick={() => handleCloseMenu()}
            className={
              isOpen
                ? 'closeMenu_container open clickable'
                : 'closeMenu_container clickable'
            }
            aria-hidden="true"
          >
            <AiOutlineClose className="closeMenu" />
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
                  onClick={() => handleShowMenu()}
                  className={
                    isOpen ? 'nav_link clickable' : 'menu_container remove'
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
