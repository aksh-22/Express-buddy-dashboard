import classes from "./Input.module.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  inputStyle: string;
}

export default function Input({ inputStyle, ...rest }: Props) {
  return <input className={`${classes[inputStyle]}`} {...rest} />;
}
