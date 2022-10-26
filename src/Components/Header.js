import React from 'react'
import styled from "styled-components"
import PersonIcon from '@mui/icons-material/Person';
import AppsIcon from '@mui/icons-material/Apps';

function Header() {
  return (
    <Container>
        <ContentContainer>
            <p>About</p>
            <p>Store</p>
        </ContentContainer>
        <ContentContainer>
            <p>Gmail</p>
            <p>Images</p>
            <AppsIcon className="left-margin" />
            <PersonIcon className="left-margin" />
        </ContentContainer>
    </Container>
  )
}

export default Header

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
    align-items: center;
`

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    p {
        margin-right: 20px;
        font-size: 15px;
    }
    .left-margin {
        margin-left: 20px;
    }
`

