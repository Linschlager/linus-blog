import React from 'react';
import Markdown from 'react-markdown';
import PostList from "../components/PostList";

const BlogPost = ({ md, slug }) => {
  if (!slug) return <PostList />;
  if (!md) return "404 - Post not found";
  return (
   <Markdown source={md}/>
  );
};

BlogPost.getInitialProps = async (ctx) => {
  try {
    const md = await require(`../posts/${ctx.query.p}.md`).default;
    return { md, slug: ctx.query.p };
  } catch {
    return { md: false };
  }
};

export default BlogPost;