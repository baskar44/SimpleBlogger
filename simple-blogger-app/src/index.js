import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ReduxPromise from 'redux-promise'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'
import './index.css'

import PostsIndex from './components/posts_index'
import PostsNew from './components/posts_new'


const store = applyMiddleware(ReduxPromise)(createStore)


ReactDOM.render(
<Provider store={store(reducers)}>
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/posts/new" component={PostsNew} />
                <Route path="/" component={PostsIndex} />
            </Switch> 
        </div>
    </BrowserRouter>
</Provider>, 
document.getElementById('root'));
registerServiceWorker();

//<Route path="/" component={} />
//<Route path="/" component={} />