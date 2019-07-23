/* --- Global Dependencies --- */
import React from 'react';
import { Router } from "@reach/router"
import styled from 'styled-components'

/* --- Local Dependencies --- */
import { Container } from 'atomic'

/* --- Styled Component --- */
const MainStyled = styled.div`
background-color: #FFF;
color: #3749a3;
padding: 80px 80px;
`

/* --- Component --- */
function Main() {
  return (
    <MainStyled className="header">
      <Container>
      <Router>
        <Home path="/" />
        <Dashboard path="/dashboard" />
      </Router>
      </Container>
    </MainStyled>
  );
}

export default Main;


const Home = props =>
<>
<h1>Home</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim risus justo, ac blandit eros fermentum sit amet. Mauris suscipit arcu sem, ac ultrices nulla venenatis quis. Mauris vulputate mattis ipsum dictum dignissim. Aliquam feugiat dui vel odio ultricies feugiat. Aliquam a urna nibh. Maecenas ut justo ac libero malesuada pharetra. Phasellus id est non sem volutpat porta. Aliquam erat volutpat. Nunc pulvinar scelerisque justo, non pharetra ante gravida quis. Proin et dolor enim. Morbi dapibus ornare ultrices. Sed aliquet arcu ultricies nunc dictum pellentesque. Nunc feugiat dolor eget eros elementum venenatis. Aliquam faucibus risus sed lacus ullamcorper rhoncus. Phasellus in justo vel magna ultricies facilisis vitae quis augue.</p>

<p>In nec suscipit velit. Quisque vitae ante suscipit, sollicitudin purus ac, viverra est. Morbi vitae rutrum enim. Nullam molestie mollis congue. Phasellus molestie euismod odio, sit amet accumsan augue auctor nec. Nam sed turpis arcu. Integer interdum scelerisque diam nec ultricies. In hac habitasse platea dictumst. Aliquam vel commodo arcu. Ut metus leo, viverra ac tempor eget, feugiat vel magna. Vestibulum eu nunc ligula. Aenean lectus est, ullamcorper id neque tristique, maximus auctor magna. Suspendisse sed augue sed dolor dictum efficitur.</p>

<h3>Home Description</h3>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim risus justo, ac blandit eros fermentum sit amet. Mauris suscipit arcu sem, ac ultrices nulla venenatis quis. Mauris vulputate mattis ipsum dictum dignissim. Aliquam feugiat dui vel odio ultricies feugiat. Aliquam a urna nibh. Maecenas ut justo ac libero malesuada pharetra. Phasellus id est non sem volutpat porta. Aliquam erat volutpat. Nunc pulvinar scelerisque justo, non pharetra ante gravida quis. Proin et dolor enim. Morbi dapibus ornare ultrices. Sed aliquet arcu ultricies nunc dictum pellentesque. Nunc feugiat dolor eget eros elementum venenatis. Aliquam faucibus risus sed lacus ullamcorper rhoncus. Phasellus in justo vel magna ultricies facilisis vitae quis augue.</p>

<p>In nec suscipit velit. Quisque vitae ante suscipit, sollicitudin purus ac, viverra est. Morbi vitae rutrum enim. Nullam molestie mollis congue. Phasellus molestie euismod odio, sit amet accumsan augue auctor nec. Nam sed turpis arcu. Integer interdum scelerisque diam nec ultricies. In hac habitasse platea dictumst. Aliquam vel commodo arcu. Ut metus leo, viverra ac tempor eget, feugiat vel magna. Vestibulum eu nunc ligula. Aenean lectus est, ullamcorper id neque tristique, maximus auctor magna. Suspendisse sed augue sed dolor dictum efficitur.</p>
</>

const Dashboard = props =>
<>
<h1>Dashboard</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim risus justo, ac blandit eros fermentum sit amet. Mauris suscipit arcu sem, ac ultrices nulla venenatis quis. Mauris vulputate mattis ipsum dictum dignissim. Aliquam feugiat dui vel odio ultricies feugiat. Aliquam a urna nibh. Maecenas ut justo ac libero malesuada pharetra. Phasellus id est non sem volutpat porta. Aliquam erat volutpat. Nunc pulvinar scelerisque justo, non pharetra ante gravida quis. Proin et dolor enim. Morbi dapibus ornare ultrices. Sed aliquet arcu ultricies nunc dictum pellentesque. Nunc feugiat dolor eget eros elementum venenatis. Aliquam faucibus risus sed lacus ullamcorper rhoncus. Phasellus in justo vel magna ultricies facilisis vitae quis augue.</p>

<p>In nec suscipit velit. Quisque vitae ante suscipit, sollicitudin purus ac, viverra est. Morbi vitae rutrum enim. Nullam molestie mollis congue. Phasellus molestie euismod odio, sit amet accumsan augue auctor nec. Nam sed turpis arcu. Integer interdum scelerisque diam nec ultricies. In hac habitasse platea dictumst. Aliquam vel commodo arcu. Ut metus leo, viverra ac tempor eget, feugiat vel magna. Vestibulum eu nunc ligula. Aenean lectus est, ullamcorper id neque tristique, maximus auctor magna. Suspendisse sed augue sed dolor dictum efficitur.</p>

<h3>Dashboard Description</h3>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim risus justo, ac blandit eros fermentum sit amet. Mauris suscipit arcu sem, ac ultrices nulla venenatis quis. Mauris vulputate mattis ipsum dictum dignissim. Aliquam feugiat dui vel odio ultricies feugiat. Aliquam a urna nibh. Maecenas ut justo ac libero malesuada pharetra. Phasellus id est non sem volutpat porta. Aliquam erat volutpat. Nunc pulvinar scelerisque justo, non pharetra ante gravida quis. Proin et dolor enim. Morbi dapibus ornare ultrices. Sed aliquet arcu ultricies nunc dictum pellentesque. Nunc feugiat dolor eget eros elementum venenatis. Aliquam faucibus risus sed lacus ullamcorper rhoncus. Phasellus in justo vel magna ultricies facilisis vitae quis augue.</p>

<p>In nec suscipit velit. Quisque vitae ante suscipit, sollicitudin purus ac, viverra est. Morbi vitae rutrum enim. Nullam molestie mollis congue. Phasellus molestie euismod odio, sit amet accumsan augue auctor nec. Nam sed turpis arcu. Integer interdum scelerisque diam nec ultricies. In hac habitasse platea dictumst. Aliquam vel commodo arcu. Ut metus leo, viverra ac tempor eget, feugiat vel magna. Vestibulum eu nunc ligula. Aenean lectus est, ullamcorper id neque tristique, maximus auctor magna. Suspendisse sed augue sed dolor dictum efficitur.</p>
</>