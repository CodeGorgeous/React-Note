/* eslint-disable */

import { reducers } from '../action/student'
import cookie from './cookie'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from '../history'

// redux提供的reducer合并方法
export default combineReducers({
    student: reducers,
    cookie,
    router: connectRouter(history)
})
