import React from 'react'
import styles from './Bio.module.css'

function Bio(props) {
  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={require('../utils/profile.jpg')} alt="Me" />
      <p>
        Software engineering student, at University of Brasília.
        <br />
        Blog created using <a href="https://github.com/jamesknelson/create-react-blog">create react blog</a>.
      </p>
    </div>
  )
}

export default Bio
