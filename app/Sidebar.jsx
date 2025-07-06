"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";
import Image from "next/image";
import profile from "../public/images/profile/profile.png";
import Footer from "@/components/Footer/Footer";
import Profile from "@/components/Profile/Profile";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/education/", label: "Education", icon: <FaGraduationCap /> },
    { href: "/portfolio/", label: "Portfolio", icon: <FaBriefcase /> },
    { href: "/contact/", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      <div className={styles.wrapper}>
        <Profile />

        {/* Navigation items */}
        <nav>
          <ul className={styles.nav}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.link} ${
                    pathname === item.href ? styles.active : ""
                  }`}
                >
                  <span className={styles.icon}>{item.icon}</span>
                  <span className={styles.text}>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="ml-7 ">
            <Footer />
          </div>
        </nav>
      </div>
    </>
  );
}
