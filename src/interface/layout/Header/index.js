/* --- Global Dependencies --- */
import React from 'react';
import { Link } from "@reach/router";
import styled from 'styled-components'

/* --- Local Dependencies --- */
import { Button, Flex } from 'atomic'
/* --- Styled Component --- */

const HeaderStyled = styled.div`
  background-color: #3749a3;
  color: #FFF;
  padding: 10px 20px;
`

function Header() {
  return (
    <HeaderStyled className="header">
      <Flex between>
        <h3>Decentralized Application</h3>
        <Menu/>
        <Button>Login</Button>
      </Flex>
    </HeaderStyled>
  );
}

const Menu = props =>
<Flex between align='center' width={200}>
  <Link to="/"><span style={{color: '#FFF'}} >Home</span></Link>
  <Link to="/dashboard"><span style={{color: '#FFF'}}>Dashboard</span></Link>
  <Link to="/about"><span style={{color: '#FFF'}}>About</span></Link>
</Flex>

export default Header;