import React from 'react'

export default async function getCommentData() {
 const data = await fetch(`https://jsonplaceholder.typicode.com/posts`)
 return data.json()
}