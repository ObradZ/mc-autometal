import HeroSection from '@/components/HeroSection';
import React from 'react';
import PlasticDeformation from '@images/PlasticDeformation/Hero.jpeg';
import VideoSection from '@/components/VideoSection';
import ProductionGridSection from '@/components/ProductionGridSection';
import { images } from '@/components/ProductionGridSection/content';
import SliderSection from '@/components/SliderSection';
import HeroSecondSection from '@/components/HeroSecondSection';
import { useTranslations } from 'next-intl';

const Page = () => {
    const t = useTranslations('Plastic_deformation');
    const cncT = useTranslations('CNC_Laser');

    return (
        <main>
            <HeroSection
                videoSrc='/videos/plast-deformisanje.mp4'
                isLearnMoreVisible={false}
                title={t('hero_section_title')}
                text={t('hero_section_text')}
            />
            <VideoSection
                videoUrl='https://www.youtube.com/watch?v=4H5BZocn8_c'
                videoText={t('video_section_text')}
                videoTitle={t('video_section_title')}
            />
            <SliderSection title={cncT('slider_section_title')} />
            <ProductionGridSection title={t('production_grid_section_title')} images={images} />
            <HeroSecondSection />
        </main>
    );
};

export default Page;
