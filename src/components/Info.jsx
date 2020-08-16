import React from 'react';
import styled from 'styled-components';
import changeDonationValues from '../text_copy.js';


const Wrapper = styled.div`
  width: 60%;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  padding: 00px 60px;
  display: flex;
  flex-direction: column;
  transition: opacity 1s;
  opacity: 1;

  &.hide{
    opacity: 0;
  }
`

const Title = styled.p`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
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
  justify-content: flex-start;
  padding-top: 50px;
`
const DonationBox = styled.div`
  background-color: ${props => props.color};
  border-radius: 7px;
  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Donateq = styled.p`
  font-size: 14px;
  margin: 0px 5px 10px 5px;
`
const DonateButton = styled.button`
  /* text on button */
  color: #ffffff;
  border: none;

  font-weight: 600;
  font-size: 18px;

  /* button itself */
  padding: 7px 12px;

  background: ${props => props.color};
  border-radius: 5px;

  &:hover {
    background: #000000;
    cursor: pointer;
    
  }
`

class Info extends React.Component {

  getColor() {
    switch(this.props.charity.category) {
      case "Medical":
        return "rgb(210, 88, 88)"
      case "COVID-19":
        return "rgb(94, 158, 72)"
      case "Social Justice":
        return "rgb(88, 150, 185)"
      case "Humanitarian":
        return "rgb(138, 96, 181)"
      default:
        return "rgb(88, 150, 185)"
    }
  }

  getTransparent() {
    switch(this.props.charity.category) {
      case "Medical":
        return "rgba(210, 88, 88, 0.1)"
      case "COVID-19":
        return "rgba(94, 158, 72, 0.1)"
      case "Social Justice":
        return "rgba(88, 150, 185, 0.1)"
      case "Humanitarian":
        return "rgba(138, 96, 181, 0.1)"
      default:
        return "rgba(88, 150, 185, 0.1)"
    }
  }

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
                  <DonationBox color={this.getTransparent()}>
                    <Donateq><i>Do you want to donate ${this.props.pledge.toFixed(2)}?</i></Donateq>
                    <DonateButton color={this.getColor()} onClick={() => changeDonationValues(this.props.charity.name, this.props.pledge)}>Donate now</DonateButton>
                  </DonationBox>
                </DonationSide>
              </Top>
              <Bottom>
                <Image src={this.props.charity.image}></Image>
                <BottomBox>
                  <Heading>Their story</Heading>
                  <Description>{this.props.charity.story}</Description>
                </BottomBox>
              </Bottom>
          </Wrapper>
        
      </>
    );
    }
    
  }
  
  export default Info;