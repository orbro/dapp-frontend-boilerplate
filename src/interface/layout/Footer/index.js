/* --- Global Dependencies --- */
import React from 'react';
import styled from 'styled-components'

/* --- Local Dependencies --- */
import { Flex } from 'atomic'

/* --- Styled Component --- */
const HeaderStyled = styled.div`
  background-color: #3749a3;
  color: #FFF;
  padding: 10px 20px;
`

function Footer() {
  return (
    <HeaderStyled className="header">
      <Flex center column>
        <h3 style={{marginBottom: 10}}>Decentralized Application</h3>
        <h6 style={{marginTop: 0}}>Built by Rapid at ConsenSys</h6>
      </Flex>
    </HeaderStyled>
  );
}

export default Footer;