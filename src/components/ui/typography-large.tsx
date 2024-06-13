import { ReactNode } from 'react';

export const TypographyLarge = ({ children }: { children: ReactNode }) => {
  return <div className="text-lg font-semibold">{children}</div>;
};
