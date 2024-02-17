import cluster from 'cluster';
import os from 'os';
import createWorker from './serverWorker.js';

const numCPUs = os.cpus().length;

// Запуск сервера
if (cluster.isMaster) {
    console.log(`Мастер-процесс ${process.pid} запущен...`);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', async (worker, code, signal) => {
        console.log(`Процесс ${worker.process.pid} завершён!`);
        await createWorker();
    });
} else {
    createWorker();
}