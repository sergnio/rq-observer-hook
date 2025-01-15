"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link
          href="/"
          style={pathname === "/" ? styles.activeLink : styles.link}
        >
          Home
        </Link>
        <Link
          href="/other-route"
          style={pathname === "/other-route" ? styles.activeLink : styles.link}
        >
          Other Route
        </Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    padding: "1rem",
    backgroundColor: "#333",
    color: "white",
    display: "flex",
    justifyContent: "center",
  },
  nav: {
    display: "flex",
    gap: "1rem",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "1rem",
    fontWeight: "normal",
  },
  activeLink: {
    textDecoration: "none",
    color: "#ff6347",
    fontSize: "1rem",
    fontWeight: "bold",
  },
};
