import { ReactNode } from "react";

export interface SectionTitleProps {
  title: string;
  description: ReactNode;
  more?: boolean;
  centred?: boolean;
  href?: string;
}
