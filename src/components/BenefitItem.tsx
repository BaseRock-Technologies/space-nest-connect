
import { ReactNode } from 'react';

interface BenefitItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <div className="benefit-item">
      <div className="shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
