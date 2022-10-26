import React from 'react'
import styled from "styled-components"
import Header from "./Header"
import Body from "./Body"

function Home() {
  return (
    <Container>
        <Header />
        <Body />
    </Container>
  )
}

export default Home

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`