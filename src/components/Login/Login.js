import React from 'react'

import Split from 'grommet/components/Split'
import Sidebar from 'grommet/components/Sidebar'
import LoginForm from 'grommet/components/LoginForm'
import Article from 'grommet/components/Article'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import Footer from 'grommet/components/Footer'
import Logo from 'grommet/components/icons/Grommet'

export default class Login extends React.PureComponent {
  render() {
    return (
      <Split flex="left" separator>
        <Article>
          <Section
            full
            colorIndex="brand"
            pad="large"
            justify="center"
            align="center"
          >
            <Heading tag="h1"><strong>Welcome</strong></Heading>
            <Paragraph>Please log in</Paragraph>
          </Section>
        </Article>

        <Sidebar justify="between" align="center" pad="none" size="large">
          <span />
          <LoginForm
            align="start"
            logo={<Logo className="logo" colorIndex="brand" />}
            title="Grommet Starter"
          />
          <Footer
            direction="row"
            size="small"
            pad={{ horizontal: 'medium', vertical: 'small' }}
          >
            <span className="secondary">Some footer copy</span>
          </Footer>
        </Sidebar>
      </Split>
    )
  }
}
