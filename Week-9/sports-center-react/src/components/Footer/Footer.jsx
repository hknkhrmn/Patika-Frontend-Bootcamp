function Footer() {
  const informationLinks = [
    { text: 'About Us', href: '#' },
    { text: 'Classes', href: '#our-classes' },
    { text: 'Blog', href: '#' },
    { text: 'Contact', href: '#contact' }
  ];

  const helpfulLinks = [
    { text: 'Services', href: '#' },
    { text: 'Supports', href: '#' },
    { text: 'Terms & Condition', href: '#' },
    { text: 'Privacy Policy', href: '#' }
  ];

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <FooterTop />
        <FooterLinks informationLinks={informationLinks} helpfulLinks={helpfulLinks} />
      </div>
    </footer>
  );
}

function FooterTop() {
  return (
    <div className="footer-top">
      <div className="footer-logo">
        <img src="/assets/logo.png" alt="Powerfull Logo" />
      </div>
      <p className="footer-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos optio ipsam eligendi at facilis omnis modi molestias, maxime impedit saepe voluptate magni in animi, hic fugiat laudantium adipisci aliquam beatae.
      </p>
    </div>
  );
}

function FooterLinks({ informationLinks, helpfulLinks }) {
  return (
    <div className="footer-links-grid">
      <FooterColumn title="Information" links={informationLinks} />
      <FooterColumn title="Helpful Links" links={helpfulLinks} />
    </div>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="footer-column">
      <h3>{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;