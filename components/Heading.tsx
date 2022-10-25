import { HeadingType } from "../types";
import { FC, ReactNode, ComponentType, HTMLAttributes } from "react";

export const Heading: FC<HeadingType> = ({ tag, text }) => {
  const Tag: any = tag || "h1";
  return <Tag>{text}</Tag>;
};
