import Img0 from '@images/Producs/Ellipse 1.jpg';
import Img1 from '@images/Producs/Ellipse 2.jpg';
import Img2 from '@images/Producs/Ellipse 3.jpg';
import Img3 from '@images/Producs/Ellipse 4.jpg';
import Img4 from '@images/Producs/Ellipse 5.jpg';
import Img5 from '@images/Producs/Ellipse 6.jpg';

export const circleData = (t: any) => [
    { img: Img0, text: t('circle_data_car_manufacturing'), id: 0 },
    { img: Img1, text: t('circle_data_mechanical_processing'), id: 1 },
    { img: Img2, text: t('circle_data_petroleum_machinery'), id: 2 },
    { img: Img3, text: t('circle_data_solar_panels'), id: 3 },
    { img: Img4, text: t('circle_data_metallurgy'), id: 4 },
    { img: Img5, text: t('circle_data_sheet_metal_fabrication'), id: 5 }
];

export const data = (t: any) => [
    { number: 45, property: t('steel_data'), id: 0 },
    { property: 'divider', number: 0, id: 1 },
    { number: 35, property: t('stainless_steel_data'), id: 2 },
    { property: 'divider', number: 0, id: 3 },
    { number: 40, property: t('aluminum_data'), id: 4 },
    { property: 'divider', number: 0, id: 5 },
    { number: 45, property: t('bronze_data'), id: 6 }
];
