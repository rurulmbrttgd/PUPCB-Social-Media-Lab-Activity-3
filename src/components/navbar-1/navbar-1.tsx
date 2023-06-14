import styles from './navbar-1.module.scss';
import classNames from 'classnames';
import SearchIcon from '@mui/icons-material/Search';

export interface Navbar1Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbar1 = ({ className }: Navbar1Props) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686540538/PUP-Buzz-trnsprnt_ocx5qm.png"
                alt=""
                className={styles.image1}
            />
            <h1 className={styles.logoname}>PUP BuzzBite</h1>
            <div className={styles['input-container']} style={{position: 'relative', left: '145px',}}>
                <input className={styles['search-input']} placeholder={'search'} />
                    <SearchIcon
                        style={{ 
                            fontSize: '50px', 
                            color: '#E74646', 
                            float: 'left',
                            width: '100px',
                            marginRight: '-90px',
                            marginTop: '10px',
                            position: 'relative',
                            }}
                />
            </div>
        </div>
    );
};
