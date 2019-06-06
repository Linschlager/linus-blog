import React from 'react';
import Link from 'next/link';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const postQuery = gql`
  {
    posts {
      title
      slug
    }
  }
`;
const BlogPost = () => {
  return (
    <Query query={postQuery}>
    { ({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error: ${error.message}`;
      return (
        <ul>
          {
            data.posts.map(post => (
              <li><Link href={`/post?slug=${post.slug}`}><a>{post.title}</a></Link></li>
            ))
          }
        </ul>
      );
    }}
    </Query>
  );
};

export default BlogPost;