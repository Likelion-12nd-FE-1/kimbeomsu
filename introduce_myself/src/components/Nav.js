import React from 'react';
import styles from "./css/Nav.module.css";
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div className={styles.container}>
            <Link to="/" className={styles.links}>
                Home
            </Link>
            <Link to="/about" className={styles.links}>
                About
            </Link>
        </div>
    );
};

export default Nav;