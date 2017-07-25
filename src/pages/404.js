import React from 'react'
import Split from 'grommet/components/Split'
import Article from 'grommet/components/Article'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'

export default () => (
  <Split flex="left" separator>
    <Article>
      <Section
        full
        colorIndex="brand"
        pad="large"
        justify="center"
        align="center"
      >
        <Heading tag="h1"><strong>404</strong></Heading>
        <Paragraph>You just hit a route that doesn't exist... the sadness.</Paragraph>
      </Section>
    </Article>
  </Split>
)
