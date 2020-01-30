import React from 'react'
import PostForm from '../components/PostForm'
import { api } from "../services/ApiConfig";

export default class CreatePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            imgUrl: '',
            author: '',
            brand: false,
            brandName: '',
            errorMsg: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { name, imgUrl, author, brand, brandName } = this.state
        const data = {
            name,
            imgUrl,
            author,
            brand,
            brandName
        }
        api.post('/post', data)
        .then((response) => response.status === 201 ? this.props.history.push('/posts') : null)
        .catch(() => this.setState({ errorMsg: 'There was an error posting'}))
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        const { name, imgUrl, author, brand, brandName } =  this.state
        return (
            <div>
                <h3>Post an item!</h3>
                <PostForm
                    formData={{name, imgUrl, author, brand, brandName}}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
                {this.state.errorMsg ? (
                    <p>{this.state.errorMsg}</p>
                ) : null}
            </div>
        )
    }

}

