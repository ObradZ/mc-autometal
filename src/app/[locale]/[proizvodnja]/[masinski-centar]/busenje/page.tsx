import HeroSecondSection from '@/components/HeroSecondSection';
import HeroSection from '@/components/HeroSection';
import ProductionGridSection from '@/components/ProductionGridSection';
import { images } from '@/components/ProductionGridSection/content';
import VideoSection from '@/components/VideoSection';
import React from 'react';
import Busenje from '@images/MachineCenter/busenje.jpg';
import { useTranslations } from 'next-intl';

const Page = () => {
    const t = useTranslations('Drilling');
    return (
        <main>
            <HeroSection
                videoSrc='/videos/busenje2.mp4'
                isLearnMoreVisible={false}
                title={t('hero_section_title')}
                text={t('hero_section_text')}
            />
            <VideoSection videoUrl='https://www.youtube.com/watch?v=M1VzgtJeR1M' videoText={t('video_section_text')} />
            <ProductionGridSection
                title={t('production_grid_section_title')}
                subtitle={t('production_grid_section_subtitle')}
                images={images}
            />
            <HeroSecondSection />
        </main>
    );
};

export default Page;
