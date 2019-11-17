import React from "react"
import "./works.scss"
import img1 from "../../images/img1.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"
import img4 from "../../images/img5.jpg"
import img5 from "../../images/img4.jpg"
import img6 from "../../images/img6.jpg"

const worksItems = [
  {
    id: 1,
    title: "works",
    img: img1,
  },
  {
    id: 2,
    title: "join",
    img: img2,
  },
  {
    id: 3,
    title: "market",
    img: img3,
  },
  {
    id: 4,
    title: "worktop",
    img: img4,
  },
  {
    id: 5,
    title: "lable",
    img: img5,
  },
  {
    id: 6,
    title: "kiyew",
    img: img6,
  },
]

const Works = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row works">
          {worksItems.map(item => (
            <div key={item.id} className="works__item">
              <img src={item.img} alt="background" />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works
