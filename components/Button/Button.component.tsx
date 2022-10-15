import { FC } from "react";
import { ButtonProps } from "./Button.types";
import cn from "classnames";
import styles from "./Button.module.css";

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  ...otherProps
}) => {
  const buttonStyle = cn(styles.button, className, {
    [styles.primary]: variant === "primary",
    [styles.secondary]: variant === "secondary",
  });
  return (
    <button className={buttonStyle} {...otherProps}>
      {children}
    </button>
  );
};
