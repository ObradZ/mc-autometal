import AboutUsSection from '@/components/AboutUsSection';
import HeroSection from '@/components/HeroSection';
import ProductionGridSection from '@/components/ProductionGridSection';
import { images } from '@/components/ProductionGridSection/content';
import HeroSecondSection from '@/components/HeroSecondSection';
import { useTranslations } from 'next-intl';
import HomeBannerImg from '/public/static/images/Homepage/HomePageBanner-min.jpg';

export default function Home() {
    const t = useTranslations('Home');

    return (
        <main>
            <HeroSection image={HomeBannerImg} title={t('hero_section_title')} text={t('hero_section_text')} />
            <AboutUsSection title={t('about_us_section_title')} text={t('about_us_section_text')} />
            <ProductionGridSection title={t('production_grid_section_title')} images={images} />
            <HeroSecondSection />
        </main>
    );
}
