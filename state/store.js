import {configureStore} from '@reduxjs/toolkit'
import movieReducer from './reducers/movieReducer'
import regAuth from './reducers/user_reducer'

const store= configureStore({
    reducer: {
        movies:movieReducer,
        regAuth:regAuth
    },
})

export default store