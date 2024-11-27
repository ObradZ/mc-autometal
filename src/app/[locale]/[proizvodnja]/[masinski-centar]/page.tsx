import HeroSection from '@/components/HeroSection';
import React from 'react';
import MasinskiCentar from '@images/MachineCenter/masinski_centar.jpg';
import { data } from './content';
import VideoSection from '@/components/VideoSection';
import SliderSection from '@/components/SliderSection';
import ProductionGridSection from '@/components/ProductionGridSection';
import { images } from '@/components/ProductionGridSection/content';
import HeroSecondSection from '@/components/HeroSecondSection';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import AboutImg from '@images/AboutUs/Hero.jpg';
import ContactImg from '@images/Contact/Hero.jpg';
import HomepageImg from '@images/Homepage/Hero.jpg';

const slides = [
    <Image src={AboutImg} alt='about us' key={1} />,
    <Image src={ContactImg} alt='contact' key={2} />,
    <Image src={HomepageImg} alt='homepage' key={3} />
];
const MachineCenter = () => {
    const t = useTranslations('Machine_center');
    return (
        <div>
            <HeroSection
                image={MasinskiCentar}
                isLearnMoreVisible={false}
                countUpData={data(t)}
                title={t('hero_section_title')}
                text={t('hero_section_text')}
            />
            <VideoSection videoUrl='https://www.youtube.com/watch?v=wTauEVgfcDw' videoText={t('video_section_text')} />
            <SliderSection slides={slides} />
            <ProductionGridSection
                title={t('production_grid_section_title')}
                subtitle={t('production_grid_section_subtitle')}
                images={images}
            />
            <HeroSecondSection />
        </div>
    );
};

export default MachineCenter;
