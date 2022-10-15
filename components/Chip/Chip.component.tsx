import { FC } from "react";
import { ChipProps } from "./Chip.types";
import cn from "classnames";
import styles from "./Chip.module.css";

export const Chip: FC<ChipProps> = ({
  size = "m",
  color = "primary",
  href,
  className,
  children,
  ...otherProps
}) => {
  const ChipStyle = cn(
    styles.chep,
    className,
    {
      [styles.s]: size === "s",
      [styles.m]: size === "m",
    },
    {
      [styles.primary]: color === "primary",
      [styles.secondary]: color === "secondary",
      [styles.green]: color === "green",
      [styles.grey]: color === "grey",
      [styles.red]: color === "red",
    }
  );
  return (
    <div className={ChipStyle} {...otherProps}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
