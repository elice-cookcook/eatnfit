import * as express from 'express';
import * as mysql from 'mysql';
import * as dotenv from 'dotenv';

const app = express();

dotenv.config();

const connection: mysql.ConnectionConfig = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'eatnfit'
};

connection.connect();

app.use('/', (req, res) => {
    res.send('ok');
});

app.listen(3001, () => {
    console.log('server start');
});