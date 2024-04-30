import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Data } from "./type";

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const getDataJSON = async (getDataHandler: (data: Data) => void) => {
  const response = await fetch("/data.json");
  const data = await response.json();

  getDataHandler(data);
};

export { cn, getDataJSON };
