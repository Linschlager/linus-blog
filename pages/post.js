import React from 'react';
import Markdown from 'react-markdown';
import {  Query } from "react-apollo";
import gql from "graphql-tag";

const Post = ({ slug }) => {
  const postQuery = gql`
    {
      post(slug: "${slug}") {
        content
      }
    }
  `;
  return (
    <Query query={postQuery}>
      { ({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error: ${error.message}`;
        return (
          <Markdown>
            { data.post.content }
          </Markdown>
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