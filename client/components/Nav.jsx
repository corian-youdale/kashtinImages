import React from 'react'
import { Route, Link } from 'react-router-dom'

import { connect } from 'react-redux'

class Nav extends React.Component {

    render () {
        return (
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <a className="navbar-brand" href="#">Brand/Logo Goes Here</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav">
                        <li className="nav-item active">
                            <Link to="/">
                                <span className="nav-link" href="#">Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/albums">
                                <span className="nav-link" href="/albums">Albums</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/mainCarousel">
                                <span className="nav-link" href="/mainCarousel">Carousel</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/search">Search bar?</a>
                        </li>
                    </ul>        
                </div>
            </nav>
            </>
        )
    }

}

function mapStateToProps(globalState) {
    return {
    photos: globalState.photos   
    }
}

export default connect(mapStateToProps)(Nav)
