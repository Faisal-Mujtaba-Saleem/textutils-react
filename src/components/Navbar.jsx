import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={`${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>

                    <div className={`form-check form-switch text-${props.mode !== 'light' ? 'light' : 'dark'} d-flex align-items-center `}>
                        <input className="form-check-input me-2" type="checkbox" role="switch" value='night mode' id="flexSwitchCheckDefault" onChange={props.toggleMode} style={
                            { cursor: 'pointer' }
                        } />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={
                            { cursor: 'pointer' }
                        }>
                            <select name="" id="mode-selection" className="form-select form-select-sm" aria-label=".form-select-sm example">
                                {/* <option className='mode-options bg-light text-dark' value="Enable Night Mode">Enable Light Mode</option> */}
                                <option className='mode-options #002c37 text-light' value="Enable Night Mode">Enable Night Mode</option>
                                <option className='mode-options bg-danger text-light' value="Enable Danger-Dark Mode">Enable Danger-Dark Mode</option>
                                <option className='mode-options bg-success  text-light' value="Enable Success-Dark Mode">Enable Success-Dark Mode</option>
                                <option className='mode-options bg-secondary text-light' value="Enable Secondary-Dark Mode">Enable Secondary-Dark Mode</option>
                            </select>
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