import React from "react"
import "./about.scss"
import TextContainer from "../global/TextContainer"

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <TextContainer title="about us">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              enim aspernatur, iure neque saepe earum maxime minus iusto.
              Assumenda dolores deserunt molestiae autem recusandae nostrum at
              praesentium fugit aut ullam.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              impedit assumenda recusandae culpa repellendus maxime ab omnis
              eaque quo quod veniam rerum molestias, itaque consequuntur
              repudiandae placeat suscipit obcaecati quia temporibus vel
              consequatur delectus ut fuga! Nam molestiae illo, consequuntur
              nobis amet assumenda veritatis rerum ea, officia eius voluptate
              nulla?
            </p>
          </TextContainer>
        </div>
      </div>
    </section>
  )
}

export default About
