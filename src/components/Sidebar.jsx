import React from 'react';
import styled from 'styled-components';

import medicalIcon from '../assets/medical.png';
import covidIcon from '../assets/covid.png';
import justiceIcon from '../assets/justice.png';
import humanitarianIcon from '../assets/humanitarian.png';

const Wrapper = styled.div`
  width: 30%;
  margin: 30px;
`

const Amount = styled.p`
  font-size: 48px;
  font-weight: 600;
  margin: 5px 0px 30px 0px;
`
const Label = styled.p`
  font-size: 18px;
  margin: 0px;
`
const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 25px 0px;
`
const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  background: linear-gradient(180deg, #FFFFFF 18px, ${props => props.color} 18px);
`

const CategoryInfo = styled.div`
  margin-left: 25px;
`
const CategoryTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0px;
`
const Charity = styled.p`
  font-size: 18px;
  margin: 10px 0px;

  &:hover {
    cursor: pointer;
  }
`


class Sidebar extends React.Component {
 
  state = {
    ingredients: []
  }

  render() {
    return (
      <Wrapper>
        <Label>You've pledged</Label>
        <Amount>$35.00</Amount>
        <Label>Choose a charity to donate to:</Label>
        <CategoryWrapper>
          <Icon color="rgba(210, 88, 88, 0.1)"><img src={medicalIcon} alt="medical"/></Icon>
          <CategoryInfo>
            <CategoryTitle>Medical</CategoryTitle>
            <Charity onClick={() => this.props.handleSelect("St. Jude Children's Research Hospital")}>St. Jude Children's Research Hospital</Charity>
            <Charity onClick={() => this.props.handleSelect("amfAR: The Foundation for AIDS Research")}>The Foundation for AIDS Research</Charity>
          </CategoryInfo>
        </CategoryWrapper>
        <CategoryWrapper>
          <Icon color="rgba(94, 158, 72, 0.1)"><img src={covidIcon} alt="covid"/></Icon>
          <CategoryInfo>
            <CategoryTitle>COVID-19</CategoryTitle>
            <Charity onClick={() => this.props.handleSelect("COVID-19 Response Fund (WHO)")}>COVID-19 Response Fund</Charity>
          </CategoryInfo>
        </CategoryWrapper>
        <CategoryWrapper>
          <Icon color="rgba(88, 150, 185, 0.1)"><img src={justiceIcon} alt="justice"/></Icon>
          <CategoryInfo>
            <CategoryTitle>Social Justice</CategoryTitle>
            <Charity onClick={() => this.props.handleSelect("Equal Justice Initiative")}>Equal Justice Initiative</Charity>
            <Charity onClick={() => this.props.handleSelect("ACLU")}>ACLU</Charity>
          </CategoryInfo>
        </CategoryWrapper>
        <CategoryWrapper>
          <Icon color="rgba(138, 96, 181, 0.1)"><img src={humanitarianIcon} alt="humanitarian"/></Icon>
          <CategoryInfo>
            <CategoryTitle>Humanitarian</CategoryTitle>
            <Charity onClick={() => this.props.handleSelect("Lebanese Red Cross")}>Lebanese Red Cross</Charity>
            <Charity onClick={() => this.props.handleSelect("UNICEF")}>UNICEF</Charity>
          </CategoryInfo>
        </CategoryWrapper>
      </Wrapper>
    )
  }
}

export default Sidebar;