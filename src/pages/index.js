import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import IndexPageHO from './indexHO'

import Layout from '../components/layout'
import * as Images from '../images'

const {
  Astronaut,
  Eduku,
  Entable,
  Github,
  RichardMandsDotCom,
  TheFastLife,
} = Images

const IndexPage = ({ text }) => {
  const introBody = text.introBody.split('\n').map((item, i) => {
    return (
      <div key={i}>
        <p>{item}</p>
      </div>
    )
  })

  return (
    <Layout>
      <h1>{text.title}</h1>
      <div>{text.introHeader}</div>
      {introBody}
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Astronaut />
      </div>
      <div style={{ maxWidth: '900px', marginBottom: '1.45rem' }}>
        <Eduku />
      </div>
      <div style={{ maxWidth: '900px', marginBottom: '1.45rem' }}>
        <Entable />
      </div>
      <div style={{ maxWidth: '900px', marginBottom: '1.45rem' }}>
        <Github />
      </div>
      <div style={{ maxWidth: '900px', marginBottom: '1.45rem' }}>
        <RichardMandsDotCom />
      </div>
      <div style={{ maxWidth: '900px', marginBottom: '1.45rem' }}>
        <TheFastLife />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

IndexPage.propTypes = {
  text: PropTypes.object,
}

IndexPage.defaultProps = {
  text: {},
}
export default IndexPageHO(IndexPage)
