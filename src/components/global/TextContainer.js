import React from "react"
import "./textContainer.scss"

const TextContainer = ({ title, children }) => {
  return (
    <div className="text">
      <h2 className="text__title">{title}</h2>
      <div className="test__info">{children}</div>
    </div>
  )
}

export default TextContainer
