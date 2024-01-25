import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnStyle: string;
  tabStyle: string;
  children: ReactNode;
}

export default function Button({
  btnStyle,
  tabStyle,
  children,
  ...rest
}: Props) {
  return (
    <button className={`${styles[btnStyle]} ${styles[tabStyle]}`} {...rest}>
      {children}
    </button>
  );
}
