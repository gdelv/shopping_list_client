import React from 'react'
import PostForm from '../components/PostForm'
import { api } from "../services/ApiConfig";

export default class EditPost extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            imgUrl: '',
            author: '',
            brand: false,
            brandName: '',
            errorMsg: ''
        }
    }

    componentDidMount() {
        this.fetchPostById()
    }

    handleSubmit = event => {
        event.preventDefault()
        const { name, imgUrl, author, brand, brandName } = this.state
        const data = {
            name,
            imgUrl,
            author,
            brand,
            brandName
        }
        api.put(`/post/${this.props.match.params.post_id}`, data)
        .then(response => response.status === 200 ? this.props.history.push('/posts') : null)
        .catch(() => this.setState({ errorMsg: "An error was found in edit feature" }))
    }

    fetchPostById = async () => {
        const {
            match: { params }
        } = this.props
        try {
            const posts = await api.get(`/post/${params.post_id}`)
            this.setState({
                name: posts.data.name,
                imgUrl: posts.data.imgUrl,
                author: posts.data.author,
                brand: posts.data.brand,
                brandName: posts.data.brandName
            })
        } catch(error) {
            console.error(error)
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const { name, imgUrl, author, brand, brandName } = this.state
        return (
            <div>
                <h3>Edit Post</h3>
                <PostForm
                    formData={{ name, imgUrl, author, brand, brandName }}
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