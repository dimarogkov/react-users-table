import { LucideProps } from 'lucide-react';

export interface ISocial {
    id: number;
    href: string;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>;
}
