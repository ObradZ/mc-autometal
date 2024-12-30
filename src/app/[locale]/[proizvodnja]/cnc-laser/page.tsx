import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import ProductionGridSection from '@/components/ProductionGridSection';
import { images } from '@/components/ProductionGridSection/content';
import { circleData, data } from './content';
import CirclePointsSection from '@/components/CirclePointsSection';
import CncLaserInfo from '@/components/CncLaserInfo';
import SliderSection from '@/components/SliderSection';
import HeroSecondSection from '@/components/HeroSecondSection';
import { useTranslations } from 'next-intl';

const Page = () => {
    const t = useTranslations('CNC_Laser');

    return (
        <main>
            <HeroSection
                videoSrc='/videos/cnc2.mp4'
                isLearnMoreVisible={false}
                title={t('hero_section_title')}
                countUpData={data(t)}
                text={t('hero_section_text')}
            />
            <VideoSection
                videoUrl='https://www.youtube.com/watch?v=BXSsWHauKwE'
                videoText={t('video_section_text')}
                videoTitle={'Fiber laser'}
            />
            <CncLaserInfo />
            <CirclePointsSection
                data={circleData(t)}
                title={t('circle_points_section_title')}
                subTitle=''
                areImagesSvgs={false}
            />
            <SliderSection title={t('slider_section_title')} />
            <ProductionGridSection title={t('production_grid_section_title')} images={images} />
            <HeroSecondSection />
        </main>
    );
};

export default Page;
