// a simple floating cta button tsx code

import React from "react";

import styles from "./floating-cta.module.css";

export default function FloatingCta() {
  return (
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.cta}
    >
      By{" "}
      <img
        src="/vercel.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
      />
    </a>
  );
}