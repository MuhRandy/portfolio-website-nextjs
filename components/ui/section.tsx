import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  children: ReactNode;
  bgColor?: "white" | "slate" | "black";
  className?: ClassValue;
  height?: number;
};

type H1Props = Omit<SectionProps, "bgColor">;

type TextProps = H1Props;

function Section({
  children,
  bgColor = "white",
  className,
  height = 80,
}: SectionProps) {
  return (
    <section
      className={cn(
        `flex min-h-[${height}dvh] items-center justify-center py-10`,
        {
          "bg-slate-200": bgColor === "slate",
        }
      )}
    >
      <div
        className={cn(
          "flex flex-col justify-center items-center max-w-[90vw] lg:max-w-[80vw]",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}

function SectionTitle({ children, className }: H1Props) {
  return (
    <h1 className={cn("text-4xl font-bold self-start", className)}>
      {children}
    </h1>
  );
}

function SectionText({ children, className }: TextProps) {
  return <p className={cn("text-justify", className)}>{children}</p>;
}

export { Section, SectionTitle, SectionText };
