import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Info from './components/Info';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
`

class App extends React.Component {

  state = {
    charities: [
      {
        category: "Medical",
        name: "St. Jude Children's Research Hospital",
        description: "The mission of St. Jude Children’s Research Hospital is to advance cures and means of prevention for childhood cancer and other pediatric diseases through research and treatment. St. Jude freely shares the discoveries it makes, allowing doctors and scientists worldwide to use that knowledge to save thousands more children."
      },
      {
        category: "Medical",
        name: "amfAR: The Foundation for AIDS Research",
        description: "amfAR, the Foundation for AIDS Research, is a nonprofit organization that is dedicated to AIDS research and HIV prevention. In addition to research and treatment education, amfAR also advocates for AIDS related policies."
      },
      {
        category: "COVID-19",
        name: "COVID-19 Response Fund (WHO)",
        description: "The World Health Organization (WHO) works worldwide to promote health, serve the vulnerable, and keep the world safe. The WHO strives to combat diseases – communicable diseases like influenza and HIV, and noncommunicable diseases like cancer and heart disease. WHO partners with countries, the United Nations system, international organizations, civil society, foundations, academia, and research institutions."
      },
      {
        category: "Social Justice",
        name: "Equal Justice Initiative",
        description: "The Equal Justice Initiative is a nonprofit organization that provides legal representation to individuals in marginalized communities who have been illegally convicted, unfairly sentenced, or abused in state jails and prisons. The Equal Justice Initiative additionally provides research to policymakers and advocates for criminal justice reform."
      },  
      {
        category: "Social Justice",
        name: "ACLU",
        description: "The American Civil Liberties Union (ACLU) aims to conserve the values of the Constitution and Bill of Rights and defend the rights of everyone in the country. A few of the many civil liberties issues that the ACLU addresses are immigration, LGBTQ rights, capital punishment, disability rights, human rights, racial justice, and women’s rights."
      },
      {
        category: "Humanitarian",
        name: "Lebanese Red Cross",
        description: "The goal of the Lebanese Red Cross is to promote peace, serve the society, and alleviate human suffering through medical services, disaster management, health education and preventative programs, and more. The Lebanese Red Cross is providing humanitarian aid and disaster response in the aftermath of the Beirut explosion."
      },
      {
        category: "Humanitarian",
        name: "UNICEF",
        description: "UNICEF works in over 190 countries and territories to save children's lives, to defend their rights, and to help them fulfill their potential from early childhood through adolescence. UNICEF supports child health and nutrition, safe water and sanitation, quality education and skill building, HIV prevention and treatment for mothers and babies, and the protection of children and adolescents from violence and exploitation."
      }
    ],
    selected: {
      name: "",
      description: ""
    }
  }

  handleSelect = (name) => {
    const charitySelected = this.state.charities.find(c => c.name === name)
    this.setState({selected: charitySelected})
  }

  render() {
    return (
      <Wrapper>
        <Sidebar handleSelect={this.handleSelect}/>
        <Info charity={this.state.selected}/>
      </Wrapper>
    );
  }
  
}
export default App;
