import { DropdownHeaderProps } from './types';
import DesktopDropdown from './DesktopDropdown';
import styles from './DropdownHeader.module.scss';
import MobileDropdown from './MobileDropdown';

const DropdownHeader = ({ title, links, mainHeaderClose, toggleOpen, isOpen }: DropdownHeaderProps) => {
    return (
        <>
            <div className={styles.desktopDropdown}>
                <DesktopDropdown
                    title={title}
                    links={links}
                    mainHeaderClose={mainHeaderClose}
                    isOpen
                    toggleOpen={toggleOpen}
                />
            </div>
            <div className={styles.mobileDropdown}>
                <MobileDropdown
                    title={title}
                    links={links}
                    mainHeaderClose={mainHeaderClose}
                    isOpen={isOpen}
                    toggleOpen={toggleOpen}
                />
            </div>
        </>
    );
};

export default DropdownHeader;
