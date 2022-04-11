import React from "react"
import Layout from "../components/layout"
//Components
import HomeBanner from "../components/HomePage/HomeBanner"

//context
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/globalContext"
import HomeContent from "../components/HomePage/HomeContent"
import HomeFeatured from "../components/HomePage/HomeFeatured"
import HomeAbout from "../components/HomePage/HomeAbout"

const IndexPage = props => {
  const { cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return (
    <Layout>
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeFeatured onCursor={onCursor} />
      <HomeAbout onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage
