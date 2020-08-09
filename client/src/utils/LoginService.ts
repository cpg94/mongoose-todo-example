import jwt from 'jsonwebtoken'
import BaseFetch from './BaseFetch'

class Login extends BaseFetch {
    getMagicLink = async (email: string) => {
        const req = await this.fetch('login/magic-token', {
            body: JSON.stringify({ email }),
            method: 'POST'
        })
        return req
    }

    getUserViaToken = async (magicToken: string) => {
        const req = await this.fetch('user/token', {
            body: JSON.stringify({ magicToken }),
            method: 'POST'
        })
        const json = await req.json()
        if(json && json.webtoken){
            const user = jwt.verify(json.webtoken, 'superdupersecret')
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('token', json.webtoken)
            return json.webtoken
        }
        return null
    }
}

export default new Login()