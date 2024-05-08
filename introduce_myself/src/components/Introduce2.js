import React from 'react';
import styles from './css/Introduce2.module.css';
import Nav from './Nav';
import About from './About'
const Introduce2 = () => {
    return (
        <div className={styles.container}>
            <Nav/>
            <About/>
        </div>
    );
};

export default Introduce2;