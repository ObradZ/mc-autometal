import React from 'react';
import styles from './HeroVideo.module.scss';

const HeroVideo = ({ src }: { src: string }) => {
    return (
        <div className={styles.backgroundVideo}>
            <video autoPlay loop muted playsInline controls={false} className={styles.video}>
                <source src={src} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <div className={styles.opacityLayer} />
        </div>
    );
};

export default HeroVideo;
