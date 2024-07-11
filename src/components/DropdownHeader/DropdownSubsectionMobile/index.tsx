import React, { useRef, useState } from 'react';
import styles from './DropdownSubsectionMobile.module.scss';
import { useRouter } from '../../../navigation';

const DropdownSubsectionMobile = ({
    links,
    mainHeaderClose,
    setHeight,
    title,
    titleLink
}: {
    links: { path: string; name: string }[];
    mainHeaderClose: Function;
    setHeight: Function;
    title: string;
    titleLink?: string;
}) => {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const router = useRouter();

    const contentHeight = useRef<HTMLDivElement>(null);
    const handleItemClick = (item: string) => {
        mainHeaderClose();

        setIsOpenDropdown((state) => !state);
        router.replace(item);
    };

    const handleOpenAccordion = () => {
        const currEl = contentHeight?.current;
        setIsOpenDropdown((state) => !state);
        if (!isOpenDropdown) {
            setHeight((state: number) => currEl && state + currEl.scrollHeight);
        } else {
            setHeight((state: number) => currEl && state - currEl.scrollHeight);
        }
    };

    return (
        <div className={styles.subsectionMobileContainer}>
            <h3 onClick={() => titleLink && router.push(titleLink)} className={styles.subsectionHeading}>
                {title}
                {isOpenDropdown ? (
                    <span onClick={() => handleOpenAccordion()} className={styles.arrow}>
                        -
                    </span>
                ) : (
                    <span onClick={() => handleOpenAccordion()} className={styles.arrow}>
                        +
                    </span>
                )}
            </h3>
            <div
                className={styles.accordionContentSubsection}
                ref={contentHeight}
                style={
                    isOpenDropdown
                        ? {
                              height: contentHeight?.current?.scrollHeight
                          }
                        : { height: '0px' }
                }
            >
                {links.map((link) => (
                    <div key={link.name} onClick={() => handleItemClick(link.path)} className={styles.subsectionLink}>
                        {link.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DropdownSubsectionMobile;
