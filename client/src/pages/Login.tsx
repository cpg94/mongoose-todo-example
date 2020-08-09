import React, { useState } from 'react'
import { Container, Form, FormInput, FormGroup, Button, Alert } from "shards-react";
import { RouteComponentProps } from '@reach/router'
import loginService from '../utils/LoginService'

const Login: React.FC<RouteComponentProps> = () => {
    const login = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(email){
            await loginService.getMagicLink(email)
            setShowAlert(true)
        }
    }
    const [email, setEmail] = useState<string>('')
    const [showAlert, setShowAlert] = useState<boolean>(false)
    return (
    <Container>
        <Form onSubmit={login}>
            <FormGroup>
                <label htmlFor="#email">Email</label>
                <FormInput onChange={(event: React.FormEvent<HTMLInputElement>) => setEmail((event.target as HTMLInputElement).value)} id="#email" placeholder="Email" value={email} />
            </FormGroup>
            <FormGroup>
                <Button onClick={login}>Get me my magic link! <span role="img" aria-label="wizard emoji">🧙‍♂️</span></Button>
            </FormGroup>
        </Form>
        <Alert theme={'success'} dismissible={() => setShowAlert(false)} open={showAlert}>
            Check emails for your magic link!
        </Alert>
    </Container>
)}

export default Login