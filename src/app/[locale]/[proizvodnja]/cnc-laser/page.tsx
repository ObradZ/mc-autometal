import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import ProductionGridSection from '@/components/ProductionGridSection';
import HeroImg from '@images/Homepage/Hero.jpg';
import { images } from '@/components/ProductionGridSection/content';
import { circleData, data } from './content';
import CirclePointsSection from '@/components/CirclePointsSection';
import CncLaserInfo from '@/components/CncLaserInfo';
import SliderSection from '@/components/SliderSection';
import HeroSecondSection from '@/components/HeroSecondSection';
import { useTranslations } from 'next-intl';
// Slider images
import AboutImg from '@images/AboutUs/Hero.jpg';
import ContactImg from '@images/Contact/Hero.jpg';
import HomepageImg from '@images/Homepage/Hero.jpg';
import Image from 'next/image';

const slides = [
    <Image src={AboutImg} alt='about us' key={1} />,
    <Image src={ContactImg} alt='contact' key={2} />,
    <Image src={HomepageImg} alt='homepage' key={3} />
];

const Page = () => {
    const t = useTranslations('CNC_Laser');
    return (
        <main>
            <HeroSection
                image={HeroImg}
                isLearnMoreVisible={false}
                title='CNC Laser'
                countUpData={data(t)}
                text='U 2023. godini, investirali smo u najnoviju tehnologiju u mašinskoj proizvodnji – fiber laser poslednje generacije. '
            />
            <VideoSection
                videoUrl='https://www.youtube.com/watch?v=nziA33FrhoI'
                videoText={
                    'Ovaj vrhunski uređaj predstavlja vrhunac u našem tehnološkom arsenalu, omogućavajući nam da postignemo izuzetne rezultate u sečenju raznovrsnih materijala kao što su Inox, Aluminijum, čelik (MS), bakar i drugi. Zahvaljujući impresivnoj snazi od 12KW, naš fiber laser s lakoćom seče velike debljine materijala, postižući visoke brzine obrade bez kompromisa na preciznosti. '
                }
            />
            <CncLaserInfo />
            <CirclePointsSection
                data={circleData(t)}
                title='Lorem Ipsum'
                subTitle='Lorem Ipsum'
                areImagesSvgs={false}
            />
            <SliderSection slides={slides} />
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
