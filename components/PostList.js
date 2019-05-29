import React from 'react';
import Link from 'next/link';
import { posts } from "../helper/posts";

const PostList = () => (
  <ul>
    {
      posts.map(post => (
        <li>
          <Link href={`/blog?p=${post.slug}`}><a>{post.title}</a></Link> - <span>{post.summary}</span>
        </li>
      ))
    }
  </ul>
);

export default PostList;