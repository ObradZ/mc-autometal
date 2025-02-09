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
import styles from './aboutUs.module.scss';

const Page = ({ params }: { params: { locale: string } }) => {
    const { locale } = params;
    const t = useTranslations('About_us');

    return (
        <main>
            <HeroSection
                image={HeroImg}
                heroImageStyles={styles.heroImageStyles}
                title={t('hero_section_title')}
                text={t('hero_section_text')}
            />
            <History />
            <CirclePointsSection title={t('circle_points_section_title')} data={data(t)} pointsBorder />
            <Certificates
                title={t(content.title)}
                text={t(content.text)}
                certificate1={content.certificates.certificate1}
                certificate2={content.certificates.certificate2}
                certificate3={content.certificates.certificate3}
                certificate4={content.certificates.certificate4}
            />
            {locale === 'de' && <Cooperands title={t('cooperands_title')} />}
            <ProductionGridSection title={t('production_grid_section_title')} images={images} />
            <HeroSecondSection />
        </main>
    );
};

export default Page;
