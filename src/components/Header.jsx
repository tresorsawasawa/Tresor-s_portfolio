import React, { useState, createRef } from 'react';
import { Link } from 'react-scroll';
import { IconContext } from 'react-icons';
import {
  FaBars, FaTwitter, FaInstagram, FaAngellist,
} from 'react-icons/fa';
import {
  AiOutlineClose,
  AiFillLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai';

const Header = () => {
  const menu = createRef();
  const navbar = createRef();

  const links = [
    {
      id: 1,
      name: 'Home',
      to: 'home',
      class: '',
    },
    {
      id: 2,
      name: 'Portfolio',
      to: 'portfolio',
      class: '',
    },
    {
      id: 3,
      name: 'About',
      to: 'about',
      class: '',
    },
    {
      id: 4,
      name: 'Testimonials',
      to: 'testimonials',
      class: '',

    },
    {
      id: 5,
      name: 'contacts',
      to: 'contacts',
      class: '',
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleShowMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleHover = (link) => {
    links.map((item) => {
      if (item.id === link.id) {
        item.class = 'focusOut focused clickable';
      } else {
        item.class = 'focusOut clickable';
      }
      return item;
    });
  };

  const handleHoverOut = () => {
    console.log('Item hovereout');
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
              <h1>
                Tresor
                <span className="pink_color">.</span>
              </h1>
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
            <li className="menu_text">
              <h2>MENU</h2>
            </li>

            {links.map((link, index) => (
              <li key={link.id} className="nav_item">
                <Link
                  to={link.to}
                  spy
                  smooth
                  duration={500}
                  delay={800}
                  key={link.id}
                  onClick={() => handleShowMenu()}
                  onMouseEnter={() => handleHover(link)}
                  onMouseLeave={() => handleHoverOut(link)}
                  className={link.class}
                >
                  <span>{link.name}</span>
                  <span className="num">
                    0
                    {index + 1}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="contacts_container">
            <div className="contacts_text">
              <span className="email">tresorsawasawa@gmail.com</span>
              <br />
              <span>+(250) 786 330 283</span>
              <br />
              <span>Kigali Rwanda, KG 794 ST</span>
            </div>

            <div className="contact-details-icon-wrapper">
              <ul className="contact-icon-item">
                <li>
                  <a
                    href="https://github.com/tresorsawasawa"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <IconContext.Provider
                      value={{ className: 'header-links-icon' }}
                    >
                      <AiOutlineGithub />
                    </IconContext.Provider>
                  </a>
                </li>

                <li>
                  <a
                    href="https://angel.co/u/tresor-sawasawa"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <IconContext.Provider
                      value={{ className: 'header-links-icon' }}
                    >
                      <FaAngellist />
                    </IconContext.Provider>
                  </a>
                </li>

                <li>
                  <a href="https://twitter.com/tresorsawasawa" target="blank">
                    <IconContext.Provider
                      value={{ className: 'header-links-icon' }}
                    >
                      <FaTwitter />
                    </IconContext.Provider>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/tresorsawasawa/"
                    target="blank"
                  >
                    <IconContext.Provider
                      value={{ className: 'header-links-icon' }}
                    >
                      <FaInstagram />
                    </IconContext.Provider>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/tresor-sawasawa/"
                    target="blank"
                  >
                    <IconContext.Provider
                      value={{ className: 'header-links-icon' }}
                    >
                      <AiFillLinkedin />
                    </IconContext.Provider>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
