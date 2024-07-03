import React, { useRef, useState } from 'react';
import styles from './DropdownSubsectionMobile.module.scss';
import { useRouter } from '../../../navigation';

const DropdownSubsectionMobile = ({
    links,
    mainHeaderClose,
    setHeight,
    title
}: {
    links: { path: string; name: string }[];
    mainHeaderClose: Function;
    setHeight: Function;
    title: string;
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
            setHeight((state: any) => currEl && state + currEl.scrollHeight);
        } else {
            setHeight((state: any) => currEl && state - currEl.scrollHeight);
        }
    };

    return (
        <div className={styles.subsectionMobileContainer}>
            <h3 className={styles.subsectionHeading} onClick={() => handleOpenAccordion()}>
                {title}
                {isOpenDropdown ? <span className={styles.arrow}>⯅</span> : <span className={styles.arrow}>⯆</span>}
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
