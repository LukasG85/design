import React, { useRef, useEffect } from "react"
import { TweenMax, TimelineMax, Power3 } from "gsap"
import Logo from "../../images/logo.png"
import Mouse from "../../images/mouse.png"

const BannerContents = () => {
  let container = useRef(null)
  let logo = useRef(null)
  let title = useRef(null)
  let text = useRef(null)
  let mouse = useRef(null)
  useEffect(() => {
    //   Title variables
    const firstElementTitle = title.firstElementChild
    const secondElementTitle = title.lastElementChild
    // Text variables
    const firstText = text.children[0]
    const secondText = text.children[1]
    const thirdText = text.children[2]

    TweenMax.to(container, 0, { css: { visibility: "visible" } })

    const tl = new TimelineMax()
    tl.from(logo, 0.8, {
      y: 100,
      opacity: 0,
      ease: Power3.easeOut,
    })
      .from(firstElementTitle, 0.6, {
        x: 300,
        opacity: 0,
        ease: Power3.easeOut,
      })
      .from(secondElementTitle, 0.6, {
        x: -300,
        opacity: 0,
        ease: Power3.easeOut,
      })

    tl.staggerFrom(
      [firstText, secondText, thirdText],
      1,
      {
        y: 44,
        opacity: 0,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.15
    )
    tl.from(mouse, 0.4, {
      opacity: 0,
      scale: 0,
      ease: "back.out(1.7)",
    })
  }, [])

  const handleClick = e => {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: window.innerHeight,
    })
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div ref={el => (container = el)} className="col  banner__content">
            <img ref={el => (logo = el)} src={Logo} alt="logo" />
            <h1 ref={el => (title = el)}>
              <span>working</span> <span>with design lab</span>
            </h1>
            <p ref={el => (text = el)}>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              </span>
              <span>
                iusto saepe ullam ipsum neque repellendus, sunt dicta optio
                cumque
              </span>
              <span>delectus?</span>
            </p>
          </div>
        </div>
      </div>
      <div onClick={handleClick} className="row no-gutters banner__mouse">
        <div className="col">
          <img
            ref={el => (mouse = el)}
            className="mouse-img"
            src={Mouse}
            alt="mouse"
          />
        </div>
      </div>
    </>
  )
}

export default BannerContents
