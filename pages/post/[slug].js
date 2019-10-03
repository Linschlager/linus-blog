import React  from 'react';
import Markdown from 'react-markdown';
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

const GET_POST = (slug) => gql`
    {
        post(slug: "${slug}") {
            content
        }
    }
`;
const Post = ({ slug }) => {
  const { data, error, loading } = useQuery(GET_POST(slug));
  if (loading) return 'Loading...';
  if (error) return `Error: ${error.message}`;
  return (
    <Markdown>
      { data.post.content }
    </Markdown>
  );
};

Post.getInitialProps = async (ctx) => {
  return {
    slug: ctx.query.slug,
  };
};

export default Post;