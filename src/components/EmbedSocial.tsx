import React, { useEffect } from "react";
import PropTypes from "prop-types";

interface EmbedSocialProps {
  refId: string;
}

export function EmbedSocial({ refId }: EmbedSocialProps) {
  const loadScript = (src: string) => {
    const tag = document.createElement("script");
    tag.src = src;
    document.body.appendChild(tag);
  }

  useEffect(() => {
    loadScript("https://embedsocial.com/embedscript/ri.js");
  } , []);

  return (
    <div className="embedsocial-reviews" data-ref={refId} />
  );
}

EmbedSocial.propTypes = {
  refId: PropTypes.string.isRequired,
};
