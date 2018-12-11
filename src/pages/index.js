import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import IndexPageHO from './indexHO'

import Layout from '../components/layout'
import Intro from '../components/intro'
import TechIcons from '../components/techIcons'
import * as Images from '../images'

const {
  ImageAstronaut,
  ImageEduku,
  ImageEntable,
  ImageMygithub,
  ImageRichardmandsdotcom,
  ImageThefastlife,
  ImageAmazon,
  ImageDocker,
  ImageExpress,
  ImageFirebase,
  ImageFlux,
  ImageFrontend,
  ImageGit,
  ImageGithub,
  ImageGoogle,
  ImageHtmlcss,
  ImageJavascript,
  ImageJira,
  ImageJquery,
  ImageMochachai,
  ImageMongodb,
  ImageMysql,
  ImageNode,
  ImageRails,
  ImageReact,
  ImageRedux,
  ImageRspec,
  ImageRuby,
  ImageSass,
  ImageSocketio,
  ImageTropo,
  ImageWebpack,
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
      <h1>{text.subTitle}</h1>
      <div>{text.introHeader}</div>
      {introBody}

      <div style={{ maxWidth: '900px', marginBottom: '1.45rem' }}>
        <ImageJavascript />
      </div>
      <div>
        <div style={{ maxWidth: '200px', marginBottom: '1.45rem' }}>
          <ImageReact />
        </div>
        <div style={{ maxWidth: '200px', marginBottom: '1.45rem' }}>
          <ImageRedux />
        </div>
        <div style={{ maxWidth: '200px', marginBottom: '1.45rem' }}>
          <ImageNode />
        </div>
        <div style={{ maxWidth: '200px', marginBottom: '1.45rem' }}>
          <ImageExpress />
        </div>
      </div>
      <div style={{ maxWidth: '200px', marginBottom: '1.45rem' }}>
        <ImageAstronaut />
      </div>
      <div style={{ maxWidth: '900px', marginBottom: '1.45rem' }}>
        <ImageEduku />
      </div>
      <div style={{ maxWidth: '900px', marginBottom: '1.45rem' }}>
        <ImageEntable />
      </div>
      <div style={{ maxWidth: '900px', marginBottom: '1.45rem' }}>
        <ImageMygithub />
      </div>
      <div style={{ maxWidth: '900px', marginBottom: '1.45rem' }}>
        <ImageRichardmandsdotcom />
      </div>
      <div style={{ maxWidth: '900px', marginBottom: '1.45rem' }}>
        <ImageThefastlife />
      </div>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <ImageAstronaut />
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
