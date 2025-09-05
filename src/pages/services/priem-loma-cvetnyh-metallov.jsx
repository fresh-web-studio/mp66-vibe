import Button from "@/components/Button"
import Checkbox from "@/components/Checkbox"
import Field from "@/components/Field"
import cvetnyhImgSrc from '@/assets/images/services/lom2.jpg'

export const metadata = {
    title: 'Прием лома цветных металлов - ',
}

export default () => {
    return (
        <>

            <div className="container non-home-page">
                <h1>Прием лома цветных металлов</h1>
                <div className="services-info">
                    <img
                        className="services-info__image"
                        src={cvetnyhImgSrc}
                        alt=""
                        width="755"
                        height="467"
                        loading="lazy"
                    />
                    <div className="services-info__description">
                        <p>Имеем собственные пункты приема, лабораторию экспресс-анализа и погрузочно-разгрузочную технику. Оперативно произведем скупку любого объема металла в заранее согласованное время.</p>
                        <p>Мы принимаем следующие виды цветного металлолома:</p>
                        <ul>
                            <li>алюминий (пищевой,профиль, моторный, электротехнический);</li>
                            <li>медь, в том числе кабель;</li>
                            <li>латунь и бронзу (микс,радиаторы);</li>
                            <li>свинец (переплавленный и кабельный).</li>
                            <li>цинк</li>
                        </ul>
                        <p><strong>Прием лома цветного металла</strong></p>
                        <p>Ненужный металлический хлам, скопившийся в гараже или даже на балконе, можно легко превратить в неплохой доход. <strong>Прием лома цветного металла в Нижнем Тагиле</strong> и на территории <strong>Свердловской области</strong> осуществляет ООО «Компания МеталлПром». Чтобы договориться о продаже металлолома, необходимо оставить заявку на сайте или позвонить по телефону.</p>
                        <p>В пункте приемки готовы выкупить металлолом любого объема. Небольшие партии можно доставить прямо в пункт приемки, а крупную партию специалисты готовы вывезти самостоятельно.</p>
                        <p>Для больших объемов металлолома компания предлагает специальную цену. В качестве цветмета принимается лом:</p>
                        <ul>
                            <li>меди;</li>
                            <li>латуни;</li>
                            <li>алюминия;</li>
                            <li>нержавеющей стали;</li>
                            <li>свинца и других металлов.</li>
                        </ul>
                        <p><strong>Цена за лом цветного металла</strong></p>
                        <p>Важным принципом является чистота металла, ведь именно от нее зависит <strong>цена за металлолом</strong> в Нижнем Тагиле. Самыми дорогими считаются предметы из сплава меди и латуни, чуть меньшую прибыль можно получить от продажи алюминия.</p>
                        <p>Самым дешевым считается никель, однако если в недорогом металле не будет примесей и загрязнений, он может быть оценен не хуже дорогостоящих сплавов. А металлы с большим количеством примесей будут стоить гораздо дешевле чистого сырья.</p>
                    </div>
                    <div className="fit-back">
                        <h2 className="fit-back__title">Обратная связь</h2>
                        <div className="map"></div>
                        <form
                            className="fit-back__form"
                            name="Страница прием лома цветных металлов"
                            data-netlify="true"
                            method="post"
                        >
                            <Field
                                className="fit-back__form-cell"
                                label="Тема:"
                                placeholder="Тема*"
                                type="hidden"
                                name="subject"
                                value="Новый лид с сайта МеталлПром %{formName} (%{submissionId})"
                                isRequired
                            />
                            <Field
                                className="fit-back__form-cell"
                                label="Имя:"
                                placeholder="Имя*"
                                name="name"
                                isRequired
                            />
                            <Field
                                className="fit-back__form-cell"
                                label="Телефон:"
                                placeholder="+7 (999) 999-99-99*"
                                type="tel"
                                inputMode="tel"
                                mask="+7 (000) 000-00-00"
                                name="phone"
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
            </div>
        </>
    )
}