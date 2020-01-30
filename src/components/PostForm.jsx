import React from 'react'

const PostForm = (props) => {
    const { onChange, onSubmit } = props
    const { name, imgUrl, author, brand, brandName } = props.formData
    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input name='name' value={name} required onChange={(e) => onChange(e)}/>
            <label htmlFor={name}>Item Name</label>

            <input name='imgUrl' value={imgUrl} onChange={(e) => onChange(e)}/>
            <label htmlFor={imgUrl}>Item Image</label>

            <input name='author' value={author} required onChange={(e) => onChange(e)}/>
            <label htmlFor={author}>Posted by:</label>

            <input name='brand' value={brand} required onChange={(e) => onChange(e)}/>
            <label htmlFor={brand}>Brand?</label>

            <input name='brandName' value={brandName}  onChange={(e) => onChange(e)}/>
            <label htmlFor={brandName}>Brand Name</label>


            <button type='submit'>Submit</button>
        </form>
    )
}

export default PostForm
