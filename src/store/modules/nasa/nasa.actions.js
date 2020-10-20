import Vue from 'vue'
import * as types from './nasa.mutation_types'
import axios from 'axios'

const api = "https://api.nasa.gov/"
const api_key = "1vXTwGHlDy0mker4cq1fYLxTz6oQZyNUtxfqNeXj"


//Fetch APOD
export const requestApod = ({ commit }) => {
    commit(types.REQUEST_APOD_ERROR, null)
    commit(types.REQUEST_APOD)
  }
  export const requestApodSuccess = ({ commit }, data) => {
    commit(types.REQUEST_APOD_SUCCESS, data)
  }
  export const requestApodError = ({ commit }, error) => {
    commit(types.REQUEST_APOD_ERROR, error.response ? error.response.data : null)
    Vue.prototype.$errorHandler(error)
  }
  
  export const fetchApod = ({ dispatch }) => new Promise((resolve, reject) => {
    dispatch('requestApod')
  
    
    const params = "planetary/apod?api_key="
    const url = api+params+api_key

    console.log(url);
  
    axios.get(url)
      .then(({ data }) => {
        dispatch('requestApodSuccess', data)
        resolve(data)
      })
      .catch((error) => {
        dispatch('requestApodError', error)
        reject(error)
      })
  })

// Fetch EPIC
export const requestEpic = ({ commit }) => {
    commit(types.REQUEST_EPIC_ERROR, null)
    commit(types.REQUEST_EPIC)
  }
  export const requestEpicSuccess = ({ commit }, data) => {
    commit(types.REQUEST_EPIC_SUCCESS, data)
  }
  export const requestEpicError = ({ commit }, error) => {
    commit(types.REQUEST_EPIC_ERROR, error.response ? error.response.data : null)
    Vue.prototype.$errorHandler(error)
  }
  
  export const fetchEpic = ({ dispatch }) => new Promise((resolve, reject) => {
    dispatch('requestEpic')
    
    const params = "mars-photos/api/v1/rovers/curiosity/photos?sol=10&page=1"
    const url = api+params+'&api_key='+api_key

    console.log(url);
    axios.get(url)
      .then(({ data }) => {
        dispatch('requestEpicSuccess', data)
        resolve(data)
      })
      .catch((error) => {
        dispatch('requestEpicError', error)
        reject(error)
      })
  })

// Fetch Library
export const requestLibrary = ({ commit }) => {
  commit(types.REQUEST_LIBRARY_ERROR, null)
  commit(types.REQUEST_LIBRARY)
}
export const requestLibrarySuccess = ({ commit }, data) => {
  commit(types.REQUEST_LIBRARY_SUCCESS, data)
}
export const requestLibraryError = ({ commit }, error) => {
  commit(types.REQUEST_LIBRARY_ERROR, error.response ? error.response.data : null)
  Vue.prototype.$errorHandler(error)
}

export const fetchLibrary = ({ dispatch }, payload) => new Promise((resolve, reject) => {
  dispatch('requestLibrary')
  

  const search_url = "https://images-api.nasa.gov/search?q="
  let params = ''
  params += payload.input 


  // const params = "mars-photos/api/v1/rovers/curiosity/photos?sol=10&page=1"
  const url = search_url + params

  console.log(url);
  axios.get(url)
    .then(({ data }) => {
      dispatch('requestLibrarySuccess', data)
      resolve(data)
    })
    .catch((error) => {
      dispatch('requestLibraryError', error)
      reject(error)
    })
})