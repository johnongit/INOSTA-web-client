import React from "react";
import { button } from "./index.css";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "secondary" | "text";
}

export const Button = (props: ButtonProps) => {
  const { type, ...rest } = props;
  return <button className={button} {...rest}></button>;
};
