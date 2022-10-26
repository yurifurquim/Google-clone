import React from 'react'
import styled from "styled-components"
import Search from "./Search"

function Body() {
  return (
    <Container>
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" />
        <div>
            <Search/>
        </div>
    </Container>
  )
}

export default Body

const Container = styled.div`
    flex: 1;
    display: flex;
    margin-top: 10%;
    flex-direction: column;
    img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 5px;
    }
`
