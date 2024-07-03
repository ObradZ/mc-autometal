import { ReactNode } from 'react';

export interface MainLinkProps {
    href: string;
    children: ReactNode;
    superStyles?: string;
    shade: 'light' | 'dark';
    onClick?: () => void;
}
