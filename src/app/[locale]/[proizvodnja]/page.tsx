import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import ProductionGridSection from '@/components/ProductionGridSection';
import HeroImg from '@images/Homepage/Hero.jpg';
import { images } from '@/components/ProductionGridSection/content';
import { circleData, data } from './content';
import CirclePointsSection from '@/components/CirclePointsSection';
import CncLaserInfo from '@/components/CncLaserInfo';
import HeroSecondSection from '@/components/HeroSecondSection';

const Page = () => {
    return (
        <main>
            <HeroSection
                image={HeroImg}
                isLearnMoreVisible={false}
                title='CNC Laser'
                countUpData={data}
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies gravida metus ac auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Pellentesque urna diam, imperdiet ac quam consectetur, facilisis aliquam orci. Maecenas laoreet eleifend odio pretium maximus.'
            />
            <VideoSection
                videoUrl='https://www.youtube.com/watch?v=wTauEVgfcDw'
                videoText='Ovi mašinski centri su srce naše proizvodne linije, omogućavajući nam da odgovorimo na različite zahteve naših klijenata i proizvedemo komponente visokog standarda i kvaliteta. Naši stručni operateri su obučeni da maksimalno iskoriste potencijal ovih mašina, obezbeđujući optimalne performanse i zadovoljavajući čak i najzahtevnije specifikacije projekata. '
            />
            <CncLaserInfo />
            <CirclePointsSection data={circleData} title='Lorem Ipsum' subTitle='Lorem Ipsum' areImagesSvgs={false} />
            <ProductionGridSection title='Proizvodnja' subtitle='Lorem Ipsum' images={images} />
            <HeroSecondSection />
        </main>
    );
};

export default Page;
