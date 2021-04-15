import React from 'react'
import { Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'

import { fetchPhotos, fetchAlbumPhotos } from '../actions/index'

import { connect } from 'react-redux'

class Albums extends React.Component {

    state = {
        photos: [],
        albums: [],
        metadata: []
      }

      componentDidMount () {
        this.props.dispatch(fetchPhotos())
        this.setState({
            photos: fetchPhotos()    
        })
        // this.props.dispatch(fetchAlbumPhotos())
      }

    render () {


        return (
            <>
                <div className="albums container">
                    <div className="row">

                        {this.props.photos.map(photo => (
                            <div className="col-4" key={photo.id} >
                                <div className="card">
                                    <img id="img"  className="card-img-top" src={photo.url} />
                                    <div className="card-body">
                                        <h5 className="card-title"> {photo.title}</h5>
                                        <p className="card-text"> {photo.description} </p>
                                        <p className="card-text" id="date_taken">Taken: {photo.dateTaken}</p>
                                        <a href="#" className="card-link"> External Link</a>
                                    </div>
                                </div>
                            </div>
                        ))}       
                    </div>
                </div>
            </>
        )
    }
}

function mapStateToProps(globalState) {
    return {
        photos: globalState.photos,
        albums: globalState.albums,
        metadata: globalState.metadata
    }
}

export default connect(mapStateToProps)(Albums)
