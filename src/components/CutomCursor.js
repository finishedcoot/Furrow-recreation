import React, { useEffect, useState } from "react"

import { Cursor } from "../styles/globalStyles"

//Context
import { useGlobalStateContext } from "../context/globalContext"

const CutomCursor = ({ toggleMenu }) => {
  const { cursorType } = useGlobalStateContext()

  const [mousePosition, setMousePostion] = useState({
    x: 400,
    y: 400,
  })

  const onMousemove = event => {
    const { pageX: x, pageY: y } = event
    setMousePostion({ x, y })
  }

  useEffect(() => {
    document.addEventListener("mousemove", onMousemove)

    return () => {
      document.removeEventListener("mousemove", onMousemove)
    }
  }, [])

  return (
    <>
      <Cursor
        className={`${!!cursorType ? "hovered" : ""}  ${cursorType}  ${
          toggleMenu ? "nav-open" : ""
        }`}
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px ` }}
      />
    </>
  )
}

export default CutomCursor
