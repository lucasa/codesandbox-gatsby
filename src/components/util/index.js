import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

function ExternalLink({ url, ...rest }) {
  const preventBoxFromClosing = e => {
    e.stopPropagation()
    return false
  }

  // For rel="noreferrer", refer to
  // https://developers.google.com/web/tools/lighthouse/audits/noopener#recommendations
  return (
    <OutboundLink
      href={url}
      onClick={preventBoxFromClosing}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    />
  )
}

export { ExternalLink }
