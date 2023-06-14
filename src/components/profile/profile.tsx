import styles from './profile.module.scss';
import classNames from 'classnames';
import { Navbar1 } from '../navbar-1/navbar-1';
import { Sidebar } from '../sidebar/sidebar';
import { People } from '../people/people';

export interface ProfileProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Profile = ({ className }: ProfileProps) => {
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
                        />
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725577/pangarap_qpk16a.jpg"
                            alt=""
                            className={styles['photos-img']}
                        />
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725577/lagoon_iz10zd.jpg"
                            alt=""
                            className={styles['photos-img']}
                        />
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725577/erica_story_wvnmrq.jpg"
                            alt=""
                            className={styles['photos-img']}
                        />
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725576/calauan_phxa5x.jpg"
                            alt=""
                            className={styles['photos-img']}
                        />
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1657729318/privateroom_pugvkn.jpg"
                            alt=""
                            className={styles['photos-img']}
                        />
                    </div>
                    <h2 className={classNames(styles['left-text'], styles['left-text'])}>
                        Friends
                    </h2>
                    <div className={styles.photos}>
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725577/jen_zgamjt.jpg"
                            alt=""
                            className={styles['photos-img']}
                        />
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725576/Erica_prjcln.jpg"
                            alt=""
                            className={styles['photos-img']}
                        />
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725577/karlos_f4eahv.jpg"
                            alt=""
                            className={styles['photos-img']}
                        />
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725639/hanz_mpnmar.png"
                            alt=""
                            className={styles['photos-img']}
                        />
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686725576/calauan_phxa5x.jpg"
                            alt=""
                            className={styles['photos-img']}
                        />
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1657729318/privateroom_pugvkn.jpg"
                            alt=""
                            className={styles['photos-img']}
                        />
                    </div>
                </div>
                <div className={styles['profile-timeline']}>
                    <div className={styles['profile-cover']}>
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1686550075/wallpaper_aiz2y6.jpg"
                            alt=""
                            className={styles.cover}
                        />
                    </div>
                    <div className={styles['dp-container']}>
                        <img
                            src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1658078959/utot_bctyju.jpg"
                            alt=""
                            className={styles.dp}
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
                <div className={styles['right-side']}>
                    <People />
                </div>
            </div>
        </div>
    );
};
