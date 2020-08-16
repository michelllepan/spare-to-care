import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Info from './components/Info';
import Welcome from './components/Welcome';
import styled from 'styled-components';

import ejiPic from './assets/eji.jpg';

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
  height: 100%;
`

class App extends React.Component {

  state = {
    charities: [
      {
        category: "Medical",
        name: "St. Jude Children's Research Hospital",
        description: "The mission of St. Jude Children’s Research Hospital is to advance cures and means of prevention for childhood cancer and other pediatric diseases through research and treatment. St. Jude freely shares the discoveries it makes, allowing doctors and scientists worldwide to use that knowledge to save thousands more children.",
        image: ejiPic,
        story: ""
      },
      {
        category: "Medical",
        name: "amfAR: The Foundation for AIDS Research",
        description: "amfAR, the Foundation for AIDS Research, is a nonprofit organization that is dedicated to AIDS research and HIV prevention. In addition to research and treatment education, amfAR also advocates for AIDS related policies.",
        image: ejiPic,
        story: "As of 2019, 38 million people across the globe were living with HIV/AIDS. Despite scientific advancement of HIV treatment and prevention, there are many people without access to HIV treatment or care, and there is still no cure. amfAR has funded studies that were critical in the development of treatments and preventative research, which have saved the lives of countless people globally who were infected by HIV/AIDS."
      },
      {
        category: "COVID-19",
        name: "COVID-19 Response Fund (WHO)",
        description: "The World Health Organization (WHO) works worldwide to promote health, serve the vulnerable, and keep the world safe. The WHO strives to combat diseases – communicable diseases like influenza and HIV, and noncommunicable diseases like cancer and heart disease. WHO partners with countries, the United Nations system, and research institutions.",
        image: ejiPic,
        story: ""
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
        image: ejiPic,
        story: ""
      },
      {
        category: "Humanitarian",
        name: "Lebanese Red Cross",
        description: "The goal of the Lebanese Red Cross is to promote peace, serve the society, and alleviate human suffering through medical services, disaster management, health education and preventative programs, and more. The Lebanese Red Cross is providing humanitarian aid and disaster response in the aftermath of the Beirut explosion.",
        image: ejiPic,
        story: ""
      },
      {
        category: "Humanitarian",
        name: "UNICEF",
        description: "UNICEF works in over 190 countries and territories to save children's lives, defend their rights, and help them fulfill their potential. UNICEF supports child health and nutrition, safe water and sanitation, quality education and skill building, HIV prevention and treatment for mothers and babies, and the protection of children and adolescents from violence and exploitation.",
        image: ejiPic,
        story: "After nine years of conflict, the Syrian crisis continues to have a huge impact on children inside Syria, across the region and beyond. Every Syrian child has been impacted by the violence, displacement, severed family ties and lack of access to vital services caused by massive physical devastation. UNICEF and partners are on the ground in Syria and across the region working to protect children, to help them cope with the impact of conflict and to resume their childhoods. This includes improving access to education and psychosocial support services to help children and caregivers to recover from trauma and to restore a sense of normalcy, as well as delivering critical humanitarian assistance in hard-to-reach areas."
      }
    ],
    selected: null
  }

  handleSelect = (name) => {
    const charitySelected = this.state.charities.find(c => c.name === name)
    if (this.state.selected && charitySelected.name === this.state.selected.name) {
      this.setState({selected: null})
    } else {
      this.setState({selected: charitySelected})
    }
    
  }

  render() {
    if (this.state.selected === null) {
      return (
        <Wrapper>
          <Sidebar handleSelect={this.handleSelect}/>
          <Welcome />
        </Wrapper>
      )
    } else {
      return (
        <Wrapper>
          <Sidebar handleSelect={this.handleSelect}/>
          <Info charity={this.state.selected}/>
        </Wrapper>
      );
    }
    
  }
  
}
export default App;
