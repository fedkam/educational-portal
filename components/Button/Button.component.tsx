import { FC } from "react";
import { ButtonProps } from "./Button.types";
import cn from "classnames";
import styles from "./Button.module.css";
import Arrow from "assets/images/svg/Arrow.svg";

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  arrow = "none",
  className,
  children,
  ...otherProps
}) => {
  const isVisibleArrow = arrow !== "none";
  const buttonStyle = cn(styles.button, className, {
    [styles.primary]: variant === "primary",
    [styles.secondary]: variant === "secondary",
  });
  const arrowStyle = cn(styles.arrow, {
    [styles.arrowTop]: arrow === "top",
    [styles.arrowBottom]: arrow === "bottom",
    [styles.arrowLeft]: arrow === "left",
  });
  return (
    <button className={buttonStyle} {...otherProps}>
      {children}
      {isVisibleArrow && (
        <span className={arrowStyle}>
          <Arrow />
        </span>
      )}
    </button>
  );
};
