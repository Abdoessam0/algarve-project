import * as React from "react";
import Link from "next/link";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "default";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: React.ReactNode;
}

type ButtonAsButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsAnchorProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md hover:from-blue-700 hover:to-indigo-700 focus-visible:ring-blue-500",
  secondary:
    "bg-white text-gray-900 border border-gray-200 shadow-sm hover:bg-gray-50 focus-visible:ring-gray-400 dark:bg-gray-800 dark:text-white dark:border-gray-700",
  ghost: "bg-transparent text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-900/60",
  outline:
    "border border-current bg-transparent text-current hover:bg-current/10 dark:hover:bg-white/10",
  default:
    "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md hover:from-blue-700 hover:to-indigo-700 focus-visible:ring-blue-500",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-sm min-h-[36px]",
  md: "px-4 py-2 text-base min-h-[44px]",
  lg: "px-5 py-3 text-lg min-h-[48px]",
};

export function Button(rawProps: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    as = "button",
    ...rest
  } = rawProps as ButtonProps & { as?: "button" | "a" };

  const classes = clsx(
    "inline-flex items-center justify-center rounded-xl2 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (as === "a") {
    const { href, ...anchorRest } = rest as ButtonAsAnchorProps;
    return (
      <Link
        href={href}
        className={classes}
        {...(anchorRest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  const buttonRest = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}

export default Button;
