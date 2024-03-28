import Image from "next/image";
import styles from "./page.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/image.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  );
}

export default Home;
