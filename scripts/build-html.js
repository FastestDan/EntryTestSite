import pug from 'pug';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const cardsPath = path.resolve(__dirname, '../src/data/cards.json');
const cards = JSON.parse(fs.readFileSync(cardsPath, 'utf-8'));

const menuItems = ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4', 'Опция 5', 'Опция 6', 'Опция 7', 'Опция 8'];

const template = pug.compileFile(path.resolve(__dirname, '../src/pug/index.pug'));
const html = template({ cards, menuItems });

fs.writeFileSync(path.resolve(__dirname, '../index.html'), html);
console.log('index.html сгенерирован из Pug');