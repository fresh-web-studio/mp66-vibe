document.addEventListener('DOMContentLoaded', function () {
    function renderPrices(items) {
        var container = document.getElementById('prices-app');
        if (!container) return;

        if (!items || !Array.isArray(items) || items.length === 0) {
            container.innerHTML = '<p style="text-align:center;color:#aaa">Нет данных</p>';
            return;
        }

        var html = '<table class="table" data-minista-client>' +
            '<colgroup>' +
            '<col class="hidden-tablet hidden-mobile col-category" style="width:15%">' +
            '<col class="col-name" style="width:40%">' +
            '<col class="hidden-metal hidden-mobile col-description" style="width:30%">' +
            '<col class="col-price" style="width:15%">' +
            '</colgroup>' +
            '<thead>' +
            '<tr>' +
            '<th class="hidden-tablet hidden-mobile"><strong>Категория</strong></th>' +
            '<th><p><strong>Наименование</strong></p></th>' +
            '<th class="hidden-metal hidden-mobile"><p><strong>Состав</strong></p></th>' +
            '<th><p><strong>Цена</strong></p></th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>';

        items.forEach(function (item) {
            var price = parseInt(item.price);
            var priceStr = isNaN(price) || price === 0 ? 'По запросу' : price.toLocaleString('ru-RU') + ' руб.';
            var category = item.category || '-';
            var name = item.name || '-';
            var description = item.description != null ? item.description : '-';

            html += '<tr>' +
                '<td class="hidden-tablet hidden-mobile">' + category + '</td>' +
                '<td>' + name + '</td>' +
                '<td class="hidden-mobile">' + description + '</td>' +
                '<td>' + priceStr + '</td>' +
                '</tr>';
        });

        html += '</tbody></table>';
        container.innerHTML = html;
    }

    fetch('/api/index.php')
        .then(function (res) {
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.json();
        })
        .then(function (data) {
            renderPrices(data);
        })
        .catch(function (err) {
            console.error('Ошибка загрузки цен:', err);
            var container = document.getElementById('prices-app');
            if (container) {
                container.innerHTML = '<p style="text-align:center;color:red">Не удалось загрузить данные</p>';
            }
        });
});
