import HeroSection from '@/components/HeroSection';
import React from 'react';
import MasinskiCentar from '@images/MachineCenter/masinski_centar.jpg';
import { data } from './content';
import SliderSection from '@/components/SliderSection';
import ProductionGridSection from '@/components/ProductionGridSection';
import { images } from '@/components/ProductionGridSection/content';
import HeroSecondSection from '@/components/HeroSecondSection';
import { useTranslations } from 'next-intl';
import ImageSection from '@/components/ImageSection';
import MachineParkImg from '/public/static/images/ImageSection/ImageSection-min.jpg';

const MachineCenter = () => {
    const t = useTranslations('Machine_center');
    const cncT = useTranslations('CNC_Laser');

    return (
        <div>
            <HeroSection
                videoSrc='/videos/masinski-centar.mp4'
                isLearnMoreVisible={false}
                countUpData={data(t)}
                title={t('hero_section_title')}
                text={t('hero_section_text')}
            />
            <ImageSection
                imageUrl={MachineParkImg}
                imageText={t('image_section_text')}
                imageTitle={t('image_section_title')}
            />
            <SliderSection title={cncT('slider_section_title')} />
            <ProductionGridSection title={t('production_grid_section_title')} images={images} />
            <HeroSecondSection />
        </div>
    );
};

export default MachineCenter;
