"use client";
import classNames from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import Link, { LinkProps } from "next/link";

type Theme = "light" | "dark";

type Variant = "primary" | "secondary";

type DefaultCustomButtonProps = {
  children: ReactNode;
  theme?: Theme;
  variant?: Variant;
  fullWidth?: boolean;
};

type IsButton = { href?: undefined };
type IsLink = { href: string };

type ButtonType = DefaultCustomButtonProps &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type LinkButtonType = DefaultCustomButtonProps & LinkProps;

type CustomButton = (ButtonType & IsButton) | (LinkButtonType & IsLink);

/**
 * Button with additional props. Add href prop to turn it into a link button
 * @param theme -- Color theme of the button (Optional)
 * @param variant -- Style of the button (Optional)
 * @param fullWidth -- Width is 100% if true (Optional)
 * @param href -- If populated, button will become a Next Link (Optional)
 * @example ```
 * <Button theme="light" variant="primary">This is a button</Button>
 * <Button href={"#"}>This is a link</Button>
 * ```
 */
export function Button({
  children,
  theme = "light",
  variant = "primary",
  fullWidth = false,
  href,
  ...props
}: CustomButton) {
  const defaultStyles = "flex items-center justify-center px-4 py-2";

  const themes = {
    light: {
      primary: "",
      secondary: "",
    },
    dark: {
      primary: "",
      secondary: "",
    },
  };

  const width = {
    true: "w-full",
    false: "w-fit",
  };

  if (href !== undefined) {
    return (
      <Link
        className={classNames(
          width[fullWidth ? "true" : "false"],
          themes[theme][variant],
          defaultStyles,
        )}
        href={href}
        {...(props as Omit<LinkProps, "href">)}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        {...(props as DetailedHTMLProps<
          ButtonHTMLAttributes<HTMLButtonElement>,
          HTMLButtonElement
        >)}
        className={classNames(
          width[fullWidth ? "true" : "false"],
          themes[theme][variant],
          defaultStyles,
        )}
      >
        {children}
      </button>
    );
  }
}
