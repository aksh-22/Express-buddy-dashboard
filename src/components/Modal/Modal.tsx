import { ReactNode } from "react";
import classes from "./Modal.module.css";

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

export default function Modal({ isOpen, children }: Props) {
  if (!isOpen) return null;

  return <div className={classes.modalContainer}>{children}</div>;
}
