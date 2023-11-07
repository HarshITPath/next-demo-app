import React from 'react'

const BlogPage = ({params}) => {
  return (
    <div>
      Blog Post: {params.slug}
    </div>
  )
}

export default BlogPage
