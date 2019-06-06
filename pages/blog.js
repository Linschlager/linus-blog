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
    <Query query={postQuery}>
    { ({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error: ${error.message}`;

      const years = [];
      const byYear = {};
      data.posts.forEach(post => {
        const y = new Date(post.date).getFullYear();
        if (!byYear[y]) {
          byYear[y] = [];
          years.push(y);
        }
        byYear[y].push(post);
      });

      return (
        <>
          {
            years.map(year => (
              <div className="card-block">
                <h2 className="card-header">{ year }</h2>
                <ul className="card-items">
                  {
                    byYear[year].map(post => (
                      <Link key={post.slug} href={`/post?slug=${post.slug}`}><a><li className="card-item">{post.title}</li></a></Link>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </>
      );
    }}
    </Query>
  );
};

export default BlogPost;