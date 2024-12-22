import buttonStyles from "./Button.module.css";

export default function Button({
  children,
  customStyle,
  action,
  className,
  type,
}) {
  return (
    <button
      type={type}
      onClick={action}
      className={`${buttonStyles.btn} ${className || ""}`}
      style={customStyle}
    >
      {children}
    </button>
  );
}
