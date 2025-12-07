import { ReactNode } from "react";

export interface SectionTitleProps {
  title: string;
  description: ReactNode;
  more?: boolean;
  more2?: boolean;
  centred?: boolean;
  href?: string;
}
