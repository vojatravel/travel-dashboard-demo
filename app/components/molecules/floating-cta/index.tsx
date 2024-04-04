"use client";

import styles from "./floating-cta.module.scss";
import Link from "next/link";
import { createCollection, readCollection } from "@lib/firebase/storage";

export const FloatingCta = () => {

// locations as a dynamic const to be used in the return statement
  

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
      </div>
    </div>
  );
};
