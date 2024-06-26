import { StaticImageData } from 'next/image';
import { CountUpData } from './CountUpHeroPart/types';

export interface HeroSectionProps {
    image: StaticImageData;
    isLearnMoreVisible?: boolean;
    title: string;
    text: string;
    countUpData?: CountUpData[] | undefined;
}
