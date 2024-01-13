import React from 'react'
import {useSelector} from 'react-redux'

const Test = () => {

    const posts = useSelector((state) => state.posts)

    console.log(posts)
  return (
    <div>test</div>
  )
}

export default Test