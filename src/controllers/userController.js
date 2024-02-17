import { UserService } from '../services/userService.js';
import { ConfirmCodeService } from '../services/confirmCodeService.js';

class UserController {
    async login(req, res) {
        const { email, password } = req.body;
        const userData = {
            email: decodeURIComponent(email),
            password: decodeURIComponent(password)
        };
        try {
            const result = await UserService.login(userData);
            if (!result) throw new Error('Ошибка при проверке данных пользователя...');
            res.json({ success: true, message: 'Данные успешно проверены в базе данных' });
        } catch (error) {
            console.error('Произошла ошибка при проверке данных в базе данных: ', error);
            return res.json({ success: false, message: 'Ошибка при проверке данных в базе данных' });
        }
    }
    async register(req, res) {
        const { email, password } = req.body;
        const userData = {
            email: decodeURIComponent(email),
            password: decodeURIComponent(password)
        };
        try {
            const result = await UserService.register(userData);
            if (!result) throw new Error('Ошибка при регистрации данных пользователя...');
            res.json({ success: true, message: 'Данные успешно сохранены в базе данных' });
        } catch (error) {
            console.error('Произошла ошибка при сохранении данных в базе данных: ', error);
            return res.json({ success: false, message: 'Ошибка при сохранении данных в базе данных' });
        }
    }
}

export { UserController };