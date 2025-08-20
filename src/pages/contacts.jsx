export const metadata = {
    title: 'Контакты - ',
}

export default () => {
    return (
        <>
            <div className="container">
                <h1>Контакты</h1>
                <div className="contacts">
                    <div className="contacts__city">Нижний Тагил</div>
                    <div>ул.Краснознаменная, 55</div>
                    <div className="contacts__time">без выходных 9:00 - 19:00</div>
                    <div className="contacts__tel">+7 (912) 229-09-85, +7 (912) 030-85-08</div>
                    <div className="contacts__mail">mail@mp66.ru</div>
                </div>
                <div className="map">

                </div>
                <div className="fit-back">
                    <h2 className="fit-back__title">Обратная связь</h2>
                    <div className="fit-back__form">

                    </div>
                </div>

            </div>

        </>
    )
}