/* global chrome */

import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Info from './components/Info';
import Welcome from './components/Welcome';
import styled from 'styled-components';

import {ReactComponent as Logo} from './assets/logo.svg';
import {ReactComponent as HelpIcon} from './assets/help.svg';

import stjudePic from './assets/stjude.jpg';
import aidsPic from './assets/aids.png';
import covidPic from './assets/covid19.png';
import ejiPic from './assets/eji.jpg';
import acluPic from './assets/aclu.png';
import lebanonPic from './assets/lebanon.png';
import unicefPic from './assets/unicef.png';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
  height: fill;
`
const MainPage = styled.div`
  display: flex;
  flex-direction: row;
`
const TopBar = styled.div`
  background-color: ${props => props.color};
  height: 60px;

  display: flex;
  flex-direction: row;
  align-items: center;
`
const SpareToCare = styled.p`
  font-size: 20px;
  color: #ffffff;
  align-self: center;

  &:hover {
    cursor: pointer;
  }
`
const LogoWrapper = styled.div`
  padding-right: 15px;
  margin-left: 30px;
  margin-top: 4.5px;
  align-self: center;

  &:hover {
    cursor: pointer;
  }
`

const HelpIconWrapper = styled.div`
  position: absolute;
  right: 0px;
  padding-right: 30px;
  margin-left: 15px;
  margin-top: 4.5px;
  align-self: center;
  

  &:hover {
    cursor: pointer;
  }
