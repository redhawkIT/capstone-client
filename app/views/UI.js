import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { footer } from '../styles/footer.scss'

const UI = ({ children }) =>
  <div>
    <h1>Filtering </h1>
    { children }
    <footer className={footer}>
      <Link to='/'>Filtering the Table</Link>
      <Link to='/about'>About</Link>
    </footer>
  </div>

UI.propTypes = {
  children: PropTypes.object
}
export default UI
