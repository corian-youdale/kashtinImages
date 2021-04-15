import request from 'superagent'

// Get All Photos API
export function getAllPhotosAPI () {
  return request.get('/api/photosAPI')
    .then(res => {
      return res.body
    })
    .catch(errorHandler('GET', '/api/photosAPI'))
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
