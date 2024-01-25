import Lottie from "lottie-react";
import team from "src/assets/lottie/team.json";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Lottie animationData={team} loop={true} />
      <h2>Welcome to Express Buddy Valet !!!</h2>
    </div>
  );
}
