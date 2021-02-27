import {createStore} from "redux"
import {bgDataReducer} from "../reducers"

const bgDatastore = createStore(bgDataReducer)

export {bgDatastore}