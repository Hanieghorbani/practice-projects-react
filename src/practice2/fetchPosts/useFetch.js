import React, { useState, useEffect } from "react"

export default function useFetch(url) {
  const [posts, setPosts] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setIsPending(false)
          setPosts(data)
        }).catch(err=>setError(err))
    }, 1000)
  }, [])

  return [posts, isPending, error]
}
