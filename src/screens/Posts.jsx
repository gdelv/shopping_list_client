import React, { Component } from 'react'
import { getAllPosts, removePost } from "../services/ApiCalls";
import { Button } from '../components/shared'

export default class Posts extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            postToDelete: {},
            toDelete: false,
            // user: 'Authorized'
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

    handleOpenModal = (post, index) => this.setState({ toDelete: true, postToDelete: {...post, index} })
   
    handleCloseModal = () => this.setState({ toDelete: false, postToDelete: {}  })

    handleDeletePost = () => {
        removePost(this.state.postToDelete.id)
        .then(() => {
            const allPosts = this.state.posts
            allPosts.splice(this.state.postToDelete.index, 1)
            this.setState({ posts: allPosts })
        })
    }
    renderPosts = () => {
        const {
            match: { path },
            history,
        } = this.props
        
        if(this.state.posts.length) {
            return this.state.posts.map((post, index) => {
                return (
                
                 <>
                <div style={{border: "1px solid black", margin: '1em'}}>
            <h4>Post #{post.id}</h4>
        <h3>Posted on {post.createdAt.slice(0,10)}</h3>
            <h3>Posted by: {post.author}</h3>
            <div>
                {(post.brand ? post.brandName : 'No Brand')}
            </div>
                    {/* <img src={post.imgUrl} key={index} alt={post.name}/> */}
                    {/* var imgUrl = ${post.imgUrl};
                    switch (imgUrl) {
                        case 'sliced bread': {
                             <img src="https://images.japancentre.com/images/pics/17872/large/5804-Japan_Centre_Thick_Slice_Shoku_Pan_Bread_Loaf.jpg?1548770549"/>
                            break
                        } default: {
                            <img src='https://i0.wp.com/www.sanocpgh.org/wp-content/uploads/2014/04/no-available-image.png' />
                        }
                    ` */}
                    <h1>{post.name}</h1>
                    <button onClick={() => this.handleOpenModal(post, index)}>Delete Post</button>
                    <button onClick={() => history.push(`${path}/edit/${post.id}`)}>Edit Post</button>
                </div>
                </>
                )
            })
        }
    }

    renderDeleteConfirmModal = () => {
        if (this.state.toDelete) {
          return (
            <div className="modal open">
              <h4>
                Are you Sure you want to delete {this.state.postToDelete.name}?
              </h4>
              <div className="buttons">
                <Button
                  color="danger"
                  title="Yes"
                  onClick={this.handleDeletePost}
                />
                <Button
                  color="primary"
                  title="Cancel"
                  onClick={this.handleCloseModal}
                />
              </div>
            </div>
          )
        } else {
          return <div className="modal close" />
        }
      }
    handleClick = () => {
        console.log('hello')
        this.setState({ user: 'Authorized' })
    }

    // renderAuth = () => {
    //     if(this.state.user === 'Authorized' ) {
    //         return this.renderPosts()
    //     } else {
    //         return (
    //             <div>
    //                 <h2>You are not authorized</h2>
    //                 <button type='button' onClick={this.handleClick}/>
    //             </div>
    //         )
    //     }
    // }

    render() {
        return (
            <div className='posts'>
                {this.renderDeleteConfirmModal()}
                {this.renderPosts()}
                {/* {this.renderAuth()} */}
            </div>
        )
    }
}