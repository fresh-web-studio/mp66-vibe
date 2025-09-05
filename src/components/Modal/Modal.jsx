import './Modal.scss'
import Button from "@/components/Button"
import Checkbox from "@/components/Checkbox"
import Field from "@/components/Field"

const Modal = () => {

    return (
        <dialog
            className="fit-back__dialog"
            id="modalMore"
            data-js-modal-more-dialog=""
        >
            <div className="fit-back">
                <div className="fit-back__header">
                    <h2 className="fit-back__title">Узнать цену лома</h2>
                    <div className="fit-back__close">
                        <img src="data:image/svg+xml,%3csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.0035%2013L25.3506%203.65245C25.6077%203.39513%2025.7496%203.05184%2025.75%202.68578C25.75%202.31952%2025.6081%201.97582%2025.3506%201.71891L24.5315%200.900011C24.274%200.642084%2023.9307%200.500824%2023.5642%200.500824C23.1984%200.500824%2022.8551%200.642084%2022.5976%200.900011L13.2504%2010.247L3.90285%200.900011C3.64573%200.642084%203.30224%200.500824%202.93598%200.500824C2.57012%200.500824%202.22663%200.642084%201.96951%200.900011L1.15%201.71891C0.616667%202.25225%200.616667%203.11973%201.15%203.65245L10.4974%2013L1.15%2022.3472C0.892683%2022.6049%200.751016%2022.9482%200.751016%2023.3142C0.751016%2023.6803%200.892683%2024.0236%201.15%2024.2811L1.96931%2025.1C2.22642%2025.3577%202.57012%2025.4992%202.93577%2025.4992C3.30203%2025.4992%203.64553%2025.3577%203.90264%2025.1L13.2502%2015.7529L22.5974%2025.1C22.8549%2025.3577%2023.1982%2025.4992%2023.564%2025.4992H23.5644C23.9305%2025.4992%2024.2738%2025.3577%2024.5313%2025.1L25.3504%2024.2811C25.6075%2024.0238%2025.7494%2023.6803%2025.7494%2023.3142C25.7494%2022.9482%2025.6075%2022.6049%2025.3504%2022.3474L16.0035%2013Z'%20fill='black'/%3e%3c/svg%3e" alt="close" data-js-modal-more-button-close />
                    </div>
                </div>

                <form
                    className="fit-back__form"
                    name="Модальное окно"
                    data-netlify="true"
                    action="/thank-you"
                    method="post"
                >
                    <input type="hidden" name="subject"
                        value="Новый лид с сайта МеталлПром. Форма:%{formName} (%{submissionId})" />
                    <Field
                        className="fit-back__form-cell"
                        label="Имя:"
                        placeholder="Имя*"
                        name="Name"
                        isRequired
                    />
                    <Field
                        className="fit-back__form-cell"
                        label="E-mail:"
                        placeholder="E-mail*"
                        type="email"
                        name="email"
                        isRequired
                    />
                    <Field
                        className="fit-back__form-cell fit-back__form-cell--wide"
                        label="Текст соощения:"
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
        </dialog>
    )
}


export default Modal
