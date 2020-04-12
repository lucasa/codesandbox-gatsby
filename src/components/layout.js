import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

// import background from '../img/background.svg'
// import textures from 'textures'
// import setBackgroundTexture from './setBackgroundTexture'

// console.log(`background`, background)
// console.log(`xxxxxxx`)

// const back = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwMCIgaGVpZ2h0PSIzMDAwIj48ZGVmcz48cGF0dGVybiBpZD0ieGVveWYiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTSAyLjUsMi41bDUsNU03LjUsMi41bDUsLTUgTTIuNSw3LjVsLTUsNU03LjUsMTIuNWw1LC01IE0tMi41LDIuNWw1LC01IiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlPSIjMTFhYjdlNDciIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc2hhcGUtcmVuZGVyaW5nPSJhdXRvIj48L3BhdGg+PC9wYXR0ZXJuPjwvZGVmcz48cGF0aCBkPSJNIDAgMCBMIDAgMzAwMCBMIDMwMDAgMzAwMCBMIDMwMDAgMCBaIiBzdHlsZT0iZmlsbDogdXJsKCZxdW90OyN4ZW95ZiZxdW90Oyk7Ij48L3BhdGg+PC9zdmc+`

// // doesn't work... with gatsby...
// // https://riccardoscalco.it/textures/
// setBackgroundTexture(
//   textures
//     .paths()
//     .d('woven')
//     .lighter()
//     .thicker()
//     .stroke('#11ab7e47')
// )

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="gatsby-root">
          {children}
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
