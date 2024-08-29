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

const page = () => {
    return (
        <main>
            <HeroSection
                image={HeroImg}
                title='Dobrodošli!'
                text='Uživajte u putovanju kroz našu porodičnu priču i nasleđe u mašinskoj proizvodnji koje traje već 25 godina. Od skromnih početaka do danas, kontinuirano se razvijamo i rastemo zahvaljujući predanosti kvalitetu, inovacijama i vrhunskoj usluzi'
            />
            <History />
            <CirclePointsSection title='Tim' subTitle='Lorem ipsum' data={data} pointsBorder />
            <Certificates
                title={content.title}
                subtitle={content.subtitle}
                text={content.text}
                certificate1={content.certificates.certificate1}
                certificate2={content.certificates.certificate2}
            />
            <Cooperands />
            <ProductionGridSection title='Proizvodnja' subtitle='Lorem Ipsum' images={images} />
            <HeroSecondSection />
        </main>
    );
};

export default page;
