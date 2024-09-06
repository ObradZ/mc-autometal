import Contact from '@/components/Contact';
import HeroSection from '@/components/HeroSection';
import MapComponent from '@/components/Map';
import HeroImg from '@images/Contact/Hero.jpg';
import { images } from '@/components/ProductionGridSection/content';
import ProductionGridSection from '@/components/ProductionGridSection';
import HeroSecondSection from '@/components/HeroSecondSection';
import { useTranslations } from 'next-intl';

const page = () => {
    const t = useTranslations('Contact');
    return (
        <main>
            <HeroSection image={HeroImg} title={t('hero_section_title')} text={t('hero_section_text')} />
            <Contact />

            <MapComponent />
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
