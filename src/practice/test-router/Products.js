import React from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import posts from "./posts"
export default function Products() {
  let params = useParams()
  let hasPost = posts.some((post) => post.id == params.id)
  return (
    <div>
      {hasPost ? (
        <h1>
          {params.id} : {posts.find((post) => post.id == params.id).title}{" "}
        </h1>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  )
}
