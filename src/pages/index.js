import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Welcome to Broux Agency!">
      <p>Lorem ipsum</p>
      <StaticImage
        alt="random artist picture"
        src="https://omnivrembo.be/images/profidak.jpg"
      />
      </Layout>
    </main>
      
  )
}
export default IndexPage
