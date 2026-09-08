import React from 'react';

export const metadata = {
    title: 'Цены - ',
};

export default function PricesPage() {
    return (
        <div className="container non-home-page">
            <h1>Цены</h1>

            <div id="prices-app">
                <p style={{ textAlign: 'center', color: '#aaa' }}>
                    Загрузка...
                </p>
            </div>

            <p>&nbsp;</p>
            <p>
                <strong>
                    При объеме свыше 1 тонны действует спеццена.
                </strong>
            </p>
            <p>&nbsp;</p>

            <script src="/prices.js"></script>
        </div>
    );
}
