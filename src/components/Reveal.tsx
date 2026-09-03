"use client";

import { useReveal } from "@/lib/useReveal";
import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";

type RevealProps<T extends ElementType> = {
  as?: T;
  delay?: number;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export default function Reveal<T extends ElementType = "div">({
  as,
  delay = 0,
  children,
  className = "",
  ...rest
}: RevealProps<T>) {
  const Component = as || "div";
  const ref = useReveal<HTMLElement>();

  return (
    <Component
      ref={ref as never}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Component>
  );
}
