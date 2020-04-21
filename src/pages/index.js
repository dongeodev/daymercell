import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Score } from "../components/Score"
import { Profile } from "../components/Profile"
import { Calification } from "../components/Calification.js"
import { Footer } from "../components/Footer"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Score />
    <Profile />
    <Calification />
    <Footer />
  </Layout>
)

export default IndexPage
