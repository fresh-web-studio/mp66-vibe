import Button from "@/components/Button"
import Checkbox from "@/components/Checkbox"
import Field from "@/components/Field"

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
                    <div className="map"></div>
                    <form className="fit-back__form" action="">
                        <Field
                            className="fit-back__form-cell"
                            label="Name"
                            placeholder="Имя*"
                            isRequired
                        />
                        <Field
                            className="fit-back__form-cell"
                            label="Phone"
                            placeholder="+7 (999) 999-99-99*"
                            type="tel"
                            inputMode="tel"
                            mask="+7 (000) 000-00-00"
                            isRequired
                        />
                        <Field
                            className="fit-back__form-cell"
                            label="E-mail"
                            placeholder="E-mail*"
                            type="email"
                            isRequired
                        />
                        <Field
                            className="fit-back__form-cell fit-back__form-cell--wide"
                            label="Text"
                            type="textarea"
                            placeholder="Текст*"
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