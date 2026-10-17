import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { NAV, AFRICA_LINKS, SITE } from '../content/site.js';
import { CtaButton } from './ui.jsx';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="brand" aria-label="Adanian Labs UK home">
          <img src="/logo.png" alt="Adanian Labs" width="150" height="44" />
          <span className="brand__tag">UK</span>
        </Link>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="site-nav" className={`nav ${open ? 'is-open' : ''}`} aria-label="Main">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end className="nav__link">
              {n.label}
            </NavLink>
          ))}
          <CtaButton kind="partner" />
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div>
          <img src="/logo.png" alt="Adanian Labs" width="150" height="44" />
          <p className="footer__tagline">{SITE.tagline}</p>
        </div>
        <nav aria-label="Adanian Labs Africa">
          <p className="footer__heading">Adanian Labs Africa</p>
          <ul>
            {AFRICA_LINKS.map((l) => (
              <li key={l.label}>
                {l.href.startsWith('/') ? <Link to={l.href}>{l.label}</Link> : <a href={l.href}>{l.label}</a>}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="container footer__base">{SITE.baseLine}</div>
    </footer>
  );
}

export default function Layout() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <ScrollManager />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
