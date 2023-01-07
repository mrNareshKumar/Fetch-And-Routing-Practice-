// Write your JS code here
import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      imageUrl: data.image_url,
      title: data.title,
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      topic: data.topic,
    }
    this.setState({blogData: updatedData})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData
    return (
      <div className="blog-container">
        <div className="blog-info">
          <h1 className="blog-details-title">{title}</h1>

          <div className="author-details">
            <img className="author-pic" src={avatarUrl} alt={author} />
            <p className="details-author-name">{author}</p>
          </div>

          <img className="blog-image" src={imageUrl} alt={title} />
          <p className="blog-content">{content}</p>
        </div>
      </div>
    )
  }

  render() {
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>
  }
}

export default BlogItemDetails
