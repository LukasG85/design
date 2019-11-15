import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"
import About from "../components/about/About"
import Services from "../components/services/Services"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <About />
    <Services />
  </Layout>
)

export default IndexPage
