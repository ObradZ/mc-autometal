import SectionWrapper from '../SectionWrapper';
import styles from './CncLaserInfo.module.scss';
import Image from 'next/image';
import Laser from '../../../public/static/images/CncLaser/cnc-laser.png';
import MainHeading from '../MainHeading';
import MainLink from '../MainLink';
import { useTranslations } from 'next-intl';

const CncLaserInfo = () => {
    const t = useTranslations('CNC_Laser_info');
    return (
        <SectionWrapper superStyles={styles.sectionWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.cncLaserWrapper}>
                    <div className={styles.contentWithBackground}>
                        {t('title') && (
                            <MainHeading title={t('title') || ''} subtitle={t('subtitle') || ''} shade='light' />
                        )}
                        <p className={styles.text}>{t('text')}</p>
                        <MainLink href='#' shade='light'>
                            {t('visit_website')} →
                        </MainLink>
                    </div>
                </div>
                <Image src={Laser} alt='CNC laser' className={styles.cncLaserImg} />
            </div>
        </SectionWrapper>
    );
};

export default CncLaserInfo;
