import React from "react"
import styled from "styled-components"

const Container = styled.div`
    height: 60px;
    padding-bottom: 50px;
    border-bottom: 1px solid;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 45px;
  font-weight: bold;
  font-family: 'Helvetica Neue'
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>limehome</Logo>
                </Left>
            </Wrapper>
        </Container>
    )
}

export default Navbar
