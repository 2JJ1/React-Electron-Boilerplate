import { combineReducers } from 'redux'

function App(state = [], action) {
    switch (action.type) {
        case 'DO_ACTION':
            return Object.assign({}, state, action.action)
        default:
            return state
    }
}

const Reducers = combineReducers({
    App
})

export default Reducers