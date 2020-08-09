import express from 'express';
import jwt from 'jsonwebtoken'
import User from '../models/User'
import { SUPER_DUPER_SECRET } from '../config';

class UserController {
    getViaToken = async (req: express.Request, res: express.Response) => {
        const token = req.body.magicToken;
        try { 
            if(token){
                const user = await User.findOne({ magicToken: token });
                if(!user){
                    res.status(403).send({ message: 'User not found'})
                    return
                }
                await User.updateOne({ _id: user._id }, { magicToken: '' })
                const webtoken = jwt.sign({
                    data: JSON.stringify({ user })
                  }, SUPER_DUPER_SECRET, { expiresIn: '1h' });
                res.status(200).send({ webtoken })
                return                
            }
            throw new Error('No token provided')
        } catch (err) {
            res.send(err)
        }
    }
}

export default UserController;