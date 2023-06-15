import styles from './profile.module.scss';
import classNames from 'classnames';
import { Navbar1 } from '../navbar-1/navbar-1';
import { Sidebar } from '../sidebar/sidebar';
import { useState } from 'react';
import { People } from '../people/people';

export interface ProfileProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Profile = ({ className }: ProfileProps) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        if (isActive == true) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    };
    const [isActive2, setIsActive2] = useState(false);

    const handleClick2 = () => {
        if (isActive2 == true) {
            setIsActive2(false);
        } else {
            setIsActive2(true);
        }
    };
    const [isActive3, setIsActive3] = useState(false);

    const handleClick3 = () => {
        if (isActive3 == true) {
            setIsActive3(false);
        } else {
            setIsActive3(true);
        }
    };

    const [isActive4, setIsActive4] = useState(false);
    const handleClick4 = () => {
        if (isActive4 == true) {
            setIsActive4(false);
        } else {
            setIsActive4(true);
        }
    };
    const [isActive5, setIsActive5] = useState(false);
    const handleClick5 = () => {
        if (isActive5 == true) {
            setIsActive5(false);
        } else {
            setIsActive5(true);
        }
    };
    const [isActive6, setIsActive6] = useState(false);
    const handleClick6 = () => {
        if (isActive6 == true) {
            setIsActive6(false);
        } else {
            setIsActive6(true);
        }
    };
    const [isActive7, setIsActive7] = useState(false);
    const handleClick7 = () => {
        if (isActive7 == true) {
            setIsActive7(false);
        } else {
            setIsActive7(true);
        }
    };
    const [isActive8, setIsActive8] = useState(false);
    const handleClick8 = () => {
        if (isActive8 == true) {
            setIsActive8(false);
        } else {
            setIsActive8(true);
        }
    };
    const [isActive9, setIsActive9] = useState(false);
    const handleClick9 = () => {
        if (isActive9 == true) {
            setIsActive9(false);
        } else {
            setIsActive9(true);
        }
    };
    const [isActive10, setIsActive10] = useState(false);
    const handleClick10 = () => {
        if (isActive10 == true) {
            setIsActive10(false);
        } else {
            setIsActive10(true);
        }
    };
    const [isActive11, setIsActive11] = useState(false);
    const handleClick11 = () => {
        if (isActive11 == true) {
            setIsActive11(false);
        } else {
            setIsActive11(true);
        }
    };
    const [isActive12, setIsActive12] = useState(false);
    const handleClick12 = () => {
        if (isActive12 == true) {
            setIsActive12(false);
        } else {
            setIsActive12(true);
        }
    };
    const [isActive13, setIsActive13] = useState(false);
    const handleClick13 = () => {
        if (isActive13 == true) {
            setIsActive13(false);
        } else {
            setIsActive13(true);
        }
    };
    const [isActive14, setIsActive14] = useState(false);
    const handleClick14 = () => {
        if (isActive14 == true) {
            setIsActive14(false);
        } else {
            setIsActive14(true);
        }
    };
    return (
        <div className={classNames(styles.root, className)}>
            <Navbar1 />
            <div className={styles.container}>
                <div className={styles['left-side']}>
                    <Sidebar className={styles.sidebar} />
                    <h2 className={classNames(styles['left-text'], styles['left-text'])}>Photos</h2>
                    <div className={styles.photos}>
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725581/bg_1_sval7r.png"
                            alt=""
                            className={styles['photos-img']}
      
                          onClick={handleClick7}
                        />

                        <div
                            className={styles.modalphoto7}
                            id="modalphoto7"
                            onClick={handleClick7}
                            style={{ display: isActive7 ? '' : 'none' }}
                        >
                            <img
                                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725581/bg_1_sval7r.png"
                                alt=""
                                className={styles['modal-img']}
                            />
                        </div>
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725577/pangarap_qpk16a.jpg"
                            alt=""
                            className={styles['photos-img']}
                            onClick={handleClick8}
                        />

                        <div
                            className={styles.modalphoto8}
                            id="modalphoto7"
                            onClick={handleClick8}
                            style={{ display: isActive8 ? '' : 'none' }}
                        >
                            <img
                                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725577/pangarap_qpk16a.jpg"
                                alt=""
                                className={styles['modal-img']}
                            />
                        </div>
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725577/lagoon_iz10zd.jpg"
                            alt=""
                            className={styles['photos-img']}
                            onClick={handleClick9}
                        />

                        <div
                            className={styles.modalphoto9}
                            id="modalphoto7"
                            onClick={handleClick9}
                            style={{ display: isActive9 ? '' : 'none' }}
                        >
                            <img
                                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725577/lagoon_iz10zd.jpg"
                                alt=""
                                className={styles['modal-img']}
                            />
                        </div>
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725577/erica_story_wvnmrq.jpg"
                            alt=""
                            className={styles['photos-img']}
                            onClick={handleClick10}
                        />

                        <div
                            className={styles.modalphoto10}
                            id="modalphoto7"
                            onClick={handleClick10}
                            style={{ display: isActive10 ? '' : 'none' }}
                        >
                            <img
                                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725577/erica_story_wvnmrq.jpg"
                                alt=""
                                className={styles['modal-img']}
                            />
                        </div>
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725576/calauan_phxa5x.jpg"
                            alt=""
                            className={styles['photos-img']}
                            onClick={handleClick11}
                        />

                        <div
                            className={styles.modalphoto11}
                            id="modalphoto7"
                            onClick={handleClick11}
                            style={{ display: isActive11 ? '' : 'none' }}
                        >
                            <img
                                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725576/calauan_phxa5x.jpg"
                                alt=""
                                className={styles['modal-img']}
                            />
                        </div>
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1657729318/privateroom_pugvkn.jpg"
                            alt=""
                            className={styles['lastphotos-img']}
                            onClick={handleClick12}
                        />

                        <div
                            className={styles.modalphoto12}
                            id="modalphoto7"
                            onClick={handleClick12}
                            style={{ display: isActive12 ? '' : 'none' }}
                        >
                            <img
                                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1657729318/privateroom_pugvkn.jpg"
                                alt=""
                                className={styles['modal-img']}
                            />
                        </div>
                    </div>
                    <h2 className={classNames(styles['left-text'], styles['left-text'])}>
                        Friends
                    </h2>
                    <div className={styles.photos}>
                        <div className={styles.photo} onClick={handleClick}>
                            <img
                                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725577/jen_zgamjt.jpg"
                                alt=""
                                className={styles['friend-img']}
                            />
                            Jerzen Espiritu
                        </div>
                        <div
                            className={styles.modalphoto}
                            id="modalphoto"
                            onClick={handleClick}
                            style={{ display: isActive ? '' : 'none' }}
                        >
                            <img
                                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725577/jen_zgamjt.jpg"
                                alt=""
                                className={styles['modal-img']}
                            />
                        </div>
                        <div className={styles.photo} onClick={handleClick2}>
                            <img
                                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725576/Erica_prjcln.jpg"
                                alt=""
                                className={styles['friend-img']}
                            />
                            Erica Joy Cavaneyro
                        </div>

                        <div
                            className={styles.modalphoto2}
                            id="modalphoto"
                            onClick={handleClick2}
                            style={{ display: isActive2 ? '' : 'none' }}
                        >
                            <img
                                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725576/Erica_prjcln.jpg"
                                alt=""
                                className={styles['modal-img']}
                            />
                        </div>
                        <div className={styles.photo} onClick={handleClick3}>
                            <img
                                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725577/karlos_f4eahv.jpg"
                                alt=""
                                className={styles['friend-img']}
                            />
                            Karlos Vicario
                        </div>
                        <div
                            className={styles.modalphoto3}
                            id="modalphoto"
                            onClick={handleClick3}
                            style={{ display: isActive3 ? '' : 'none' }}
                        >
                            <img
                                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725577/karlos_f4eahv.jpg"
                                alt=""
                                className={styles['modal-img']}
                            />
                        </div>

                        <div className={styles.photo} onClick={handleClick4}>
                            <img
                                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725639/hanz_mpnmar.png"
                                alt=""
                                className={styles['friend-img']}
                            />
                            Hannah Joaquin
                        </div>
                        <div
                            className={styles.modalphoto4}
                            id="modalphoto"
                            onClick={handleClick4}
                            style={{ display: isActive4 ? '' : 'none' }}
                        >
                            <img
                                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725639/hanz_mpnmar.png"
                                alt=""
                                className={styles['modal-img']}
                            />
                        </div>
                        <div className={styles.photo} onClick={handleClick5}>
                            <img
                                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725576/calauan_phxa5x.jpg"
                                alt=""
                                className={styles['friend-img']}
                            />
                            Juan Cruz
                        </div>
                        <div
                            className={styles.modalphoto5}
                            id="modalphoto"
                            onClick={handleClick5}
                            style={{ display: isActive5 ? '' : 'none' }}
                        >
                            <img
                                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725576/calauan_phxa5x.jpg"
                                alt=""
                                className={styles['modal-img']}
                            />
                        </div>

                        <div className={styles.photo} onClick={handleClick6}>
                            <img
                                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1657729318/privateroom_pugvkn.jpg"
                                alt=""
                                className={styles['friend-img']}
                            />
                            Jose Lupet
                        </div>
                        <div
                            className={styles.modalphoto6}
                            id="modalphoto"
                            onClick={handleClick6}
                            style={{ display: isActive6 ? '' : 'none' }}
                        >
                            <img
                                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1657729318/privateroom_pugvkn.jpg"
                                alt=""
                                className={styles['modal-img']}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles['profile-timeline']}>
                    <div className={styles['profile-cover']} onClick={handleClick13}>
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686550075/wallpaper_aiz2y6.jpg"
                            alt=""
                            className={styles.cover}
                        />
                    </div>
                    <div
                        className={styles.modalphoto13}
                        id="modalphoto13"
                        onClick={handleClick13}
                        style={{ display: isActive13 ? 'flex' : 'none' }}
                    >
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686550075/wallpaper_aiz2y6.jpg"
                            alt=""
                            className={styles['modal-img']}
                        />
                    </div>
                    <div className={styles['dp-container']} onClick={handleClick14}>
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1658078959/utot_bctyju.jpg"
                            alt=""
                            className={styles.dp}
                        />
                    </div>
                    <div
                        className={styles.modalphoto14}
                        id="modalphoto14"
                        onClick={handleClick14}
                        style={{ display: isActive14 ? 'flex' : 'none' }}
                    >
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1658078959/utot_bctyju.jpg"
                            alt=""
                            className={styles['modal-img']}
                        />
                    </div>
                    <div className={styles['name-desc']}>
                        <h1 className={styles['profile-name']}>Ronald Lambert Tugadi</h1>
                        <h1 className={styles['profile-desc']}>
                            student, volleyball player, &amp; artist
                        </h1>
                    </div>
                    <div className={styles.subs}>
                        <h1 className={styles['profile-numbers']}>4999</h1>
                        <h1 className={styles['profile-numbers']}>654</h1>
                        <h1 className={styles['profile-numbers']}>10598</h1>
                    </div>
                    <div className={styles.subss}>
                        <h1 className={styles.subscribe}>Subscribers</h1>
                        <h1 className={styles.subscribe}>Subscribing</h1>
                        <h1 className={styles.subscribe}>Engagements</h1>
                    </div>
                    <hr className={styles.linya} />
                    <p className={styles['long-desc']}>
                        Determined and driven, I am a relentless seeker of knowledge, constantly
                        pushing my boundaries to reach new heights of academic excellence. With
                        unwavering dedication, I embark on the challenging path of education, fueled
                        by a thirst for learning and a hunger for success.
                    </p>
                    <div className={styles['icons-div']}>
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686726331/Facebook-logo_oqj8in.png"
                            alt=""
                            className={classNames(styles.divicons, styles['icon-img'])}
                        />
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686726302/twitter_ku3vwf.png"
                            alt=""
                            className={classNames(styles.divicons, styles['icon-img'])}
                        />
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686726301/telegram_upmppy.png"
                            alt=""
                            className={classNames(styles.divicons, styles['icon-img'])}
                        />
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686726301/instagram_ndgwgf.png"
                            alt=""
                            className={classNames(styles.divicons, styles['icon-img'])}
                        />
                    </div>
                    <div className={styles.post}>
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1658078959/utot_bctyju.jpg"
                            alt=""
                            className={styles['dp-post']}
                        />
                        <input
                            className={styles['input-post']}
                            placeholder="Whats on your mind Ronald?"
                        />
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686726484/galley_xjq7uv.jpg"
                            alt=""
                            className={styles['icon-butt']}
                        />
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686726532/music_ry5k5e.png"
                            alt=""
                            className={styles['icon-butt']}
                        />
                    </div>
                    <div className={styles['timeline-post']}>
                        <div className={styles['user-post']}>
                            <img
                                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1658078959/utot_bctyju.jpg"
                                alt=""
                                className={styles['dp-border']}
                            />
                            <div className={styles['user-timeline']}>
                                <h2 className={styles['post-desc']}>Ronald Lambert Tugadi</h2>
                                <h2 className={styles['post-date']}>Junes 12, 2023</h2>
                                <h2 className={styles['post-date']}>PUP Main Campus</h2>
                            </div>
                        </div>

                        <div className={styles['post-text']}>
                            <h1 className={styles['post-title']}>Great Nature!!</h1>
                            <h1 className={styles['post-category']}>Nature</h1>
                            <h3
                                className={classNames(
                                    styles['post-caption'],
                                    styles['post-caption']
                                )}
                            >
                                This is how we cool off on a hot weather before 😍 nakakamiss naman
                                🤣 #exploreagain #woooooh
                            </h3>
                            <img
                                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725577/lagoon_iz10zd.jpg"
                                alt=""
                                className={styles['image-post']}
                            />
                        </div>
                    </div>
                    <div className={styles['timeline-post']}>
                        <div className={styles['user-post']}>
                            <img
                                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1658078959/utot_bctyju.jpg"
                                alt=""
                                className={styles['dp-border']}
                            />
                            <div className={styles['user-timeline']}>
                                <h2 className={styles['post-desc']}>Ronald Lambert Tugadi</h2>
                                <h2 className={styles['post-date']}>Junes 12, 2023</h2>
                                <h2 className={styles['post-date']}>PUP Main Campus</h2>
                            </div>
                        </div>
                        <div className={styles['post-text']}>
                            <h1 className={styles['post-title']}>FEWA</h1>
                            <h1 className={styles['post-category']}>Food</h1>
                            <h3 className={styles['post-caption']}>
                                Do you know what FEWA is? P.U.P proudly presents Footlong in Egg
                                Wrapped Around. PUP being known for excelling students and
                                professors, giving quality education for years is not just good with
                                it, but also fond of promoting and experimenting food that will
                                surely love by everyone. FEWA is originated in PUP, and you will
                                surely love the taste of it 😍
                            </h3>
                            <img
                                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725576/fewa_a4cckl.jpg"
                                alt=""
                                className={styles['image-post']}
                            />
                        </div>
                    </div>
                </div>
                <People />
            </div>
        </div>
    );
};
