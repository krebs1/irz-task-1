import React from 'react';
import Style from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={`${Style.Footer} side-padding`}>
            <div className={Style.Footer_left}>
                <a className={Style.Footer_left_link}>@99designs</a>
                <a className={Style.Footer_left_link}>Terms</a>
                <a className={Style.Footer_left_link}>Privacy</a>
                <a className={Style.Footer_left_link}>Sitemap</a>
            </div>
            <div className={Style.Footer_right}>
                <a className={Style.Footer_right_link}>English</a>
                <a className={Style.Footer_right_link}>Espanol</a>
            </div>
        </footer>
    );
};

export default Footer;