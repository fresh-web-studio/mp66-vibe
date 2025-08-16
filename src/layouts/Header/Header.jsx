import './Header.scss'
import Logo from '@/components/Logo'
import classNames from 'classnames'
import BurgerButton from '@/components/BurgerButton'
import Button from '@/components/Button'


const Header = (props) => {
    const {
        url,
    } = props

    const menuItems = [
        {
            label: 'О компании',
            href: '/o-kompanii',
        },
        {
            label: 'Услуги',
            href: '/services',
        },
        {
            label: 'Цены',
            href: '/prices',
        },
        {
            label: 'Контакты',
            href: '/contacts',
        },
    ]
    return (
        <header className="header">
            <div className="header__contacts hidden-mobile container">
                <div>Нижний Тагил, ул.Краснознаменная, 55</div>
                <div><a href="tel:%2B7%28912%29229-09-85">+7 (912) 229-09-85</a>, <a href="tel:%2B7%28912%29030-85-08">+7 (912) 030-85-08</a></div>
                <div>без выходных 9:00 - 19:00</div>
            </div>
            <div className="header__inner container">
                <Logo
                    className="header__logo"
                    loading="eager"
                />
                <dialog className="header__overlay-menu-dialog">
                    <nav className="header__menu">
                        <ul className="header__menu-list">
                            {menuItems.map(({ label, href }, index) => (
                                <li className="header__menu-item" key={index}>
                                    <a
                                        className={classNames('header__menu-link', {
                                            'is-active': href === url,
                                        })}
                                        href={href}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="header__actions"></div>
                </dialog>

                <BurgerButton
                    className="header__burger-button visible-mobile" />
            </div>


        </header>
    )
}

export default Header