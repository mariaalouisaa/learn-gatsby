import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Close up of a grey tabby staring into the camera, green eyes."
        src="../images/cat.webp"
      />
    </Layout>
  )
}

export default IndexPage