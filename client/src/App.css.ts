import styled from 'styled-components'

export const Container = styled.div`
    padding: 20px;
`

export const Header = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.div`
    font-size: 40px;
    color: ${({ theme }) => theme.primary}
`