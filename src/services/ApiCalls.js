import { api } from "./ApiConfig";

export const getAllPosts = async () => {
    try {
        const resp = await api.get('/post')
        return resp.data
    } catch(error) {
        throw error
    }
}

export const getSinglePost = async (post_id) => {
    try {
        const resp = await api.get(`/post/${post_id}`)
        return resp.data
    } catch(error) {
        throw error
    }
}

export const removePost = async (post_id) => {
    try {
        const resp = await api.delete(`/post/${post_id}`)
        return resp.data
    } catch(error) {
        throw error
    }
}

export const editPost = async(post_id, postData) => {
    try {
        const resp = await api.put(`/post/${post_id}`, postData)
        return resp
    } catch(error) {
        throw console.error();
        
    }
}

export const createPost = async(postData) => {
    try {
        const resp = await api.post('/post', postData)
        return resp
    } catch(error) {
        throw error
    }
}