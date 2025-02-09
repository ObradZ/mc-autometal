import HeroSecondSection from '@/components/HeroSecondSection';
import HeroSection from '@/components/HeroSection';
import ProductionGridSection from '@/components/ProductionGridSection';
import { images } from '@/components/ProductionGridSection/content';
import VideoSection from '@/components/VideoSection';
import SliderSection from '@/components/SliderSection';
import React from 'react';
import { useTranslations } from 'next-intl';
import { BASE_URL } from '@/app/config';

const Page = () => {
    const t = useTranslations('Grinding');
    const cncT = useTranslations('CNC_Laser');

    return (
        <main>
            <HeroSection
                videoSrc={`${BASE_URL}/videos/brusenje2.mp4`}
                isLearnMoreVisible={false}
                title={t('hero_section_title')}
                text={t('hero_section_text')}
            />
            <VideoSection
                videoUrl='https://www.youtube.com/watch?v=BmR4nlE9v30'
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
