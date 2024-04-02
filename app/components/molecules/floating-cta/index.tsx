"use client";

import styles from "./floating-cta.module.scss";
import Link from "next/link";
import { createCollection } from "../../../../lib/firebase/storage";

export const FloatingCta = () => {
  const collection = () => {
    createCollection("locations", "Madeira", {
      title: "Madeira Island",
      description: "The best island in the world",
    });
  };
  return (
    <div className={styles.floatingCta}>
      <div className={styles.container}>
        <div className={`${styles.destination} ${styles.item}`}>
          Travel Destination
        </div>
        <div className={`${styles.days} ${styles.item}`}>Number of Days</div>
        <div className={`${styles.price} ${styles.item}`}>Total Price</div>
        <Link
          className="btn btn btn-outline-primary btn-lg"
          role="button"
          href={"/dashboard"}
        >
          Primary
        </Link>
        <button onClick={collection}></button>
      </div>
    </div>
  );
};
