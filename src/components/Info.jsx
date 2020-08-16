import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 60%;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
`

const Title = styled.p`
  font-size: 36px;
  font-weight: 700;
`

const About = styled.p`
  font-size: 24px;
  margin: 10px 0px;
`

const Description = styled.p`
  font-size: 18px;
  overflow-wrap: normal;
`

class Info extends React.Component {

    render() {
      return (
        <>
            <Wrapper>
                <Title>{this.props.charity.name}</Title>
                <About>About</About>
                <Description>{this.props.charity.description}</Description>
            </Wrapper>
          
        </>
      );
    }
    
  }
  
  export default Info;