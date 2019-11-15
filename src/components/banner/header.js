import PropTypes from "prop-types"
import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "./header.scss"
import Logo from "../../images/logo.png"
import Mouse from "../../images/mouse.png"

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
          <div className="container">
            <div className="row">
              <div className="col  banner__content">
                <img src={Logo} alt="logo" />
                <h1>
                  <span>working</span> with design lab
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque iusto saepe ullam ipsum neque repellendus, sunt dicta
                  optio cumque delectus?
                </p>
              </div>
            </div>
          </div>
          <div className="row banner__mouse">
            <div className="col">
              <img className="mouse-img" src={Mouse} alt="mouse" />
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
