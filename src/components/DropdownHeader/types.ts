import { StringifyOptions } from 'querystring';

export interface DropdownHeaderProps {
    title: string;
    links: { name: string; path: string; subsection: { path: string; name: string }[] }[];
    mainHeaderClose: () => void;
    isOpen: boolean;
    toggleOpen: (currentState: boolean) => void;
}
