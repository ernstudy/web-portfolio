"use client";

import { useState } from "react";
import MobileNav from "./MovileNav";
import styles from "./MobileMenuToggle.module.css";
import { FaBars } from "react-icons/fa";

export default function MobileMenuToggle() {
  const [showNav, setShowNav] = useState(false);

  const handleToggle = () => setShowNav(true);
  const handleClose = () => setShowNav(false);

  return (
    <div className={styles.container}>
      {!showNav && (
        <button className={styles.menuButton} onClick={handleToggle}>
          <FaBars className={styles.icon} />
        </button>
      )}

      {showNav && (
        <>
          <MobileNav handleClose={handleClose} />
        </>
      )}
    </div>
  );
}
