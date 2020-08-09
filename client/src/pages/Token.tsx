import React, { useEffect } from 'react'
import { navigate } from "@reach/router"
import { Container } from 'shards-react'
import { RouteComponentProps } from '@reach/router'
import loginService from '../utils/LoginService'

interface ITokenProps extends RouteComponentProps {
    token?: string;
}

const Token: React.FC<ITokenProps> = ({ token }) => {
    
    useEffect(() => {
        async function getUserViaToken(){
            if(token){
                const jsonwt = await loginService.getUserViaToken(token)
                if(jsonwt){
                    navigate(`/todos`)
                }
            }
        }
        getUserViaToken()
    }, [token])

    return (
        <Container>
            Finding user with token {token}...
        </Container>
    )
}

export default Token