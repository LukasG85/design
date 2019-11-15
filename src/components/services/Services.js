import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "./services.scss"
import TextContainer from "../global/TextContainer"

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "Banner2.jpg" }) {
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
          Tag="section"
          className="services"
          fluid={imageData}
          backgroundColor={`#000`}
        >
          <div className="container">
            <div className="row">
              <TextContainer title="about us">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptas unde nam sed iure porro, dolorum repellendus cumque
                  ipsam vitae incidunt asperiores, tenetur recusandae deleniti
                  possimus! Facere sit ipsa natus eveniet voluptas et quod,
                  provident libero omnis fuga sequi, aliquid veritatis.
                </p>
              </TextContainer>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default Header
