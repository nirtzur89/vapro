import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

const LinkButtonArtistSignup = (props) => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    // ⬆ filtering out props that `button` doesn’t know what to do with.
    ...rest
  } = props
  return (
      <div>
<button
      {...rest} // `children` is just another prop!
      onClick={(event) => {
        onClick && onClick(event)
        history.push(to)
      }}>Signup as Contributer</button>
      </div>
    
  )
}

LinkButtonArtistSignup.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default withRouter(LinkButtonArtistSignup)