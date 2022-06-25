import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import ProsList from '../components/list'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Gatsby">
      <p>Here's a list of Gatsby Pros, taken from:</p>
      <Link to='https://medium.com/eincode/next-js-vs-gatsby-js-frameworks-all-you-need-to-know-4147f36ed915'>
        an article from medium.com
      </Link>
      <ProsList />
    </Layout>
  )
}

export default AboutPage