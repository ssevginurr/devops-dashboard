const express = require('express');
const app = express();
const path = require('path');

// Şimdilik versiyonumuz bu, güncelleyince burayı değiştireceğiz
const APP_VERSION = "v1.0 (Başlangıç)";
const BACKGROUND_COLOR = "#2c3e50"; // Koyu Mavi

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="tr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sevgi'nin DevOps Paneli</title>
        <style>
            body {
                background-color: ${BACKGROUND_COLOR};
                color: white;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
                margin: 0;
            }
            .card {
                background: rgba(255, 255, 255, 0.1);
                padding: 40px;
                border-radius: 20px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                text-align: center;
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255,255,255,0.2);
            }
            h1 { margin: 0 0 20px 0; font-size: 2.5rem; }
            .badge {
                background-color: #e74c3c;
                padding: 10px 20px;
                border-radius: 50px;
                font-weight: bold;
                font-size: 1.2rem;
            }
            p { color: #bdc3c7; margin-top: 20px; }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>🚀 DevOps Dashboard</h1>
            <div class="badge">${APP_VERSION}</div>
            <p>Bu proje GitHub Actions ile <b>OTOMATİK</b> yüklendi!</p>
            <p>Şu anki Sunucu Tarihi: ${new Date().toLocaleString('tr-TR')}</p>
        </div>
    </body>
    </html>
    `);
});

app.listen(80, () => {
    console.log('Sunucu çalışıyor...');
});