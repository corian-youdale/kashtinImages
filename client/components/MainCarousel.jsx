import React from 'react'
import { Route, Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

import {fetchPhotos } from '../actions/index'

import { connect } from 'react-redux'

class MainCarousel extends React.Component {

    state = {
        photos: []
    }

    componentDidMount () {
        this.props.dispatch(fetchPhotos())
        this.setState({
            photos: fetchPhotos()
        })
    }
    
    render() {
        return (
            <>
                <div className="carousel container-fluid">
                    <div className="row">
                        <div className="col-md-9 carousel-column">

                            <Carousel className="carousel carousel-fade col-offset-2" fade={true}>
                                {this.props.photos.map(photo => (
                                    <Carousel.Item interval={4000} key={photo.id} >
                                    <img className="d-block w-100 h-100" src={photo.url} alt={photo.description} /> 
                                    <Carousel.Caption>
                                        <h3>{photo.title}</h3>
                                        <p>{photo.description} {photo.dateTaken}</p>
                                    </Carousel.Caption>     
                                </Carousel.Item>
                            ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
}

function mapStateToProps(globalState) {
    return {
        photos: globalState.photos,
    }
}

export default connect(mapStateToProps)(MainCarousel)
