import React, { Component } from 'react'
import { getAllPosts, removePost } from "../services/ApiCalls";
import { Button } from '../components/shared'

export default class Posts extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            postToDelete: {},
            toDelete: false
        }
    }

    async componentDidMount() {
        await this.fetchPosts()
    }

    fetchPosts =  async () => {
        try {
            const posts = await getAllPosts()
            this.setState({ posts })
        } catch(error) {
            console.error(error)
        }
    }

    renderPosts = () => {
        // const {
        //     match: { path },
        //     history,
        // } = this.props
        if(this.state.posts.length) {
            return this.state.posts.map((post, index) => (
                <>
                <div>
                    <img src={post.imgUrl}/>
                    <h1>{post.name}</h1>
                </div>
                </>
            ))
        }
    }

    render() {
        return (
            <div className='posts'>
                {this.renderPosts()}
            </div>
        )
    }
}