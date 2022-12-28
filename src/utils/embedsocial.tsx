import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

interface EmbedSocialProps {
  refId: string
}

export function EmbedSocial({ refId }: EmbedSocialProps) {
  const loadScript = (src: string) => {
    const tag = document.createElement('script')
    tag.src = src
    document.body.appendChild(tag)
  }

  useEffect(() => {
    loadScript(
      'https://reviewsonmywebsite.com/js/v2/embed.js?id=8e7313fc946fd3d8c15c886f791a7ab8',
    )
  }, [])

  return <div data-romw-token={refId} />
}

EmbedSocial.propTypes = {
  refId: PropTypes.string.isRequired,
}
