import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

class PostsNew extends Component {
    render() {
        return (
            <div>
                <h1>Add Post</h1>
            </div>
        )
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);