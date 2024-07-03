import SectionWrapper from '../SectionWrapper';
import styles from './CncLaserInfo.module.scss';
import Image from 'next/image';
import { content } from './content';
import Laser from '../../../public/static/images/CncLaser/cnc-laser.png';
import MainHeading from '../MainHeading';
import MainLink from '../MainLink';

const CncLaserInfo = () => {
    return (
        <SectionWrapper superStyles={styles.sectionWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.cncLaserWrapper}>
                    <div className={styles.contentWithBackground}>
                        <MainHeading title={content.title} subtitle={content.subtitle} shade='light' />
                        <p className={styles.text}>{content.text}</p>
                        <MainLink href='#' shade='light'>Poseti sajt →</MainLink>
                    </div>
                </div>
                <Image src={Laser} alt='CNC laser' className={styles.cncLaserImg} />
            </div>
        </SectionWrapper>
    );
};

export default CncLaserInfo;
