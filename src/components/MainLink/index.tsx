import Link from 'next/link';
import { MainLinkProps } from './types';
import styles from './MainLink.module.scss';

const MainLink = ({ href, children, superStyles = '' }: MainLinkProps) => {
    return (
        <Link className={[styles.link, superStyles].join(' ')} href={href}>
            {children}
        </Link>
    );
};

export default MainLink;
