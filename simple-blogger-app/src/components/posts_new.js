import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {createPost} from '../actions'


class PostsNew extends Component {

    renderField(field){
        return (
            <div className="form-group was-validated">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
                
            </div>
        )
    }

    onSubmit(values){
        this.props.createPost(values, () => {
            this.props.history.push('/')
        })
    }

    render() {

        const { handleSubmit } = this.props

        return (
            <form 
                onSubmit={handleSubmit(this.onSubmit.bind(this))} 
                className="container">
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Tags"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="action btn btn-success">Submit</button>
                <Link to="/" className="action btn btn-danger">Cancel</Link>

            </form>
        )
    }
}


function validate(values){
    const errors = {}

    if (!values.title) {
        errors.title = "Enter a title"
    }

    if (!values.tags) {
        errors.tags = "Enter at least one tag"
    }

    if (!values.content) {
        errors.content = "Enter some content"
    }

    return errors

}


export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, {createPost}) (PostsNew)
);