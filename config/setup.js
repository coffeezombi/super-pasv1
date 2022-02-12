import 'dotenv/config'
import AuthHelper from "../helpers/auth.helper";

before(async function () {
    const authHepler = new AuthHelper()
    await authHepler.login(process.env.LOGIN, process.env.PASSWORD)

    process.env['TOKEN'] = authHepler.response.body.token
})

