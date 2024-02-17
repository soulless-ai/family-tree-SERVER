import { executeQuery, createPoolClients } from '../databases/pgDataBase.js';

export const login = async (userData) => {
    const poolClients = await createPoolClients();
    const query = 'SELECT name, password FROM clients WHERE name = $1';
    const values = [userData.name];
    const result = await executeQuery(poolClients, query, values, 'Ошибка при проверке учетных данных пользователя в PostgreSQL: ');
    return result && result.rows.length > 0 ? result.rows[0] : null;
};
export const register = async (userData) => {
    const poolClients = await createPoolClients();
    const query = 'INSERT INTO clients (name, password) VALUES ($1, $2, NOW()) RETURNING id';
    const values = [userData.name, userData.password];
    const result = await executeQuery(poolClients, query, values, 'Ошибка при добавлении данных пользователя в PostgreSQL: ');
    return result && result.rows.length > 0 ? parseInt(result.rows[0].id, 10) : null;
}