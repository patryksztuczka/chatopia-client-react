import { ReactNode } from 'react';

export const TypographyMuted = ({ children }: { children: ReactNode }) => {
  return <p className="text-muted-foreground text-sm">{children}</p>;
};
