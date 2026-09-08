import React from 'react';
import { Head } from 'minista';

export const metadata = {
    title: 'Админка - Цены - ',
};

export default function EditPricesPage() {
    return (
        <>
            <Head>
                <script src="/edit-prices.js?v=2"></script>
            </Head>
            <div id="admin-app">
                <div id="login-screen" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    backgroundColor: '#f0f2f5'
                }}>
                    <div style={{
                        padding: '2.5rem',
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                        maxWidth: '400px',
                        width: '90%'
                    }}>
                        <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#333' }}>
                            🔐 Админ-панель
                        </h3>
                        <div id="login-message" style={{
                            textAlign: 'center',
                            marginBottom: '1.5rem',
                            padding: '8px',
                            borderRadius: '6px',
                            display: 'none'
                        }}></div>
                        <input
                            id="admin-password"
                            type="password"
                            placeholder="Введите пароль"
                            autoFocus
                            style={{
                                width: '100%',
                                padding: '12px',
                                marginBottom: '1rem',
                                boxSizing: 'border-box',
                                border: '2px solid #ddd',
                                borderRadius: '6px',
                                fontSize: '16px'
                            }}
                        />
                        <button
                            id="login-btn"
                            style={{
                                width: '100%',
                                padding: '12px',
                                backgroundColor: '#007bff',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                        >
                            Войти
                        </button>
                    </div>
                </div>

                <div id="editor-screen" style={{ display: 'none', padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h1 style={{ margin: 0 }}>✏️ Редактирование цен</h1>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button id="save-btn" style={{
                                padding: '10px 20px',
                                backgroundColor: '#28a745',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontSize: '15px',
                                fontWeight: 'bold'
                            }}>
                                💾 Сохранить все изменения
                            </button>
                            <button id="logout-btn" style={{
                                padding: '10px 20px',
                                backgroundColor: '#6c757d',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontSize: '15px'
                            }}>
                                Выйти
                            </button>
                        </div>
                    </div>

                    <div id="admin-message" style={{
                        padding: '12px 16px',
                        marginBottom: '1.5rem',
                        borderRadius: '6px',
                        display: 'none',
                        textAlign: 'center'
                    }}></div>

                    <div id="loading-message" style={{ textAlign: 'center', color: '#666' }}>Загрузка данных...</div>

                    <div id="table-container" style={{ overflowX: 'auto', display: 'none' }}>
                        <table className="table" data-minista-client style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <colgroup>
                                <col style={{ width: '15%' }} />
                                <col style={{ width: '25%' }} />
                                <col style={{ width: '35%' }} />
                                <col style={{ width: '15%' }} />
                                <col style={{ width: '10%' }} />
                            </colgroup>
                            <thead>
                                <tr style={{ backgroundColor: '#f8f9fa' }}>
                                    <th className="hidden-tablet hidden-mobile" style={{ padding: '12px', borderBottom: '2px solid #dee2e6' }}>
                                        <strong>Категория</strong>
                                    </th>
                                    <th style={{ padding: '12px', borderBottom: '2px solid #dee2e6' }}>
                                        <strong>Наименование</strong>
                                    </th>
                                    <th className="hidden-metal hidden-mobile" style={{ padding: '12px', borderBottom: '2px solid #dee2e6' }}>
                                        <strong>Состав</strong>
                                    </th>
                                    <th style={{ padding: '12px', borderBottom: '2px solid #dee2e6' }}>
                                        <strong>Цена</strong>
                                    </th>
                                    <th style={{ padding: '12px', borderBottom: '2px solid #dee2e6' }}>
                                        <strong>Действия</strong>
                                    </th>
                                </tr>
                            </thead>
                            <tbody id="prices-tbody"></tbody>
                        </table>
                    </div>

                    <p style={{ marginTop: '1.5rem', color: '#666', fontSize: '14px' }}>
                        💡 Нажмите на ячейку для редактирования. Нажмите «Сохранить» для отправки изменений на сервер.
                    </p>
                </div>
            </div>
        </>
    );
}
