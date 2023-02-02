import { ReactNode } from "react";
import {
  Button as ButtonCU,
  ButtonProps as ButtonPropsCU,
} from "@chakra-ui/react";
import { forwardRef } from "@chakra-ui/system";

interface ButtonProps extends ButtonPropsCU {
  children?: ReactNode;
}

const Button = forwardRef<ButtonProps, "button">((props: ButtonProps) => {
  return <ButtonCU {...props}>{props.children}</ButtonCU>;
});

export default Button;
