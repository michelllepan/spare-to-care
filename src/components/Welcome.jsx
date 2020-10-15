import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 69%;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: auto;
`
const Heading = styled.p`
  font-size: 24px;
`
const Impact = styled.p`
  font-size: 36px;
  font-weight: 600px;
  margin-top: 5px;
`

class Welcome extends React.Component {

  calculateAmounts() {
    const one = "provide lifesaving vaccinations for " + Math.round(this.props.pledge * 54 / 10) + " children";
    const two = Math.round(this.props.pledge * 54 / 10) + " children";
    const three = "children";
  }
 
  render() {
    return (
      <Wrapper>
        <Content>
          <Heading>A ${this.props.pledge.toFixed(2)} donation could...</Heading>
          <Impact>provide lifesaving vaccinations for {Math.round(this.props.pledge * 54 / 10)} children</Impact>
        </Content>
      </Wrapper>
    )
  }
}

export default Welcome;