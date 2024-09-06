import CncLaser from '/public/static/images/ProductionGridSection/cnc-laser.jpg';
import Glodanje from '/public/static/images/ProductionGridSection/glodanje.jpg';
import Struganje from '/public/static/images/ProductionGridSection/struganje.jpg';
import Brusenje from '/public/static/images/ProductionGridSection/brusenje.jpg';
import Busenje from '/public/static/images/ProductionGridSection/busenje.jpg';
import PlastDeformisanje from '/public/static/images/ProductionGridSection/plast-deformisanje.jpg';

export const images = (t: any) => [
    { src: CncLaser, alt: t('cnc_laser_alt'), text: t('cnc_laser_text') },
    { src: Glodanje, alt: t('milling_alt'), text: t('milling_text') },
    { src: Struganje, alt: t('turning_alt'), text: t('turning_text') },
    { src: Brusenje, alt: t('grinding_alt'), text: t('grinding_text') },
    { src: Busenje, alt: t('drilling_alt'), text: t('drilling_text') },
    {
        src: PlastDeformisanje,
        alt: t('plastic_deformation_alt'),
        text: t('plastic_deformation_text')
    }
];
