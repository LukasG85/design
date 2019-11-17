import React from "react"
import "./contact.scss"
import TextContainer from "../global/TextContainer"

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <TextContainer title="contact us">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              quaerat in odit ratione delectus id soluta officia qui at
              exercitationem.
            </p>
            <button className="btn">contact us</button>
          </TextContainer>
        </div>
      </div>
    </section>
  )
}

export default Contact
