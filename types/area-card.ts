export interface AreaCardProps {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  size: 'large' | 'small';
  position: {
    row: number;
    col: number;
    rowSpan?: number;
    colSpan?: number;
  };
}