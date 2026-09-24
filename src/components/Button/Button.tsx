import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  disabled?: boolean;
  describedBy?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "disabled">;

export function Button({
  children,
  href,
  disabled = false,
  describedBy,
  className,
  onClick,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = [styles.button, disabled ? styles.disabled : "", className]
    .filter(Boolean)
    .join(" ");

  const content = <span>{children}</span>;

  if (!disabled && href) {
    return (
      <a className={classes} href={href} aria-describedby={describedBy}>
        {content}
      </a>
    );
  }

  return (
    <button
      {...props}
      type={type}
      className={classes}
      aria-disabled={disabled || undefined}
      aria-describedby={describedBy}
      onClick={(event) => {
        if (disabled) {
          event.preventDefault();
          return;
        }

        onClick?.(event);
      }}
    >
      {content}
    </button>
  );
}
