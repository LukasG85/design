import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"
import About from "../components/about/About"
import Services from "../components/services/Services"
import WhatWeDo from "../components/whatWeDo/WhatWeDo"
import Works from "../components/works/Works"
import Contact from "../components/contact/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <About />
    <Services />
    <WhatWeDo />
    <Works />
    <Contact />
  </Layout>
)

export default IndexPage
