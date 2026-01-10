import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const links = [
    { href: '#powerfull', text: 'Home' },
    { href: '#our-classes', text: 'Classes' },
    { href: '#trainer', text: 'Trainer' },
    { href: '#review', text: 'Review' },
    { href: '#contact', text: 'Contact' }
  ];

  return (
    <header className="navbar">
      <Logo />
      <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <NavLinks links={links} isOpen={isMenuOpen} closeMenu={closeMenu} />
    </header>
  );
}

function Logo() {
  return (
    <div className="logo">
      <img src="/assets/logo.png" alt="Sports Center Logo" />
    </div>
  );
}

function HamburgerMenu({ isOpen, toggleMenu }) {
  return (
    <div 
      className={`hamburger ${isOpen ? 'active' : ''}`}
      onClick={toggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

function NavLinks({ links, isOpen, closeMenu }) {
  return (
    <nav className={isOpen ? 'active' : ''}>
      {links.map((link, index) => (
        <a key={index} href={link.href} onClick={closeMenu}>
          {link.text}
        </a>
      ))}
      <a href="#" className="nav-button" onClick={closeMenu}>
        JOIN US
      </a>
    </nav>
  );
}

export default Navbar;