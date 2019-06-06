import React from 'react';
import Link from 'next/link';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const postQuery = gql`
  {
    posts {
      title
      slug
      date
    }
  }
`;
const BlogPost = () => {
  return (
    <Query query={postQuery} ssr>
    { ({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error: ${error.message}`;

      const years = [];
      const byYear = {};
      data.posts.forEach(post => {
        const y = new Date(post.date).getFullYear();
        years.push(y);
        if (!byYear[y]) byYear[y] = [];
        byYear[y].push(post);
      });


      return (
        <>
          {
            years.map(year => (
              <>
              <h2>{ year }</h2>
                <ul>
                  {
                    byYear[year].map(post => (
                      <li key={post.slug}><Link href={`/post?slug=${post.slug}`}><a>{post.title}</a></Link></li>
                    ))
                  }
                </ul>
              </>
            ))
          }
        </>
      );
    }}
    </Query>
  );
};

export default BlogPost;