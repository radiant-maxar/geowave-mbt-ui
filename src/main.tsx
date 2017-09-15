// Styles
import './styles/webfonts/index.css'
import './styles/globals.less'


// Polyfills
import 'core-js/es6'


// Bootstrapping
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'

import { createStore } from './store'
import { createRouter } from './router'


ReactDOM.render(
    <Provider {...{ store: createStore() }}>
        {createRouter()}
    </Provider>,
    document.querySelector('#application-viewport'),
)
