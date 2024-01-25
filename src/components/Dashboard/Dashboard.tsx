import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <Outlet />
    </div>
  );
}
