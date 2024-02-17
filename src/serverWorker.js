import express from 'express';
import https from 'https';
import cors from 'cors';
import config from './config.js';

import { logRequest } from './middlewares/loggerMiddleware.js';

import AuthRouter from './routes/authRouter.js';

import { errorHandler } from './middlewares/errorMiddleware.js';

const createWorker = async () => {
    const app = express();

    app.use(cors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    }));
    app.use(express.urlencoded({ extended: true, limit: '10mb', parameterLimit: 1000000 }));
    app.use(express.json());
    app.use(function (req, res, next) {
        res.header('Content-Type',  'application/json; charset=UTF-8');
        next();
    });

    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Что-то вызвало ошибку на стороне сервера!');
    });

    app.use(logRequest);

    app.use(AuthRouter);
    
    app.use(errorHandler);


    https.createServer(app).listen(config.serverPort, config.serverDomain, () => {
        console.log(`Процесс ${process.pid} запущен и слушает порт ${config.serverPort} ...`);
    });
};

export default createWorker;