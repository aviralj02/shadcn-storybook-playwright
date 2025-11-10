"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes, MouseEvent, ReactNode, useState } from "react";
import { Button } from "./ui/button";

type ButtonSize = "sm" | "md" | "lg" | "xl";
type ButtonVariant = "primary" | "secondary" | "destructive" | "disabled";
type IconPosition = "leading" | "trailing";

type Props = {
  iconPosition?: IconPosition;

  /** Accepts LucideIcon reference only */
  icon?: LucideIcon;
  size?: ButtonSize;
  variant?: ButtonVariant;

  /** Stretches the button to fit parent's container width. Maximum width can be 388px */
  stretch?: boolean;

  onHover?: () => void;

  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md py-2 px-4 cursor-pointer w-fit leading-none font-medium transition-all ease-in-out disabled:cursor-not-allowed";

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-[10px]",
  md: "text-xs",
  lg: "text-sm",
  xl: "text-base",
};

const iconSizeStyles: Record<ButtonSize, string> = {
  sm: "!size-2.5",
  md: "!size-3",
  lg: "!size-3.5",
  xl: "!size-4",
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[#141414] border border-[#212626] text-[#FAFAFA]",
  secondary: "bg-[#00FF80] text-[#141414]",
  destructive: "bg-[#912018] text-[#FAFAFA]",
  disabled: "!bg-[#0C8D4D] !text-[#141414] !cursor-not-allowed",
};

const hoverBackgroundColor: Record<ButtonVariant, string> = {
  primary: "#292524",
  secondary: "#08C466",
  destructive: "#7A271A",
  disabled: "",
};

const BasicButton = ({
  size = "md",
  variant = "primary",
  icon,
  iconPosition = "leading",
  stretch = false,
  children,
  onHover,

  onClick,
  onMouseEnter,
  onMouseLeave,
  style,
  disabled,

  ...otherProps
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonVariant: ButtonVariant = disabled ? "disabled" : variant;

  const hoverBgColor =
    buttonVariant !== "disabled" && isHovered
      ? hoverBackgroundColor[buttonVariant]
      : undefined;

  const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    setIsHovered(true);
    onHover?.();
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    setIsHovered(false);
    onMouseLeave?.(e);
  };

  const isLeadingIcon = iconPosition === "leading";

  const isActuallyDisabled = buttonVariant === "disabled" || disabled;

  const IconComponent = icon ? icon : null;
  const iconEl = IconComponent && (
    <IconComponent
      data-testid={isLeadingIcon ? "leading-icon" : "trailing-icon"}
      className={cn(iconSizeStyles[size])}
    />
  );

  return (
    <Button
      className={cn(
        baseStyles,
        variantStyles[buttonVariant],
        sizeStyles[size],
        stretch && "max-w-[388px] w-full"
      )}
      style={{
        ...(style || {}),
        backgroundColor: hoverBgColor || style?.backgroundColor,
      }}
      onClick={isActuallyDisabled ? undefined : onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-disabled={isActuallyDisabled || disabled}
      {...otherProps}
    >
      {icon && isLeadingIcon && iconEl}

      <span>{children}</span>

      {icon && !isLeadingIcon && iconEl}
    </Button>
  );
};

export default BasicButton;
