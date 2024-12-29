import HeroSection from '@/components/HeroSection';
import React from 'react';
import MasinskiCentar from '@images/MachineCenter/masinski_centar.jpg';
import { data } from './content';
import VideoSection from '@/components/VideoSection';
import SliderSection from '@/components/SliderSection';
import ProductionGridSection from '@/components/ProductionGridSection';
import { images } from '@/components/ProductionGridSection/content';
import HeroSecondSection from '@/components/HeroSecondSection';
import { useTranslations } from 'next-intl';

const MachineCenter = () => {
    const t = useTranslations('Machine_center');
    const cncT = useTranslations('CNC_Laser');

    return (
        <div>
            <HeroSection
                image={MasinskiCentar}
                isLearnMoreVisible={false}
                countUpData={data(t)}
                title={t('hero_section_title')}
                text={t('hero_section_text')}
            />
            <VideoSection
                videoUrl='https://www.youtube.com/watch?v=wTauEVgfcDw'
                videoText={t('video_section_text')}
                videoTitle={t('video_section_title')}
            />
            <SliderSection title={cncT('slider_section_title')} />
            <ProductionGridSection title={t('production_grid_section_title')} images={images} />
            <HeroSecondSection />
        </div>
    );
};

export default MachineCenter;
