import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './Components/AppContainer'
import 'typeface-roboto'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './Reducers/reducer'
import './index.css'

let store = createStore(reducer)

ReactDOM.render(<Provider store={store}>
    <AppContainer />
</Provider>, document.getElementById('root'));
