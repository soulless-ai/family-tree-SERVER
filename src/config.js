export default {
    serverDomain: 'sellerkeep.ru',
    serverPort: process.env.PORT || 3000,
    poolClients: {
        user: 'db_ivgy_user',
        host: 'dpg-cn84h9ol5elc738r3c70-a',
        database: 'db_ivgy  ',
        password: 'KK7fvyHyTFtKIN00l5UAIeX7FEJYk3gj',
        port: 5432,
        ssl: {
            rejectUnauthorized: true
        }
    },
};