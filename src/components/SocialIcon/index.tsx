'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

type SocialIconProps = {
    link: string;
    image: StaticImageData;
    className?: string;
};

const SocialIcon = ({ link, image, className }: SocialIconProps) => {
    const handleClick = () => {
        window.open(link);
    };

    return (
        <Image
            className={className}
            src={image}
            alt='social-icon'
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        />
    );
};

export default SocialIcon;
