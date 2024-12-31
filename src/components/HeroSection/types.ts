import { StaticImageData } from 'next/image';
import { CountUpData } from './CountUpHeroPart/types';

export interface HeroSectionProps {
    image?: StaticImageData;
    isLearnMoreVisible?: boolean;
    title: string;
    text: string;
    videoSrc?: string;
    countUpData?: CountUpData[] | undefined;
    heroImageStyles?: string;
}
