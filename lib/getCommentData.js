import React from 'react'

export default async function getCommentData(id) {
 const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
 return data.json()
}