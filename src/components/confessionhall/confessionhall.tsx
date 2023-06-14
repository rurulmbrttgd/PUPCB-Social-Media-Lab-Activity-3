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
                <div className={styles.middle}>
                    <div className={styles['top-middle']}>
                        <button className={styles['add-button']}>
                            <img
                                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686755563/plus_bnnld2.png"
                                alt=""
                                className={styles['button-img']}
                            />
                        </button>
                        <input
                            className={styles['input-notes']}
                            placeholder="Click to add a confession."
                        />
                    </div>
                    <div className={styles['confession-notes']}>
                        <div className={styles['sticky-notes']}>
                            <h1 className={styles['note-title']}>ERICA</h1>
                            <h3 className={styles['note-body']}>
                                shout out sayo na kumakain sa lab kahapon
                            </h3>
                        </div>
                        <div className={styles['sticky-notes']}>
                            <h1 className={styles['note-title']}>HANNAH</h1>
                            <h3 className={styles['note-body']}>bakit ang sungit mo palagi </h3>
                        </div>
                        <div className={styles['sticky-notes']}>
                            <h1 className={styles['note-title']}>KARLOS</h1>
                            <h3 className={styles['note-body']}>ang galing mo magcode hahaha</h3>
                        </div>
                        <div className={styles['sticky-notes']}>
                            <h1 className={styles['note-title']}>RONALD</h1>
                            <h3 className={styles['note-body']}>
                                pareho na kayo ng first name pareho pa kayo naka polo kahapon
                                hahahaha{' '}
                            </h3>
                        </div>
                        <div className={styles['sticky-notes']}>
                            <h1 className={styles['note-title']}>JERZEN</h1>
                            <h3 className={styles['note-body']}>og anti-erica </h3>
                        </div>
                    </div>
                </div>
                <div className={styles['right-side']}>
                    <People />
                </div>
            </div>
        </div>
    );
};
