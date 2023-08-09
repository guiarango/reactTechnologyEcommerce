//STYLES
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${props.className} ${classes.button}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
