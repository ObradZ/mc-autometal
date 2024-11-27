import HeroSecondSection from '@/components/HeroSecondSection';
import HeroSection from '@/components/HeroSection';
import ProductionGridSection from '@/components/ProductionGridSection';
import { images } from '@/components/ProductionGridSection/content';
import VideoSection from '@/components/VideoSection';
import React from 'react';
import Brusenje from '@images/MachineCenter/brusenje.jpg';
import { useTranslations } from 'next-intl';

const Page = () => {
    const t = useTranslations('Grinding');
    return (
        <main>
            <HeroSection
                videoSrc='/videos/brusenje2.mp4'
                isLearnMoreVisible={false}
                title={t('hero_section_title')}
                text={t('hero_section_text')}
            />
            <VideoSection videoUrl='https://www.youtube.com/watch?v=BmR4nlE9v30' videoText={t('video_section_text')} />
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