`



class App extends React.Component {

  state = {
    pledge: 35,
    charities: [
      {
        category: "Medical",
        name: "St. Jude Children's Research Hospital",
        description: "The mission of St. Jude Children’s Research Hospital is to advance cures and means of prevention for childhood cancer and other pediatric diseases through research and treatment. St. Jude freely shares the discoveries it makes, allowing doctors and scientists worldwide to use that knowledge to save thousands more children.",
        image: stjudePic,
        story: "In 2015, Brinley was diagnosed with acute myeloid leukemia. Her treatment at a local hospital included a bone marrow transplant after she relapsed. Brinley was cancer free for more than two years when, in May 2019, her family learned the cancer had returned. Brinley’s family obtained a referral to St. Jude Children’s Research Hospital, where her treatment included chemotherapy and a haploidentical transplant, with her mom as donor. Now finished with treatment, 9-year-old Brinley returns to St. Jude for regular checkups. She’s an energetic, feisty girl who loves babies and wants to be a neonatologist when she grows up."
      },
      {
        category: "Medical",
        name: "amfAR: The Foundation for AIDS Research",
        description: "amfAR, the Foundation for AIDS Research, is a nonprofit organization that is dedicated to AIDS research and HIV prevention. In addition to research and treatment education, amfAR also advocates for AIDS related policies.",
        image: aidsPic,
        story: "As of 2019, 38 million people across the globe were living with HIV/AIDS. Despite scientific advancement of HIV treatment and prevention, there are many people without access to HIV treatment or care, and there is still no cure. amfAR has funded studies that were critical in the development of treatments and preventative research, which have saved the lives of countless people globally who were infected by HIV/AIDS."
      },
      {
        category: "COVID-19",
        name: "COVID-19 Response Fund (WHO)",
        description: "The World Health Organization (WHO) works worldwide to promote health, serve the vulnerable, and keep the world safe. The WHO strives to combat diseases – communicable diseases like influenza and HIV, and noncommunicable diseases like cancer and heart disease. WHO partners with countries, the United Nations system, and research institutions.",
        image: covidPic,
        story: "Since February 2020, WHO has provided approximately US $4.2 million worth of COVID-19 supplies and equipment to Afghanistan, a country with a health system facing severe challenges. A shipment worth US $1.6 million, includes 9.5 tons of personal protective equipment (gloves, gowns, surgical masks, face shields, goggles), 10 PCR machines, 100 oxygen concentrator machines, 100 stretchers, 319 RNA extraction kits, micropipettes, pipette tip filters, biosafety cabinet and other critical items. This latest WHO shipment will bolster efforts to keep frontline medical staff safe and improve testing capacity in the country."
      },
      {
        category: "Social Justice",
        name: "Equal Justice Initiative",
        description: "The Equal Justice Initiative is a nonprofit organization that provides legal representation to individuals in marginalized communities who have been illegally convicted, unfairly sentenced, or abused in state jails and prisons. The Equal Justice Initiative additionally provides research to policymakers and advocates for criminal justice reform.",
        image: ejiPic,
        story: "Thirty years ago, Anthony Ray Hinton was wrongly arrested and charged with two capital murders based solely on the claim that a revolver taken from his mother’s home was the gun used in both murders. He spent 30 years on death row for a crime he did not commit because of racial bias, inadequate counsel, and prosecutorial indifference to innocence. Equal Justice Initiative (EJI) attorneys helped to prove his innocence, and in 2015 he was finally freed. Now, Mr. Hinton works as an EJI Community Educator, and is an outspoken advocate for the abolition of the death penalty."
      },  
      {
        category: "Social Justice",
        name: "ACLU",
        description: "The American Civil Liberties Union (ACLU) aims to conserve the values of the Constitution and Bill of Rights and defend the rights of everyone in the country. A few of the many civil liberties issues that the ACLU addresses are immigration, LGBTQ rights, capital punishment, disability rights, human rights, racial justice, and women’s rights.",
        image: acluPic,
        story: "The ACLU works to defend the civil liberties of all people, and has participated in more Supreme Court cases than any other private organization. Some of their recent notable efforts include their successful takedown of a voter suppression law in North Carolina (2016), halting the Trump Transgender Military Ban (2017), and 56 lawsuits against the Trump Administration concerning immigrant rights, reproductive freedom, discrimination against the LGBT community, and more."
      },
      {
        category: "Humanitarian",
        name: "Lebanese Red Cross",
        description: "The goal of the Lebanese Red Cross is to promote peace, serve the society, and alleviate human suffering through medical services, disaster management, health education and preventative programs, and more. The Lebanese Red Cross is providing humanitarian aid and disaster response in the aftermath of the Beirut explosion.",
        image: lebanonPic,
        story: "Upon the unprecedented explosion that occurred in the Beirut port on August 4, more than 150 people lost their lives, more than 6000 were injured, and dozens went missing. Nearly 300,000 people are left homeless, including 80,000 children, due to the destruction or damage to their homes. 4 hospitals have been damaged and are out of service, including transferring patients from these hospitals to other hospitals outside Beirut. The Lebanese Red Cross is working to provide emergency medical services and disaster recovery efforts to those affected."
      },
      {
        category: "Humanitarian",
        name: "UNICEF",
        description: "UNICEF works in over 190 countries and territories to save children's lives, defend their rights, and help them fulfill their potential. UNICEF supports child health and nutrition, safe water and sanitation, quality education and skill building, HIV prevention and treatment for mothers and babies, and the protection of children and adolescents from violence and exploitation.",
        image: unicefPic,
        story: "After nine years of conflict, the Syrian crisis continues to have a huge impact on children inside Syria, across the region and beyond. Every Syrian child has been impacted by the violence, displacement, severed family ties and lack of access to vital services caused by massive physical devastation. UNICEF and partners are on the ground in Syria and across the region working to protect children, to help them cope with the impact of conflict and to resume their childhoods. This includes improving access to education and psychosocial support services to help children and caregivers to recover from trauma and to restore a sense of normalcy, as well as delivering critical humanitarian assistance in hard-to-reach areas."
      }
    ],
    selected: null
  }

  componentDidMount = () => {
    chrome.storage.local.get(["accumulated"], (result) => this.setState({pledge: result.accumulated}));
  }

  getColor() {
    if (this.state.selected === null) {
      return "#363636";
    }
    switch(this.state.selected.category) {
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

  handleSelect = (name) => {
    const charitySelected = this.state.charities.find(c => c.name === name)
    if (this.state.selected && charitySelected.name === this.state.selected.name) {
      this.setState({selected: null})
    } else {
      this.setState({selected: charitySelected})
    }
    
  }

  // exitSite(){
  //   window.location.href = "google.com";
  // }

  render() {
    if (this.state.selected === null) {
      return (
        <Wrapper>
          <TopBar color={this.getColor()}>
            <LogoWrapper>
              <Logo/>
            </LogoWrapper>
            
            <SpareToCare>Spare to Care</SpareToCare>
            <HelpIconWrapper>
              <HelpIcon/>
            </HelpIconWrapper>
            
          </TopBar>
          <MainPage>
            <Sidebar pledge={this.state.pledge} handleSelect={this.handleSelect}/>
            <Welcome pledge={this.state.pledge}/>
          </MainPage>
        </Wrapper>
      )
    } else {
      return (
        <Wrapper>
          <TopBar color={this.getColor()}>
            <LogoWrapper>
              <Logo onClick={() => this.setState({selected:null})}/>
            </LogoWrapper>
            <SpareToCare onClick={() => this.setState({selected:null})}>Spare to Care</SpareToCare>
            <HelpIconWrapper>
            <HelpIcon/>
            </HelpIconWrapper>
          </TopBar>
          <MainPage>
            <Sidebar pledge={this.state.pledge} handleSelect={this.handleSelect}/>
            <Info pledge={this.state.pledge} charity={this.state.selected}/>
          </MainPage>
        </Wrapper>
      );
    }
    
  }
  
}
export default App;
