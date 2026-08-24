import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cards = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'src/data/cards.json'), 'utf-8'));
const totalCards = cards.length;

export default defineConfig({
    root: path.resolve(__dirname),
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `$total-cards: ${totalCards};`
            }
        }
    },
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
            },
        },
    },
    base: '/',
});