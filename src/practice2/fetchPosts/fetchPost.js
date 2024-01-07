import React, { useEffect, useState } from "react"
import useFetch from "./useFetch"

export default function FetchPost() {
  // const [posts,error,isPending] = useFetch(
  //   "https://jsonplaceholder.typicode.com/posts"
  // )
   const [users,error,isPending] = useFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <p>is loading...</p>}
      {/* {posts &&
        posts.map((post) => (
          <div>
            <h1 className="text-center">
              {post.id}/{post.title}
            </h1>
            <hr />
          </div>
        ))} */}
        {users &&
        users.map((post) => (
          <div>
            <h1 className="text-center">
              {post.id}/{post.name}
            </h1>
            <hr />
          </div>
        ))}
    </div>
  )
}
