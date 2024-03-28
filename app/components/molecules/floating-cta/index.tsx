import styles from "./floating-cta.module.scss";
import Link from "next/link";

export const FloatingCta = () => {
  return (
    <div className={styles.floatingCta}>
      <div className={styles.container}>
        <div className={styles.destination}>Travel Destination</div>
        <div className={styles.days}>Number of Days</div>
        <div className={styles.price}>Total Price</div>
        <Link className="btn btn btn-outline-primary btn-lg" role="button" href={"/dashboard"}>Primary
        </Link>
      </div>
    </div>
  );
};
