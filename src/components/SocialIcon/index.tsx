'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

type SocialIconProps = {
    link: string;
    image: StaticImageData;
};

const SocialIcon = ({ link, image }: SocialIconProps) => {
    const handleClick = () => {
        window.open(link);
    };

    return <Image src={image} alt='social-icon' onClick={handleClick} style={{ cursor: 'pointer' }} />;
};

export default SocialIcon;
