import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import EXIF from 'exif-js'

import { fetchPhotos, fetchAlbumPhotos } from '../actions'

import Nav from './Nav'
import Albums from './Albums'
import MainCarousel from './MainCarousel'

export class App extends React.Component {
  state = {
    photos: [],
    albums: [],
    metadata: [],
  }
  componentDidMount () {
    this.props.dispatch(fetchPhotos())

    window.onload=this.getExif
  }

  getExif = () => {
    var photos = document.getElementsByClassName("card-img-top")
    // console.log(photos)
    photos = Array.from(photos)
    // console.log(photos)

    photos.map( photo => {
                // DateTimeOriginal
      // EXIF.getData(photo, function() {
      //   var dateTimeOriginal = EXIF.getTag(this, "DateTimeOriginal")
      //   console.log(EXIF.pretty(this))
      //   console.log(dateTimeOriginal)
      // })
                // ISO Speed 
      //      EXIF.getData(photo, function() {
      //   var ISOSpeedRatings = EXIF.getTag(this, "ISOSpeedRatings")
      //   console.log(ISOSpeedRatings)
      // })
                // Exposure Time
      // EXIF.getData(photo, function() {
      //   var exposureTime = 1/(EXIF.getTag(this, "ExposureTime"))
      //   console.log("1/" + exposureTime)
      // })
                // Image Title
      // EXIF.getData(photo, function() {
      //     var imageTitle = EXIF.getTag(this, "ImageDescription")
      //     // console.log(EXIF.pretty(this))
      //     console.log(imageTitle)
      //   })
                // Focal Length
      // EXIF.getData(photo, function() {
      //   var focalLength = EXIF.getTag(this, "FocalLength")
      //   console.log(focalLength)
      // })
                // Image Height
      // EXIF.getData(photo, function() {
      //   var imageHeight = EXIF.getTag(this, "ImageHeight")
      //   console.log(imageHeight)
      // })
                // Image Width
      // EXIF.getData(photo, function() {
      //   var imageWidth = EXIF.getTag(this, "ImageWidth")
      //   console.log(imageWidth)
      // })
                // F Stop
      // EXIF.getData(photo, function() {
      //   var fStop = EXIF.getTag(this, "FNumber")
      //   console.log(fStop)
      // })
      EXIF.getData(photo, function() {
            var allMetaData = EXIF.getAllTags(this);
            console.log(allMetaData)
    
          })
    })
  }
 


  render () {

    return (
      <div className='app container'>
        <div className="row">

          

          <h1 className="display-4 text-center ">Kashtin Images</h1>
        </div>
          <Router>
            <Route path="/" component={Nav} />
                <Route exact path="/" component={Albums} /> 
            <Switch>
                <Route exact path="/mainCarousel" component={MainCarousel} />
            </Switch>
          
          </Router>
      
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    photos: globalState.photos,
    albums: globalState.albums,
    metadata: globalState.metadata
  }
}

export default connect(mapStateToProps)(App)
