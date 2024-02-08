import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import classes from "./RoleFunctionBox.module.css";

type Props = {
  count: string;
  role: boolean;
  onChange: () => void;
  task: string;
};

export default function RoleFunctionBox({
  count,
  task,
  onChange,
  role,
}: Props) {
  return (
    <>
      <div className={classes.functionBox}>
        <p className={classes.boxPara}>
          {count}. {task}
        </p>
        <span style={{ marginLeft: "1rem" }}>
          <ToggleSwitch toggle={role} onToggle={onChange} />{" "}
          <span className={classes.buttonText}>{role ? "YES" : "NO"}</span>
        </span>
      </div>
      <hr className={classes.rule} />
    </>
  );
}
