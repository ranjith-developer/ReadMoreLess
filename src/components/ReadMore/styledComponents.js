// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 24px;
`

export const ReactHeading = styled.h1`
    font-family: 'Roboto'
    color: #1e293b;
    margin-bottom: 0px;
`

export const Caption = styled.p`
font-family: 'Roboto'
    color: #334155;
`

export const Image = styled.img`
  width: 50%;
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  color: #334155;
`

export const Button = styled.button`
  background-color: #1f81ff;
  color: #ffffff;
  border: none;
  font-size: 12px;
  border-radius: 12px;
  padding: 8px;
  width: 100px;
  cursor: pointer;
`
