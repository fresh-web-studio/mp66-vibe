import React, { useState, useEffect, useRef } from 'react';
import './PricesTable.scss';

export default function PricesTable({ items, onUpdateItem }) {
    const [editingId, setEditingId] = useState(null);
    const [editData, setEditData] = useState({});
    const inputRef = useRef(null);

    useEffect(() => {
        if (editingId && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editingId]);

    const startEdit = (item) => {
        setEditingId(item.id);
        setEditData({
            name: item.name,
            description: item.description || '',
            price: item.price,
            category: item.category,
        });
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditData({});
    };

    const saveEdit = () => {
        if (!onUpdateItem) return;

        onUpdateItem({
            id: editingId,
            name: editData.name,
            description: editData.description || null,
            price: parseInt(editData.price) || 0,
            category: editData.category,
        });
        cancelEdit();
    };

    const handleInputChange = (field, value) => {
        setEditData(prev => ({ ...prev, [field]: value }));
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') saveEdit();
        if (e.key === 'Escape') cancelEdit();
    };

    if (!items || !Array.isArray(items) || items.length === 0) {
        return null;
    }

    return (
        <>
            {items.map((item) => {
                const isEditing = editingId === item.id;

                return (
                    <tr key={item.id}>
                        <td className="hidden-tablet hidden-mobile">
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={editData.category}
                                    onChange={(e) => handleInputChange('category', e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="edit-input"
                                />
                            ) : (
                                item.category || '-'
                            )}
                        </td>

                        <td>
                            {isEditing ? (
                                <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={editData.name}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        className="edit-input"
                                        style={{ flex: 1 }}
                                    />
                                    <button onClick={saveEdit} className="btn-save" title="Сохранить">✓</button>
                                    <button onClick={cancelEdit} className="btn-cancel" title="Отмена">✕</button>
                                </div>
                            ) : (
                                <div
                                    className="editable-cell"
                                    onClick={() => startEdit(item)}
                                    style={{ cursor: 'pointer' }}
                                    title="Нажмите для редактирования"
                                >
                                    {item.name || '-'}
                                </div>
                            )}
                        </td>

                        <td className="hidden-mobile">
                            {isEditing ? (
                                <textarea
                                    value={editData.description}
                                    onChange={(e) => handleInputChange('description', e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="edit-input edit-textarea"
                                    rows={2}
                                />
                            ) : (
                                <div
                                    className="editable-cell"
                                    onClick={() => startEdit(item)}
                                    style={{ cursor: 'pointer' }}
                                    title="Нажмите для редактирования"
                                >
                                    {item.description || '-'}
                                </div>
                            )}
                        </td>

                        <td>
                            {isEditing ? (
                                <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                                    <input
                                        type="number"
                                        value={editData.price}
                                        onChange={(e) => handleInputChange('price', e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        className="edit-input edit-price"
                                        style={{ width: '100px' }}
                                    />
                                    <button onClick={saveEdit} className="btn-save" title="Сохранить">✓</button>
                                    <button onClick={cancelEdit} className="btn-cancel" title="Отмена">✕</button>
                                </div>
                            ) : (
                                <div
                                    className="editable-cell"
                                    onClick={() => startEdit(item)}
                                    style={{ cursor: 'pointer' }}
                                    title="Нажмите для редактирования"
                                >
                                    {parseInt(item.price) === 0 ? 'По запросу' : parseInt(item.price).toLocaleString('ru-RU') + ' руб.'}
                                </div>
                            )}
                        </td>
                    </tr>
                );
            })}
        </>
    );
}
