import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'


const BlogPage = ({ data }) => {
    const fileName = data.allFile.edges
    return (
        <Layout pageTitle="Blog Posts">
            <ul>
                {fileName.map(i => <li key={i.node.name}>{i.node.name}</li>)}
            </ul>
        </Layout>
    )
}

export const query = graphql`
query blogTitles {
    allFile {
      edges {
        node {
          name
        }
      }
    }
  }
  
`

export default BlogPage