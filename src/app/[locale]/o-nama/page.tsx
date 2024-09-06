import Cooperands from '@/components/Cooperands';
import HeroSection from '@/components/HeroSection';
import History from '@/components/History';
import ProductionGridSection from '@/components/ProductionGridSection';
import HeroImg from '@images/AboutUs/Hero.jpg';
import { images } from '@/components/ProductionGridSection/content';
import Certificates from '@/components/Certificates';
import { content } from '@/components/Certificates/content';
import CirclePointsSection from '@/components/CirclePointsSection';
import { data } from './content';
import HeroSecondSection from '@/components/HeroSecondSection';
import { useTranslations } from 'next-intl';

const page = () => {
    const t = useTranslations('About_us');
    return (
        <main>
            <HeroSection image={HeroImg} title={t('hero_section_title')} text={t('hero_section_text')} />
            <History />
            <CirclePointsSection
                title={t('circle_points_section_title')}
                subTitle={t('circle_points_section_subtitle')}
                data={data(t)}
                pointsBorder
            />
            <Certificates
                title={content.title}
                subtitle={content.subtitle}
                text={content.text}
                certificate1={content.certificates.certificate1}
                certificate2={content.certificates.certificate2}
            />
            <Cooperands />
            <ProductionGridSection
                title={t('production_grid_section_title')}
                subtitle={t('production_grid_section_subtitle')}
                images={images}
            />
            <HeroSecondSection />
        </main>
    );
};

export default page;
