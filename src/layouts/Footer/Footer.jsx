import './Footer.scss'

const Footer = () => {
    const menuItems = [
        {
            title: 'Адреса',
            links: ['Нижний Тагил', 'ул.Краснознаменная, 55'],
        },
        {
            title: 'Телефоны',
            links: ['+7 (912) 229-09-85', '+7 (912) 030-85-08'],
            href: ['tel:%2B7%28912%29229-09-85', 'tel:%2B7%28912%29030-85-08'],
        },
        {
            title: 'Работаем',
            links: ['Без выходных 9:00 - 19:00'],
        },
        {
            title: 'E-mail',
            links: ['mail@mp66.ru'],
            href: ['mailto:mail@mp66.ru'],
        },
    ]
    return (
        <footer className='footer'>
            <div className="footer__inner container">
                <nav className="footer__menu">
                    {menuItems.map(({ title, links, href }, index) => (
                        <div className="footer__menu-column" key={index}>
                            <p className="footer__menu-title h3">{title}</p>
                            {links?.length > 0 && (
                                <ul className="footer__menu-list">
                                    {links.map((link, i) => (
                                        <li className="footer__menu-item" key={i}>
                                            {href ? <a className="footer__menu-link" href={href[i]}>{link}</a> : <span className="footer__menu-text">{link}</span>}
                                        </li>
                                    ))}

                                </ul>
                            )}
                        </div>
                    ))}
                </nav>
                <div className="footer__extra">
                    <p className="footer__copyright">
                        © OOO «Компания Металлпром», <time dataTime="2017-2025">2017-2025</time>. <a className="footer__extra-links" href="/security">Политика информационной безопасности</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer