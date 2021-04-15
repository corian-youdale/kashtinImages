import request from 'superagent'

// Just Get Photos from one Album
export function getAlbumAPI (id) {
    return request.get(`/api/albumsAPI/album/${id}`)
    .then(res => {
      return res.body
    })
    .catch(errorHandler('GET', `/api/albumsAPI/album/${id}`))
  }
  
  
  function errorHandler (method, route) {
    return (err) => {
      if (err.message === 'Not Found') {
        throw Error(`Error: You need to implement an API route for ${method} ${route}`)
      } else {
        throw Error(`${err.message} on ${method} ${route}`)
      }
    }
  }