import { bgData } from "../constants/models.js"

const bgDataReducer = (state = bgData, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export { bgDataReducer }