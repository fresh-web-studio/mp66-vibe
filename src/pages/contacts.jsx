import Button from "@/components/Button"
import Checkbox from "@/components/Checkbox"
import Field from "@/components/Field"

export const metadata = {
    title: 'Контакты - ',
}

export default () => {
    return (
        <>
            <div className="container non-home-page">
                <h1>Контакты</h1>
                <div className="contacts">
                    <div className="contacts__city">Нижний Тагил</div>
                    <div>ул.Краснознаменная, 55</div>
                    <div className="contacts__time">без выходных 9:00 - 19:00</div>
                    <div className="contacts__tel">+7 (912) 229-09-85, +7 (912) 030-85-08</div>
                    <div className="contacts__mail">mail@mp66.ru</div>
                </div>
                <div className="map">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab28648cd7fde7627c53afec8d1d2ba035bf186325485620926a30e419cbc382f&amp;source=constructor" width="100%" height="480" frameborder="0"></iframe>
                </div>
                <div className="fit-back">
                    <h2 className="fit-back__title">Обратная связь</h2>
                    <div className="map"></div>
                    <form
                        className="fit-back__form"
                        name="page-contacts"
                        netlify="">
                        <Field
                            className="fit-back__form-cell"
                            label="Name"
                            placeholder="Имя*"
                            name="name"
                            isRequired
                        />
                        <Field
                            className="fit-back__form-cell"
                            label="Phone"
                            placeholder="+7 (999) 999-99-99*"
                            type="tel"
                            inputMode="tel"
                            mask="+7 (000) 000-00-00"
                            name="phone"
                            isRequired
                        />
                        <Field
                            className="fit-back__form-cell"
                            label="E-mail"
                            placeholder="E-mail*"
                            type="email"
                            name="email"
                            isRequired
                        />
                        <Field
                            className="fit-back__form-cell fit-back__form-cell--wide"
                            label="Text"
                            type="textarea"
                            placeholder="Текст*"
                            name="text"
                            isRequired
                        />

                        <div className="fit-back__form-cell fit-back__form-cell--wide fit-back__form-cell--actions">
                            <Checkbox
                                className="fit-back__form-agreement"
                                label="Принимаю условия политики информационной безопасности"
                                isRequired
                            />
                        </div>
                        <Button
                            className="fit-back__form-submit-button"
                            label="Отправить"
                            type="submit"
                        />
                    </form>
                </div>

            </div>

        </>
    )
}