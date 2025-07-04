"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MobileNav.module.css";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";
export default function MobileNav({ handleClose }) {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/education", label: "Education", icon: <FaGraduationCap /> },
    { href: "/portfolio", label: "Portfolio", icon: <FaBriefcase /> },
    { href: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className={styles.navbar}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${styles.navlink} ${
            pathname === item.href ? styles.active : ""
          }`}
          onClick={handleClose}
        >
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.label}>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
