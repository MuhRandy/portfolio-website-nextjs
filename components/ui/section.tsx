import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  children: ReactNode;
  bgColor?: "white" | "slate" | "black";
  className?: ClassValue;
  height?: number;
  id: string;
};

type H1Props = Omit<SectionProps, "bgColor" | "id">;

type TextProps = Omit<H1Props, "id">;

function Section({
  children,
  bgColor = "white",
  className,
  height = 80,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
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
    <motion.h1
      initial={{ opacity: 0, bottom: "-20px" }}
      whileInView={{ opacity: 1, bottom: "0px" }}
      transition={{ duration: 2, type: "spring" }}
      className={cn("text-4xl font-bold self-start relative", className)}
    >
      {children}
    </motion.h1>
  );
}

function SectionText({ children, className }: TextProps) {
  return (
    <motion.p
      initial={{ opacity: 0, bottom: "-20px" }}
      whileInView={{ opacity: 1, bottom: "0px" }}
      transition={{ duration: 2, type: "spring" }}
      className={cn("text-justify relative", className)}
    >
      {children}
    </motion.p>
  );
}

export { Section, SectionTitle, SectionText };
