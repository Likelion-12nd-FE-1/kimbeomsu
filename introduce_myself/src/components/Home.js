import React from 'react';
import styles from './css/Home.module.css';
import devEmoji from "../images/devEmoji.png";
const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.hello}>
                안녕하세요!
            </div>
            <img className={styles.dev_emoji} src={devEmoji} alt='emoji'/>
            <div className={styles.hello}>
                저는 멋쟁이사자처럼 12기 FE트랙에 참여하고 있는 김범수입니다!
            </div>
            
        </div>
    );
};

export default Home;