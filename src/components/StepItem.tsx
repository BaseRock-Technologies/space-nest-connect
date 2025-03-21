
import { ReactNode } from 'react';

interface StepItemProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export function StepItem({ number, title, description, icon }: StepItemProps) {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <div className="relative mb-6">
        <div className="number-circle animate-pulse-light">
          {number}
        </div>
        <div className="absolute top-0 right-0 -mr-2 -mt-2 text-primary">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-sm">{description}</p>
    </div>
  );
}
