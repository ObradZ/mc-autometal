import HeroSecondSection from '@/components/HeroSecondSection';
import HeroSection from '@/components/HeroSection';
import ProductionGridSection from '@/components/ProductionGridSection';
import { images } from '@/components/ProductionGridSection/content';
import VideoSection from '@/components/VideoSection';
import React from 'react';
import Glodanje from '@images/MachineCenter/glodanje.jpg';
import { data } from './content';
import { useTranslations } from 'next-intl';

const Page = () => {
    const t = useTranslations('Milling');
    return (
        <main>
            <HeroSection
                videoSrc='/videos/glodanje2.mp4'
                isLearnMoreVisible={false}
                countUpData={data}
                title={t('hero_section_title')}
                text={t('hero_section_text')}
            />
            <VideoSection videoUrl='https://www.youtube.com/watch?v=uwlxa39DdpM' videoText={t('video_section_text')} />
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
