import {SET_USER_DATA} from "../constants/action-types.js"

export const setUserData = userData => ({
    type : SET_USER_DATA, payload : userData
})