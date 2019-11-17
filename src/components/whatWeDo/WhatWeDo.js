import React from "react"
import "./whatWeDo.scss"
import TextContainer from "../global/TextContainer"
import icon1 from "../../images/Shape 2.png"
import icon2 from "../../images/Shape 3.png"
import icon3 from "../../images/Shape 4.png"

const specializations = [
  {
    id: 1,
    title: "design",
    body:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero facilis, fuga quis tempore error sed at nemo, deserunt accusamus itaque veritatis obcaecati!",
    img: icon1,
  },
  {
    id: 2,
    title: "development",
    body:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis a laudantium minus sunt dolorum veniam enim animi suscipit unde! Perferendis voluptas harum vel cum debitis iusto? Ullam illum et impedit!",
    img: icon2,
  },
  {
    id: 3,
    title: "product management",
    body:
      ",Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad odit debitis dolorum repudiandae, temporibus harum veniam rem hic atque saepe. Nam ut, non at quas voluptates similique beatae reiciendis saepe doloremque, numquam vero blanditiis laborum quam eligendi necessitatibus expedita mollitia explicabo? Minus velit omnis ea!",
    img: icon3,
  },
]

const WhatWeDo = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <TextContainer title="what we do">
            {specializations.map(item => (
              <div key={item.id} className="specialization">
                <img src={item.img} alt="icon" />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </TextContainer>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
