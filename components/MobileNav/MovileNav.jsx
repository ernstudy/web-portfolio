"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MobileNav.module.css";
import {
  FaHome,
  FaBriefcase,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";
export default function MobileNav() {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let prevScroll = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > prevScroll && currentScroll > 50) {
        // Scrolling down
        setShowNav(false);
      } else {
        // Scrolling up
        setShowNav(true);
      }
      prevScroll = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/education", label: "Education", icon: <FaGraduationCap /> },
    { href: "/portfolio", label: "Portfolio", icon: <FaBriefcase /> },
    { href: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className={`${styles.navbar} ${showNav ? styles.visible : styles.hidden}`}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${styles.navlink} ${
            pathname === item.href ? styles.active : ""
          }`}
          // onClick={handleClose}
        >
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.label}>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
