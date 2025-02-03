"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { cardsQuest } = require('./data');
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const fs = require('fs');
const filePath = `${__dirname}/orders.txt`;
app.use(express.static('public')); //middleware для фото
app.use(cors());
app.get('/quests', (req, res) => {
    res.json(cardsQuest);
});
app.get('/quests/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const quest = cardsQuest.find(el => el.id === id);
    if (quest) {
        res.json(quest);
    }
    else {
        res.status(404).json({ message: 'Квест не найден' });
    }
});
app.use(express.json()); // middleware для читаемости обьектов
const getNextOrderId = () => {
    if (!fs.existsSync(filePath))
        return 1;
    const data = fs.readFileSync(filePath, 'utf8').trim();
    const lastLine = data.split('\n').pop();
    const match = lastLine === null || lastLine === void 0 ? void 0 : lastLine.match(/ID: (\d+)/);
    return match ? Number(match[1]) + 1 : 1;
};
app.post('/order', (req, res) => {
    const { name, phone, participants } = req.body;
    if (!name || !phone || !participants) {
        return res.status(400).json({ message: 'Нужно заполнить все поля' });
    }
    const newId = getNextOrderId();
    const orderData = `ID: ${newId}, Name: ${name}, Phone: ${phone}, Player count: ${participants}\n`;
    fs.appendFile(filePath, orderData, (err) => {
        if (err) {
            console.error('Ошибка записи:', err);
            return res.status(500).json({ message: 'Ошибка сервера' });
        }
        res.status(201).json({ message: 'Бронирование успешно' });
    });
});
app.listen(PORT, () => {
    console.log(`Сервер на порту http://localhost:${PORT}`);
});
