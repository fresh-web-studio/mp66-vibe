document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    var items = [];
    var editingId = null;
    var editData = {};

    // ==================== DOM Elements ====================
    var loginScreen = document.getElementById('login-screen');
    var editorScreen = document.getElementById('editor-screen');
    var passwordInput = document.getElementById('admin-password');
    var loginBtn = document.getElementById('login-btn');
    var loginMessage = document.getElementById('login-message');
    var saveBtn = document.getElementById('save-btn');
    var logoutBtn = document.getElementById('logout-btn');
    var adminMessage = document.getElementById('admin-message');
    var loadingMessage = document.getElementById('loading-message');
    var tableContainer = document.getElementById('table-container');
    var pricesTbody = document.getElementById('prices-tbody');

    if (!loginScreen || !editorScreen) {
        console.error('Admin page elements not found');
        return;
    }

    // ==================== Login ====================
    function showLoginMessage(msg, isError) {
        loginMessage.style.display = 'block';
        loginMessage.textContent = msg;
        loginMessage.style.backgroundColor = isError ? '#f8d7da' : '#d4edda';
        loginMessage.style.color = isError ? '#721c24' : '#155724';
    }

    loginBtn.addEventListener('click', function() {
        var password = passwordInput.value.trim();
        if (!password) return;

        loginBtn.disabled = true;
        loginBtn.textContent = 'Вход...';

        fetch('/api/index.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: password }),
            credentials: 'include'
        })
        .then(function(res) { return res.json(); })
        .then(function(result) {
            if (result.success) {
                loginScreen.style.display = 'none';
                editorScreen.style.display = 'block';
                loadPrices();
            } else {
                showLoginMessage(result.error || 'Неверный пароль', true);
                passwordInput.value = '';
            }
        })
        .catch(function(err) {
            showLoginMessage('Ошибка сети: ' + err.message, true);
        })
        .finally(function() {
            loginBtn.disabled = false;
            loginBtn.textContent = 'Войти';
        });
    });

    passwordInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') loginBtn.click();
    });

    // ==================== Load Prices ====================
    function loadPrices() {
        loadingMessage.style.display = 'block';
        tableContainer.style.display = 'none';

        fetch('/api/index.php', {
            method: 'GET',
            credentials: 'include'
        })
        .then(function(res) {
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.json();
        })
        .then(function(data) {
            items = Array.isArray(data) ? data : [];
            renderTable();
            loadingMessage.style.display = 'none';
            tableContainer.style.display = 'block';
            showMessage('Загружено записей: ' + items.length, false);
        })
        .catch(function(err) {
            loadingMessage.textContent = 'Ошибка загрузки: ' + err.message;
            loadingMessage.style.color = 'red';
        });
    }

    // ==================== Render Table ====================
    function renderTable() {
        var html = '';
        items.forEach(function(item) {
            var price = parseInt(item.price);
            var priceStr = isNaN(price) || price === 0 ? 'По запросу' : price.toLocaleString('ru-RU');
            var category = item.category || '-';
            var name = item.name || '-';
            var description = item.description || '-';

            html += '<tr data-id="' + item.id + '">' +
                '<td class="hidden-tablet hidden-mobile">' + escapeHtml(category) + '</td>' +
                '<td>' + escapeHtml(name) + '</td>' +
                '<td class="hidden-mobile">' + escapeHtml(description) + '</td>' +
                '<td>' + price + ' руб.</td>' +
                '<td style="text-align:center">' +
                    '<button class="edit-row-btn" data-id="' + item.id + '" style="padding:6px 12px;background:#007bff;color:white;border:none;border-radius:4px;cursor:pointer">✏️</button>' +
                '</td>' +
                '</tr>';
        });
        pricesTbody.innerHTML = html;

        // Add click handlers
        document.querySelectorAll('.edit-row-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var id = parseInt(this.getAttribute('data-id'));
                startEdit(id);
            });
        });
    }

    // ==================== Edit Row ====================
    function startEdit(id) {
        var item = items.find(function(i) { return i.id === id; });
        if (!item) return;

        editingId = id;
        editData = {
            name: item.name,
            description: item.description || '',
            price: parseInt(item.price),
            category: item.category
        };

        var row = pricesTbody.querySelector('tr[data-id="' + id + '"]');
        if (!row) return;

        var cells = row.querySelectorAll('td');
        var html = '<td class="hidden-tablet hidden-mobile"><input type="text" class="edit-input" data-field="category" value="' + escapeHtml(editData.category) + '"></td>' +
            '<td><div style="display:flex;gap:4px"><input type="text" class="edit-input" data-field="name" value="' + escapeHtml(editData.name) + '" style="flex:1"><button class="save-row-btn" data-id="' + id + '" style="padding:4px 8px;background:#28a745;color:white;border:none;border-radius:4px;cursor:pointer">✓</button><button class="cancel-row-btn" data-id="' + id + '" style="padding:4px 8px;background:#dc3545;color:white;border:none;border-radius:4px;cursor:pointer">✕</button></div></td>' +
            '<td class="hidden-mobile"><textarea class="edit-input edit-textarea" data-field="description" rows="2">' + escapeHtml(editData.description) + '</textarea></td>' +
            '<td><div style="display:flex;gap:4px"><input type="number" class="edit-input edit-price" data-field="price" value="' + editData.price + '" style="width:100px"><button class="save-row-btn" data-id="' + id + '" style="padding:4px 8px;background:#28a745;color:white;border:none;border-radius:4px;cursor:pointer">✓</button><button class="cancel-row-btn" data-id="' + id + '" style="padding:4px 8px;background:#dc3545;color:white;border:none;border-radius:4px;cursor:pointer">✕</button></div></td>' +
            '<td style="text-align:center"><span style="color:#666;font-size:12px">Редактирование...</span></td>';

        row.innerHTML = html;

        // Focus first input
        var firstInput = row.querySelector('.edit-input');
        if (firstInput) firstInput.focus();

        // Save button
        row.querySelectorAll('.save-row-btn').forEach(function(btn) {
            btn.addEventListener('click', function() { saveRow(id); });
        });

        // Cancel button
        row.querySelectorAll('.cancel-row-btn').forEach(function(btn) {
            btn.addEventListener('click', function() { cancelEdit(); });
        });

        // Enter/Escape
        row.querySelectorAll('.edit-input').forEach(function(input) {
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') saveRow(id);
                if (e.key === 'Escape') cancelEdit();
            });
        });
    }

    function saveRow(id) {
        var row = pricesTbody.querySelector('tr[data-id="' + id + '"]');
        if (!row) return;

        var inputs = row.querySelectorAll('.edit-input');
        var updated = { id: id };

        inputs.forEach(function(input) {
            var field = input.getAttribute('data-field');
            if (field === 'price') {
                updated[field] = parseInt(input.value) || 0;
            } else {
                updated[field] = input.value;
            }
        });

        // Update items array
        var index = items.findIndex(function(i) { return i.id === id; });
        if (index !== -1) {
            items[index] = Object.assign({}, items[index], updated);
        }

        renderTable();
        showMessage('Изменения внесены. Нажмите "Сохранить" для отправки на сервер.', false);
    }

    function cancelEdit() {
        editingId = null;
        editData = {};
        renderTable();
    }

    // ==================== Save All ====================
    saveBtn.addEventListener('click', function() {
        saveBtn.disabled = true;
        saveBtn.textContent = '⏳ Сохранение...';

        fetch('/api/index.php', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(items),
            credentials: 'include'
        })
        .then(function(res) {
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.json();
        })
        .then(function(result) {
            showMessage('✓ Цены успешно сохранены!', false);
        })
        .catch(function(err) {
            showMessage('✕ Ошибка: ' + err.message, true);
        })
        .finally(function() {
            saveBtn.disabled = false;
            saveBtn.textContent = '💾 Сохранить все изменения';
        });
    });

    // ==================== Logout ====================
    logoutBtn.addEventListener('click', function() {
        editorScreen.style.display = 'none';
        loginScreen.style.display = 'flex';
        passwordInput.value = '';
        adminMessage.style.display = 'none';
    });

    // ==================== Helpers ====================
    function showMessage(msg, isError) {
        adminMessage.style.display = 'block';
        adminMessage.textContent = msg;
        adminMessage.style.backgroundColor = isError ? '#f8d7da' : '#d4edda';
        adminMessage.style.color = isError ? '#721c24' : '#155724';

        if (!isError) {
            setTimeout(function() {
                adminMessage.style.display = 'none';
            }, 5000);
        }
    }

    function escapeHtml(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }
});
