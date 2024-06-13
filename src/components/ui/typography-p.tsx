import { ReactNode } from 'react';

export const TypographyP = ({ children }: { children: ReactNode }) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
};
