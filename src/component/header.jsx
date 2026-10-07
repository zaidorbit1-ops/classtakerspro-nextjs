"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const headerStyle = `
:root {
  --primary-blue: #0052cc;
  --dark-blue: #0747a6;
  --text-dark: #172b4d;
  --text-light: #505f79;
  --border-color: #dfe1e6;
  --title-font: "League Spartan", sans-serif;
}

.header {
  width: 100%;
  height: 100px !important;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
  transition: box-shadow 0.3s ease;
}

.navbar {
  padding-top: 12px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.logo img {

  height: 70px;
  width: auto;
  display: block;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1002;
}

.menu-toggle span {
  display: block;
  height: 2.5px;
  width: 24px;
  background: var(--text-dark);
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  margin: 3px 0;
}

.menu-toggle.open span {
  background: var(--text-dark);
}

.menu-toggle.open span:nth-child(1) {
  transform: translateY(8.5px) rotate(45deg);
}
.menu-toggle.open span:nth-child(2) {
  opacity: 0;
}
.menu-toggle.open span:nth-child(3) {
  transform: translateY(-8.5px) rotate(-45deg);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-links ul {
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-light);
  font-family: var(--title-font);
  font-weight: 600;
  font-size: 17px;
  transition: color 0.3s ease;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--primary-blue);
}

.cta-btn {
  background: var(--primary-blue);
  color: #fff !important;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-btn:hover {
  background: var(--dark-blue);
  color: white !important;
}

@media (max-width: 991px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.35s ease, visibility 0.35s ease;
    z-index: 1001;
  }

  .nav-links.active {
    opacity: 1;
    visibility: visible;
  }

  .nav-links ul {
    flex-direction: column;
    text-align: center;
    gap: 25px;
  }

  .nav-links ul a {
    color: var(--text-dark);
    font-family: var(--title-font);
    font-size: 28px;
    font-weight: 600;
  }

  .nav-links .cta-btn {
    margin-top: 30px;
  }
}
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const navLink = (href, label) => (
    <Link
      href={href}
      onClick={closeMenu}
      className={pathname === href ? "active" : undefined}
      aria-current={pathname === href ? "page" : undefined}
    >
      {label}
    </Link>
  );

  return (
    <>
      <style>{headerStyle}</style>
      <header className="header">
        <div className="navbar">
          <div className="logo">
            <Link href="/" onClick={closeMenu}>
              <img src="/assets/images/logo-class.png" alt="Class Takers Pro" />
            </Link>
          </div>

          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            <ul>
              <li>{navLink("/", "Home")}</li>
              <li>{navLink("/online-class", "Online Class")}</li>
              <li>{navLink("/online-exams", "Online Exams")}</li>
              <li>{navLink("/online-course", "Online Course")}</li>
              <li>{navLink("/online-assignment", "Online Assignment")}</li>
            </ul>
            <Link href="/contact" className={`cta-btn ${pathname === "/contact" ? "active" : ""}`} onClick={closeMenu}>
              Get Started
            </Link>
          </nav>
          
          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={handleToggle}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
