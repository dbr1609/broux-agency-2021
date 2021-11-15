import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Welcome to Broux Agency!">
      <p>Lorem ipsum</p>
      <StaticImage
        alt="dj mandy"
        src="https://www.djmandyofficial.be/content/img/3/1124-12672-20200307-215859-reverze-bj3i2815-2048px-912f35f9d96c30ec.jpg"
      />
      <StaticImage
        alt="day-mar"
        src="../images/day-mar.jpg"
      />
      </Layout>
    </main>
      
  )
}
export default IndexPage
