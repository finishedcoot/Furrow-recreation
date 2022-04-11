import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"

//Styled components
import { HeaderNav, Logo, Menu } from "../styles/HeaderStyles"
import { Container, Flex } from "../styles/globalStyles"

//Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

// Custom Hook
import useElementPosition from "../hooks/useEelementPosition"

const Header = ({
  onCursor,
  setToggleMenu,
  toggleMenu,
  setMenuIconPosition,
  menuIconPosition,
}) => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()
  const menuIcon = useRef(null)
  const position = useElementPosition(menuIcon)

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }

  const menuHover = () => {
    onCursor("locked")
    setMenuIconPosition({ x: position.x, y: position.y + 72 })
  }

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme)
  }, [currentTheme])

  return (
    <HeaderNav
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, -0.9] }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Link to="/">FURR</Link>
            <span
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
              onClick={toggleTheme}
            ></span>
            <Link to="/">W</Link>
          </Logo>
          <Menu
            ref={menuIcon}
            onClick={() => setToggleMenu(!toggleMenu)}
            onMouseEnter={menuHover}
            onMouseLeave={onCursor}
          >
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
