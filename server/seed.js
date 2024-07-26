import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

db.query(`
    CREATE TABLE IF NOT EXISTS guess_Book (
    id SERIAL PRIMARY KEY,
    Emoji TEXT,
    Username TEXT,
    Message TEXT
);

INSERT INTO guess_book (emoji, username, message) VALUES
('😀', 'Spongebob said:', 'Hello, world!'),
('😡', 'Squarepants said:', 'Please leave a message after the beep!'),
('😢', 'Spongebob said:', 'Beeeeep!'),
('😀', 'Alien said:', 'hi');`);
