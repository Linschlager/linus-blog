import React from 'react';
import Markdown from 'react-markdown';

const BlogPost = ({ md }) => {
  if (!md) return "404 - Post not found";
  return (
   <Markdown source={md}/>
  );
};

BlogPost.getInitialProps = async (ctx) => {
  try {
    const md = await require(`../posts/${ctx.query.p}.md`).default;
    return { md };
  } catch {
    return { md: false };
  }
};

export default BlogPost;