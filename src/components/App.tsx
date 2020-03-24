import * as React from 'react';
import {FunctionComponent} from "react";

import Modal from "./Modal";
import {useState} from "react";

const App: FunctionComponent = () => {
    const [isModalOpened, setModalOpened] = useState(false);
    const closeModal = () => {
        setModalOpened(false);
    };
    return (
        <>
            <div>
                <Modal title='Компонент Modal' close={closeModal} show={isModalOpened}>
                    React-компонент с использованием TypeScript.
                    Для использования компонента требуется передать 3 обязательных и 1 необязательный парамерты:
                    <ul>
                        <li>title - строка</li>
                        <li>close - функция, закрывающая модальное окно</li>
                        <li>show - булева для отображения/скрытия окна</li>
                        <li>children? - внутреннее содержимое компонента, помимо заголовка и кнопки.</li>
                    </ul>
                </Modal>
                <button onClick={() => setModalOpened(true)}>CLICK</button>
                <h1>Welcome to React with Typescript</h1>
                <p>The color of this page is: 1</p>
            </div>
        </>
    )
};

export default App;