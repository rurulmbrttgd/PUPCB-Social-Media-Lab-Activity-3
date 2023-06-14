import styles from './confessionhall.module.scss';
import classNames from 'classnames';
import { Navbar1 } from '../navbar-1/navbar-1';
import { Sidebar } from '../sidebar/sidebar';
import { People } from '../people/people';

export interface ConfessionhallProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Confessionhall = ({ className }: ConfessionhallProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Navbar1 />
            <div className={styles.container}>
                <div className={styles['left-side']}>
                    <Sidebar />
                </div>
                <div className={styles.middle} />
                <div className={styles['right-side']}>
                    <People />
                </div>
            </div>
        </div>
    );
};
