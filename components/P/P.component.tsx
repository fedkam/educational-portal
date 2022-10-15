import { FC } from "react";
import { PProps } from "./P.types";
import cn from "classnames";
import styles from "./P.module.css";

export const P: FC<PProps> = ({ size, className, children, ...otherProps }) => {
  const pStyle = cn(styles.p, className, {
    [styles.s]: size === "s",
    [styles.m]: size === "m",
    [styles.l]: size === "l",
  });
  return (
    <p className={pStyle} {...otherProps}>
      {children}
    </p>
  );
};
