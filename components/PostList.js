import React from 'react';
import Link from 'next/link';
import { posts } from "../helper/posts";
import { List } from "antd";

const PostList = () =>(
  <List
    itemLayout="horizontal"
    dataSource={posts}
    renderItem={post => (
      <List.Item>
        <List.Item.Meta
          title={<Link href={`/blog?p=${post.slug}`}><a>{post.title}</a></Link>}
          description={post.summary}
        />
      </List.Item>
    )}
  >
  </List>
);

export default PostList;