const fs = require('fs');
const path = require('path');

// Путь к dist папке (market.js лежит в корне, dist рядом)
const distDir = path.join(__dirname, 'dist');
const xmlPath = path.join(distDir, 'market.xml');

// URL API для получения цен (передаётся через переменную окружения)
const apiUrl = process.env.API_URL || 'http://localhost/api/index.php';

function getFormattedDateTime() {
    const date = new Date();
    const yyyy = String(date.getFullYear());
    const MM = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    return `${yyyy}-${MM}-${dd} ${hh}:${mm}`;
}

function escapeXml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

async function generateMarketXml() {
    try {
        // Получаем данные из API
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('HTTP ' + response.status);
        }

        const prices = await response.json();

        if (!Array.isArray(prices) || prices.length === 0) {
            throw new Error('Нет данных для генерации');
        }

        let xml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE yml_catalog SYSTEM "shops.dtd">
<yml_catalog date="${getFormattedDateTime()}">
  <shop>
    <name>Компания Металлпром</name>
    <company>OOO «Компания Металлпром»</company>
    <url>https://mp66.ru</url>
    <currencies>
      <currency id="RUR" rate="1"/>
    </currencies>
    <categories>
      <category id="1">Металлолом</category>
    </categories>
    <offers>`;

        prices.forEach((item, index) => {
            const price = parseInt(item.price);
            if (isNaN(price) || price === 0) return;

            const name = escapeXml(item.name || '');
            const description = escapeXml(item.description || '');
            const category = escapeXml(item.category || '');

            xml += `
        <offer id="${item.id}" available="true">
          <name>${name}</name>
          <price>${price}</price>
          <currencyId>RUR</currencyId>
          <categoryId>1</categoryId>
          <description>${description}</description>
          <param name="Категория">${category}</param>
          <param name="Состав">${description}</param>
        </offer>`;
        });

        xml += `
    </offers>
  </shop>
</yml_catalog>`;

        // Создаём папку dist если нет
        if (!fs.existsSync(distDir)) {
            fs.mkdirSync(distDir, { recursive: true });
        }

        // Записываем XML
        fs.writeFileSync(xmlPath, xml, 'utf-8');

        console.log(`${getFormattedDateTime()} - Файл market.xml успешно создан (${prices.length} записей).`);
    } catch (err) {
        console.error('Ошибка:', err.message);
        process.exit(1);
    }
}

generateMarketXml();
