import classes from "./ToggleSwitch.module.css";

type Props = {
  toggle: boolean;
  onToggle: (data?: any) => void;
};

export default function ToggleSwitch({ toggle, onToggle }: Props) {
  return (
    <label className={classes.switch}>
      <input type="checkbox" checked={toggle} onChange={onToggle} />
      <span className={classes.slider} />
    </label>
  );
}
