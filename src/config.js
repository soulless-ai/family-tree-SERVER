export default {
    serverDomain: 'server-hk59.onrender.com',
    serverPort: process.env.PORT || 3000,
    poolClients: {
        user: 'db_ivgy_user',
        host: 'dpg-cn84h9ol5elc738r3c70-a.oregon-postgres.render.com',
        database: 'db_ivgy  ',
        password: 'KK7fvyHyTFtKIN00l5UAIeX7FEJYk3gj',
        port: 5432,
        ssl: {
            rejectUnauthorized: true
        }
    },
};