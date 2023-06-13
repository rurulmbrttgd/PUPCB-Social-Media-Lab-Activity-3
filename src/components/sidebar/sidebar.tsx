import styles from './sidebar.module.scss';
import classNames from 'classnames';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { responsiveFontSizes } from '@mui/material';

export interface SidebarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Sidebar = ({ className }: SidebarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['profile-div']}>
                <img
                    src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1658078959/utot_bctyju.jpg"
                    alt=""
                    className={styles.profile}
                />
                <div className={styles['profile-name']}>
                    <h1 className={styles['profile-text']}>Ronald Tugadi</h1>
                    <h3 className={styles.username}>@rontgd</h3>
                </div>
            </div>
            <div className={styles['menu-items']}>
                <div className={styles['profile-side']}>
                    <AccountCircleRoundedIcon className="custom-icon"  />
                    <h1 className={styles['sidebar-text']}>Profile</h1>
                </div>
                <hr className={styles.line} />
                <div className={styles['notifications']}>
                    <h1 className={styles['sidebar-text']}>Notifications</h1>
                </div>
                <hr className={styles.line} />
                <div className={styles['confession-hall']}>
                    <h1 className={styles['sidebar-text']}>Confession Hall</h1>
                </div>
                <hr className={styles.line} />
                <div className={styles['campus-chronicles']}>
                    <h1 className={styles['sidebar-text']}>Campus Chronicles</h1>
                </div>
                <hr className={styles.line} />
                <div className={styles['settings']}>
                    <h1 className={styles['sidebar-text']}>Settings</h1>
                </div>
                <hr className={styles.line} />
            </div>
        </div>
    );
};
