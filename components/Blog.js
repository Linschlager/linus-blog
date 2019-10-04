import React from 'react';
import Link from 'next/link';
import { useQuery } from 'react-apollo-hooks';
import gql from "graphql-tag";

const GET_POSTS = gql`
  {
    posts {
      title
      slug
      date
    }
  }
`;
const Blog = () => {
  const { data, error, loading } = useQuery(GET_POSTS);
  if (loading) {
    return "Loading...";
  }
  if (error) {
    return `Error: ${error.message}`;
  }

  return (
    <ul>
      {
        data.posts.map(post => (
          <li key={`post-${post.slug}`} className="card-item"><Link key={post.slug} href="/post/[slug]" as={`/post/${post.slug}`}><a>{post.title}</a></Link></li>
        ))
      }
      <style jsx>{`
        ul {
          list-style: none;
        }
        li {
          padding-bottom: 3px;
        }
      `}</style>
    </ul>
  );
};

export default Blog;