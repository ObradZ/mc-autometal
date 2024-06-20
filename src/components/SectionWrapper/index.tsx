import { SectionWrapperProps } from "./types";
import styles from "./SectionWrapper.module.scss";

const SectionWrapper = ({ superStyles, children }: SectionWrapperProps) => {
    return (
        <div className={[styles.wrapper, superStyles].join(" ")}>
            {children}
        </div>
    );
};

export default SectionWrapper;
