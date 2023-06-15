import styles from './sidebar.module.scss';
import classNames from 'classnames';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { responsiveFontSizes } from '@mui/material';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import TextSnippetRoundedIcon from '@mui/icons-material/TextSnippetRounded';
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import React from 'react';
import { Link } from 'react-router-dom';


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
                <div className={classNames(styles['profile-side'], styles['menu-item'])}>
                    <AccountCircleRoundedIcon
                        style={{
                            fontSize: '50px',
                            color: '#E74646',
                            position: 'relative',
                            marginLeft: '40px',
                            marginTop: '10px',
                        }}
                    />
                    <h1 className={styles['sidebar-text']}>Profile</h1>

                </div>
                <hr className={styles.line} />

                <div className={styles['menu-item']}>
                    <CircleNotificationsRoundedIcon
                    style={{
                        fontSize: '50px',
                        color: '#E74646',
                        position: 'relative',
                        marginLeft: '40px',
                        marginTop: '10px',
                    }}
                    />
                    <h1 className={styles['sidebar-text']}>Notifications</h1>
                </div>
                <hr className={styles.line} />
                <div className={styles['menu-item']}>
                <Link to="/confession-hall" className={styles['menu-item']}>
                    <TextSnippetRoundedIcon 
                    style={{
                        fontSize: '50px',
                        color: '#E74646',
                        position: 'relative',
                        marginLeft: '40px',
                        marginTop: '10px',
                    }}
                    />

                    <h1 className={styles['sidebar-text']}>Confession Hall</h1>
                </div>
                <hr className={styles.line} />
                <div className={styles['menu-item']}>
                    <EditCalendarRoundedIcon
                    style={{
                        fontSize: '50px',
                        color: '#E74646',
                        position: 'relative',
                        marginLeft: '40px',
                        marginTop: '10px',
                    }}
                    />
                    <h1 className={styles['sidebar-text']}>Campus Chronicles</h1>
                </div>
                <hr className={styles.line} />
                <div className={styles['menu-item']}>
                    <SettingsRoundedIcon
                    style={{
                        fontSize: '50px',
                        color: '#E74646',
                        position: 'relative',
                        marginLeft: '40px',
                        marginTop: '10px',
                    }}
                    />
                    <h1 className={styles['sidebar-text']}>Settings</h1>
                </div>
            </div>
        </div>
    );
};
