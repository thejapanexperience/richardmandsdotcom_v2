// Packages
import React from 'react'
import en from '../config/en-GB.yml'

const IndexPageHO = IndexPage => {
  return class Index extends React.Component {
    state = {
      test: true,
    }

    render() {
      return <IndexPage {...this.props} {...this.state} text={en} />
    }
  }
}

export default IndexPageHO
