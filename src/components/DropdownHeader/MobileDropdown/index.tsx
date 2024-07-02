'use client';

import styles from './MobileDropdown.module.scss';
import { useRouter } from '../../../navigation';
import { DropdownHeaderProps } from '../types';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useRef, useState } from 'react';
import DropdownSubsectionMobile from '../DropdownSubsectionMobile';

const MobileDropdown = ({ title, links, mainHeaderClose, isOpen, toggleOpen }: DropdownHeaderProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const contentHeight = useRef<HTMLDivElement>(null);

    const handleItemClick = (item: { path: string }) => {
        toggleOpen(isOpen);
        mainHeaderClose();
        router.replace(item.path);
    };

    const isActive = pathname.replaceAll('-', ' ').includes(title);

    return (
        <div className={styles.wrapper}>
            <h3
                tabIndex={0}
                className={[styles.link, isActive ? styles.isActive : ''].join(' ')}
                onClick={() => toggleOpen(isOpen)}
            >
                {title}
            </h3>
            <div
                className={styles.accordionContent}
                ref={contentHeight}
                style={
                    isOpen
                        ? {
                              height: '185px'
                          }
                        : { height: '0px' }
                }
            >
                {links.map((link) =>
                    link.subsection.length > 0 ? (
                        <DropdownSubsectionMobile
                            key={link.name}
                            links={link.subsection}
                            mainHeaderClose={mainHeaderClose}
                            title={'MAŠINSKI CENTAR'}
                        />
                    ) : (
                        <div key={link.name} onClick={() => handleItemClick(link)} className={styles.link}>
                            {link.name}
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default MobileDropdown;
