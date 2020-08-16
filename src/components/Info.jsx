import React from 'react';
import styled from 'styled-components';
import changeDonationValues from '../text_copy.js';


const Wrapper = styled.div`
  width: 60%;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
`

const Title = styled.p`
  font-size: 36px;
  font-weight: 700;
`

const Top = styled.div`
  display: flex;
  flex-direction: row;
  height: 200px;
`
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
`
const TopBox = styled.div`
  flex: 2;
`
const BottomBox = styled.div`
  margin-left: 30px;
  width: 50%;
`

const Heading = styled.p`
  font-size: 24px;
  margin: 10px 0px;
  font-weight: 600;
`

const Description = styled.p`
  font-size: 18px;
  overflow-wrap: normal;
`
const Image = styled.div`
  width: 400px;
  height: 350px;
  background-image: url(${props => props.src});
`

const DonationSide = styled.div`
  width: 200px;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const DonateButton = styled.button`
  /* text on button */
  color: #FFFFFF;
  border: none;

  /*font-family: Proxima Nova;
  font-style: normal;*/
  font-weight: 600;
  font-size: 18px;

  /* button itself */
  margin: auto;
  padding: 7px 12px;

  background: #9ABCD5;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`

class Info extends React.Component {

    render() {
      return (
        <>
            <Wrapper>
                <Title>{this.props.charity.name}</Title>
                <Top>
                  <TopBox>
                    <Heading>About</Heading>
                    <Description>{this.props.charity.description}</Description>
                  </TopBox>
                  <DonationSide>
                    <DonateButton onClick={() => changeDonationValues(this.props.charity.name)}>Donate now</DonateButton>
                  </DonationSide>
                </Top>
                <Bottom>
                  <Image src={this.props.charity.image}></Image>
                  <BottomBox>
                    <Heading>Story</Heading>
                    <Description>{this.props.charity.story}</Description>
                  </BottomBox>
                </Bottom>
            </Wrapper>
          
        </>
      );
    }
    
  }
  
  export default Info;