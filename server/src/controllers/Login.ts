import express from 'express';
import nodemailer from 'nodemailer';
import { uuid } from 'uuidv4';
import User from '../models/User'

class LoginController {
    requestMagicToken = async (req: express.Request, res: express.Response) => {
        const email = req.body.email;
        try { 
            if(email){
                let user = await User.findOne({ email });
                if(!user){
                    user = await User.create({ email })
                }
                const magicToken = uuid()
                await User.updateOne({ _id: user._id }, { magicToken })
    
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                      user: 'nodemailer.cg@gmail.com',
                      pass: '2FBBpHWk#n$W8X'
                    }
                });
                  
                const mailOptions = {
                    from: 'nodemailer.cg@gmail.com',
                    to: email,
                    subject: '//TODO',
                    html: `Heres your login! <br></br> http://localhost:3000/token/${magicToken}`
                };
                await transporter.sendMail(mailOptions)
                res.status(200).send()
                return
            }
            throw new Error('No email address provided')
        } catch (err) {
            res.send(err)
        }
    }
}

export default LoginController;