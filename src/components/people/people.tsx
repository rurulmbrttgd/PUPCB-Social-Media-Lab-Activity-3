import styles from './people.module.scss';
import classNames from 'classnames';

export interface PeopleProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const People = ({ className }: PeopleProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['follow-umk']}>
                <h1 className={styles['people-title']}>People You May Know...</h1>
                <div className={styles.users}>
                    <img
                        src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725577/karlos_f4eahv.jpg"
                        alt=""
                        className={styles['user-dp']}
                    />
                    <div className={styles['user-category']}>
                        <h1 className={styles['user-name']}>Karlos Daniel Vicario</h1>
                        <div className={styles['follow-remove-container']}>
                            <h2 className={styles['follow-text']}>Folow</h2>
                            <h2 className={styles['remove-text']}>Remove</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.users}>
                    <img
                        src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725576/Erica_prjcln.jpg"
                        alt=""
                        className={styles['user-dp']}
                    />
                    <div className={styles['user-category']}>
                        <h1 className={styles['user-name']}>Erica Joy Cavaneyro</h1>
                        <div className={styles['follow-remove-container']}>
                            <h2 className={styles['follow-text']}>Folow</h2>
                            <h2 className={styles['remove-text']}>Remove</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.users}>
                    <img
                        src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725639/hanz_mpnmar.png"
                        alt=""
                        className={styles['user-dp']}
                    />
                    <div className={styles['user-category']}>
                        <h1 className={styles['user-name']}>Hannah Grace Joaquin</h1>
                        <div className={styles['follow-remove-container']}>
                            <h2 className={styles['follow-text']}>Folow</h2>
                            <h2 className={styles['remove-text']}>Remove</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.users}>
                    <img
                        src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725577/jen_zgamjt.jpg"
                        alt=""
                        className={styles['user-dp']}
                    />
                    <div className={styles['user-category']}>
                        <h1 className={styles['user-name']}>Jerzen Espiritu</h1>
                        <div className={styles['follow-remove-container']}>
                            <h2 className={styles['follow-text']}>Folow</h2>
                            <h2 className={styles['remove-text']}>Remove</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.users}>
                    <img
                        src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686749396/liebe_icon_kpdvhm.jpg"
                        alt=""
                        className={styles['user-dp']}
                    />
                    <div className={styles['user-category']}>
                        <h1 className={styles['user-name']}>Joyjoy Erica</h1>
                        <div className={styles['follow-remove-container']}>
                            <h2 className={styles['follow-text']}>Folow</h2>
                            <h2 className={styles['remove-text']}>Remove</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
