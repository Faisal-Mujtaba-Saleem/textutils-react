import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={`${props.mode}`}>
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li> */}
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}

                    <div className={`form-check form-switch text-${props.mode !== 'light' ? 'light' : 'dark'}`}>
                        <input className="form-check-input " type="checkbox" role="switch" value='night mode' id="flexSwitchCheckDefault" onChange={props.toggleMode} style={
                            { cursor: 'pointer' }
                        } />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={
                            { cursor: 'pointer' }
                        }>
                            {/* {props.mode === 'light' ? 'Enable Night Mode' : 'Enable Light Mode'} */}
                            {
                                props.mode === 'light' ?
                                    <select name="" id="mode-selection" className="form-select form-select-sm" aria-label=".form-select-sm example">
                                        <option className='#002c37 text-light' value="Enable Night Mode">Enable Night Mode</option>
                                        <option className='bg-danger text-light' value="Enable Danger-Dark Mode">Enable Danger-Dark Mode</option>
                                        <option className='bg-success  text-light' value="Enable Success-Dark Mode">Enable Success-Dark Mode</option>
                                        <option className='bg-secondary text-light' value="Enable Secondary-Dark Mode">Enable Secondary-Dark Mode</option>
                                    </select>
                                    : 'Enable Light Mode'
                            }
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About text here',
}