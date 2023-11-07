import styles from './footer.module.scss';
import classNames from 'classnames/bind';

import logoImg from '~/assets/image/logo/starNovaLogo.png';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('top-container')}>
                <a href="logo" className={cx('logo-wrapper')}>
                    <img alt="logo" src={logoImg}></img>
                </a>
                <div className={cx('content')}>
                    <div className={cx('page-lists')}>
                        <a className={cx('list')} href="#list">
                            Trade
                        </a>
                        <a className={cx('list')} href="#list">
                            Home
                        </a>
                        <a className={cx('list')} href="#list">
                            Pools
                        </a>
                        <a className={cx('list')} href="#list">
                            Docs
                        </a>
                    </div>
                </div>
                <div className={cx('text-wrapper')}>
                    <a href="#policy">PRIVACY POLICY</a>
                    <a href="#policy" style={{ marginLeft: 15 }}>
                        TERMS OF SERVICE
                    </a>
                </div>
            </div>
            <div className={cx('white-line')}></div>
            <div className={cx('bottom-container')}>
                <p>© 2023 Alien Base. All rights reserved</p>
                <p>Alien Base is developed and managedinde <br/> pendently of the Coinbase / Base team </p>
            </div>
        </footer>
    );
}

export default Footer;
