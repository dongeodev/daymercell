import React, { useRef, useState, useEffect } from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import { Score } from "../components/Score"
import { Profile } from "../components/Profile"
import { Calification } from "../components/Calification.js"
import { Footer } from "../components/Footer"
import { Loader } from "../components/Loader"
const IndexPage = () => {
  const [showLoader, setShowLoader] = useState(true)
  useEffect(() => {
    return setShowLoader(false)
  }, [])
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return showLoader ? (
    <Loader />
  ) : (
    <Layout title={data.site.siteMetadata.title}>
      <SEO title="Home" />
      <Score />
      <Profile />
      <Calification />
      <Footer />
    </Layout>
  )
}
export default IndexPage
