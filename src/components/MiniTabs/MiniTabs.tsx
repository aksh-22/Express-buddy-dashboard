import { NavLink } from "react-router-dom";
import styles from "./MiniTabs.module.css";

type Props = {
  path: string;
  tabText: string;
};

export default function MiniTabs({ path, tabText }: Props) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${
          isActive
            ? `${styles.activeTab} ${styles.links}`
            : `${styles.inactiveTab} ${styles.links}`
        }`
      }
    >
      <span>{tabText}</span>
    </NavLink>
  );
}
