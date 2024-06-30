import { StaticImageData } from 'next/image';

export interface CirclePointsSectionProps {
    data: {
        img: StaticImageData;
        text: string;
        id: number;
    }[];
    title: string;
    subTitle: string;
    pointsBorder?: boolean;
    areImagesSvgs?: boolean;
}
