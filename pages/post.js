import React from 'react';
import Markdown from 'react-markdown';
import { graphql, Query } from "react-apollo";
import gql from "graphql-tag";

const Post = ({ slug }) => {
  console.log("Accessing '"+slug+"'");
  const postQuery = gql`
    {
      Post(slug: "${slug}") {
        title
      }
    }
  `;
  return (
    <Query query={postQuery}>
      { ({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error: ${error.message}`;
        return (
          <pre>
            { JSON.stringify(data) }
          </pre>
        );
      } }
    </Query>
  );
};

Post.getInitialProps = async (ctx) => {
  return {
    slug: ctx.query.slug,
  };
};

export default Post;