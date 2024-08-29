import HeroSection from '@/components/HeroSection';
import React from 'react';
import MasinskiCentar from '@images/MachineCenter/masinski_centar.jpg';
import { data } from './content';
import VideoSection from '@/components/VideoSection';
import SliderSection from '@/components/SliderSection';
import ProductionGridSection from '@/components/ProductionGridSection';
import { images } from '@/components/ProductionGridSection/content';
import HeroSecondSection from '@/components/HeroSecondSection';
import Image from 'next/image';
import AboutImg from '@images/AboutUs/Hero.jpg';
import ContactImg from '@images/Contact/Hero.jpg';
import HomepageImg from '@images/Homepage/Hero.jpg';
const slides = [
    <Image src={AboutImg} alt='about us' key={1} />,
    <Image src={ContactImg} alt='contact' key={2} />,
    <Image src={HomepageImg} alt='homepage' key={3} />
];
const index = () => {
    return (
        <div>
            <HeroSection
                image={MasinskiCentar}
                isLearnMoreVisible={false}
                countUpData={data}
                title='Mašinski centar'
                text='Naša kompanija se ponosi savremenim CNC mašinskim parkom opremljenim najnovijom tehnologijom. Posedujemo CNC glodalice i strugove koji nam omogućavaju izvođenje 3-osnih i 4-osnih obrada sa maksimalnom preciznošću i efikasnošću. '
            />
            <VideoSection
                videoUrl='https://www.youtube.com/watch?v=nziA33FrhoI'
                videoText='Ovi mašinski centri su srce naše proizvodne linije, omogućavajući nam da odgovorimo na različite zahteve naših klijenata i proizvedemo komponente visokog standarda i kvaliteta. Naši stručni operateri su obučeni da maksimalno iskoriste potencijal ovih mašina, obezbeđujući optimalne performanse i zadovoljavajući čak i najzahtevnije specifikacije projekata. '
            />
            <SliderSection slides={slides} />
            <ProductionGridSection title='Proizvodnja' subtitle='Lorem Ipsum' images={images} />
            <HeroSecondSection />
        </div>
    );
};

export default index;
