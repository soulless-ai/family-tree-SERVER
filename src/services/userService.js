import * as UserModel from '../models/User.js';

import { hash, hashCompare } from '../utils/hash.js';

class UserService {
    constructor() {}

    async login(userData) {
        const result = await UserModel.login(userData);
        if (!result) return { success: false };
        if (hashCompare(password, result.password)) return { success: true, token: createAuthToken(result.id) };
        return { success: false };
    }

    async register(userData) {
        return await UserModel.register(userData);
    }
}

export { UserService };