import SectionWrapper from '../SectionWrapper';
import styles from './CncLaserInfo.module.scss';
import Image from 'next/image';
import { Link } from '@/navigation';
import { content } from './content';
import Laser from '../../../public/static/images/CncLaser/cnc-laser.png';

import MainHeading from '../MainHeading';

const CncLaserInfo = () => {
    return (
        <SectionWrapper superStyles={styles.sectionWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.cncLaserWrapper}>
                    <div className={styles.contentWithBackground}>
                        <MainHeading title={content.title} subtitle={content.subtitle} shade='light' />
                        <p className={styles.text}>{content.text}</p>
                        <Link href='#' className={styles.link}>
                            Poseti sajt →
                        </Link>
                    </div>
                </div>
                <Image src={Laser} alt='CNC laser' className={styles.cncLaserImg} />
            </div>
        </SectionWrapper>
    );
};

export default CncLaserInfo;
