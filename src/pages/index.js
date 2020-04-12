import React, { useContext } from 'react'

import {
  BoxContainer,
  WritingsBox,
  DevBox,
  SocialBox,
  MiscBox,
} from '../components/Boxes'
import SEO from '../components/seo'
import BoxContext from '../components/Boxes/Context'
import { ExternalLink } from '../components/util'
import BoxCenter from '../components/BoxCenter'
import Background from '../components/Background'

import '../styles/styles.scss'

const IndexContent = () => {
  const { closeAllBoxes } = useContext(BoxContext)

  return (
    <section className="layout" onClick={() => closeAllBoxes()}>
      <SEO
        title="Welcome to Sung's Domain 🚀"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <header>
        <h3 className="title">
          A Gatsby frontend that works at CodeSandbox
          {/* <span role="img" aria-label="wave hand">
            👋
          </span> */}
        </h3>
      </header>
      <article className="box-container">
        <BoxCenter />
        <WritingsBox />
        <DevBox />
        <SocialBox />
        <MiscBox />
      </article>
      <footer>
        <div style={{ clear: 'both' }}>
          © {new Date().getFullYear()}
          <ExternalLink url="https://www.gatsbyjs.org">
            <span style={{ margin: '0 0.5rem' }}>Gatsby site</span>
          </ExternalLink>
          forked originaly from
          <ExternalLink url="https://codesandbox.io/s/5wjy6rvn3k">
            <span style={{ margin: '0 0.5rem' }}>CodeSandbox</span>
          </ExternalLink>
        </div>
      </footer>
      <Background />
    </section>
  )
}

const IndexPage = () => (
  <BoxContainer>
    <IndexContent />
  </BoxContainer>
)

export default IndexPage
