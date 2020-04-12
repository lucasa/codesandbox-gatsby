import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import favicon from '../favicon.png'

function SEO({ description, lang, meta, keywords, title }) {
  /*https://github.com/gatsbyjs/gatsby/issues/2987#issuecomment-404972215 */
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            link={[
              { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
            ]}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          >
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Space+Mono"
            />

            <link
              rel="stylesheet"
              href="//cdn.rawgit.com/necolas/normalize.css/master/normalize.css"
            />
            <link
              rel="stylesheet"
              href="//cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css"
            />

            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.6.3/css/solid.css"
              integrity="sha384-+0VIRx+yz1WBcCTXBkVQYIBVNEFH1eP6Zknm16roZCyeNg2maWEpk/l/KsyFKs7G"
              crossorigin="anonymous"
            />
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.6.3/css/brands.css"
              integrity="sha384-1KLgFVb/gHrlDGLFPgMbeedi6tQBLcWvyNUN+YKXbD7ZFbjX6BLpMDf0PJ32XJfX"
              crossorigin="anonymous"
            />
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.6.3/css/fontawesome.css"
              integrity="sha384-jLuaxTTBR42U2qJ/pm4JRouHkEDHkVqH0T1nyQXn1mZ7Snycpf6Rl25VBNthU4z0"
              crossorigin="anonymous"
            />
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
