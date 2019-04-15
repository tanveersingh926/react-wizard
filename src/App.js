import React, { Component } from 'react'
import './App.css'
import Wizard, { WizardPage } from './Wizard'

const Page = ({ children, ...props }) => (
  <div>{console.log(props)}{children}</div>
)
class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      allProps: ''
    }
  }

  render () {
    return (
      <div>
        <Wizard innerProps={(props) => { this.setState({ allProps: props }) }}>
          <WizardPage>
            <Page>1 this is <b>page one</b></Page>
          </WizardPage>

          <WizardPage>
            <Page>2</Page>
          </WizardPage>
          <WizardPage>
            <Page>3</Page>
          </WizardPage>
        </Wizard>
      </div>
    )
  }
}

export default App
