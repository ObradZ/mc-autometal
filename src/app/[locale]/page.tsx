import AboutUsSection from '@/components/AboutUsSection';
import HeroSection from '@/components/HeroSection';
import HeroImg from '@images/Homepage/Hero.jpg';
import ProductionGridSection from '@/components/ProductionGridSection';
import { images } from '@/components/ProductionGridSection/content';
import HeroSecondSection from '@/components/HeroSecondSection';
import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('Home');
    return (
        <main>
            <HeroSection
                videoSrc='/videos/mc_autometal.mp4'
                title={t('hero_section_title')}
                text={t('hero_section_text')}
            />
            <AboutUsSection
                title={t('about_us_section_title')}
                subtitle={t('about_us_section_subtitle')}
                text={t('about_us_section_text')}
            />
            <ProductionGridSection
                title={t('production_grid_section_title')}
                subtitle={t('production_grid_section_subtitle')}
                images={images}
            />
            <HeroSecondSection />
        </main>
    );
}
