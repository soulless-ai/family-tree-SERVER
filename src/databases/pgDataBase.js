import pkg from 'pg';
const { Pool } = pkg;
import config from '../config.js';

const createPool = (poolConfig) => new Pool(poolConfig);

export const executeQuery = async (pool, query, values, errorMessage) => {
    let client;
    try {
        client = await pool.connect();
        const result = await client.query(query, values);
        return result;
    } catch (error) {
        console.error(`${errorMessage}: ${error}`);
        return null;
    } finally {
        if (client) {
            client.release();
        }
    }
};

export const createPoolClients = async () => createPool({
    user: config.poolClients.user,
    host: config.poolClients.host,
    database: config.poolClients.database,
    password: config.poolClients.password,
    port: config.poolClients.port,
    ssl: {
        rejectUnauthorized: config.poolClients.ssl.rejectUnauthorized
    }
});

export const createPoolService = async () => createPool({
    user: config.poolService.user,
    host: config.poolService.host,
    database: config.poolService.database,
    password: config.poolService.password,
    port: config.poolService.port,
    ssl: {
        rejectUnauthorized: config.poolService.ssl.rejectUnauthorized
    }
});