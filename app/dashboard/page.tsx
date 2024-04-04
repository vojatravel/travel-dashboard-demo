"use client"

import { Carousel } from "@molecules/carousel";
import styles from './dashboard.module.scss';


const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={`${styles.cardContainer}`}>
        <Carousel />
      </div>
    </div>
  );
};

export default Dashboard;