import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import postsData from "./posts"
export default function Home() {
  const [posts, setPosts] = useState(postsData)
  return (
    <div>
      {posts.map((post) => (
        <>
          <Link to={`/${post.id}`}>{post.title}</Link>
          
          <hr />
        </>
      ))}
    </div>
  )
}
