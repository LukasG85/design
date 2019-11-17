import React from "react"
import { graphql, StaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import "./header.scss"
import BannerContents from "./BannerContents"

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "Banner.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="header"
          className="banner"
          fluid={imageData}
          backgroundColor={`#000`}
        >
          <BannerContents />
        </BackgroundImage>
      )
    }}
  />
)

export default Header
