import HeroSecondSection from '@/components/HeroSecondSection';
import HeroSection from '@/components/HeroSection';
import ProductionGridSection from '@/components/ProductionGridSection';
import { images } from '@/components/ProductionGridSection/content';
import VideoSection from '@/components/VideoSection';
import React from 'react';
import Struganje from '@images/MachineCenter/glodanje.jpg';
import { data } from './content';
import { useTranslations } from 'next-intl';
const Page = () => {
    const t = useTranslations('Turning');
    return (
        <main>
            <HeroSection
                videoSrc='/videos/struganje2.mp4'
                isLearnMoreVisible={false}
                countUpData={data}
                title={t('hero_section_title')}
                text={t('hero_section_text')}
            />
            <VideoSection
                videoUrl='https://www.youtube.com/watch?v=6F8rFv4ZAMY'
                videoText={t('video_section_text')}
                videoTitle={t('video_section_title')}
            />
            <ProductionGridSection title={t('production_grid_section_title')} images={images} />
            <HeroSecondSection />
        </main>
    );
};

export default Page;
