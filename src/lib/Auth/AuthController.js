import AuthService from './AuthService'

export default class AuthController {
    static async login(req, res) {
        const { id, password } = req.body
        const loginResponse = await AuthService.loginService(id, password)
        const code = loginResponse.code
        return res.status(code).json(loginResponse)
    }

    static async register(req, res) {
        const { id, password, name } = req.body

        const registerResponse = await AuthService.registerService(id, password, name)
        const code = registerResponse.code
        return res.status(code).json(registerResponse)
    }
}
