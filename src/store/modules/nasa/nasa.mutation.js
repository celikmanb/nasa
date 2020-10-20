import * as types from './nasa.mutation_types'

export default {
    [types.REQUEST_APOD](state){
        state.apod_loading=true
    },
    [types.REQUEST_APOD_SUCCESS](state, data){
        state.apod_loading = false
        state.apod_data = data
    },
    [types.REQUEST_APOD_ERROR](state, error){
        state.apod_loading = false
        state.apod_error = error
    },

    [types.REQUEST_EPIC](state){
        state.epic_loading=true
        state.epic_request_success = false
    },
    [types.REQUEST_EPIC_SUCCESS](state, data){
        state.epic_loading = false
        state.epic_data = data
        state.epic_request_success = true
    },
    [types.REQUEST_EPIC_ERROR](state, error){
        state.epic_loading = false
        state.epic_error = error
    },

    [types.REQUEST_LIBRARY](state){
        state.library_loading=true
        state.library_request_success = false
    },
    [types.REQUEST_LIBRARY_SUCCESS](state, data){
        state.library_loading = false
        state.library_data = data
        state.library_request_success = true
    },
    [types.REQUEST_LIBRARY_ERROR](state, error){
        state.library_loading = false
        state.library_error = error
    },
}