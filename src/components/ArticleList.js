import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article 
          key={post.id} 
          title={post.title} 
          date={post.date} 
          preview={post.preview} 
          minutes={post.minutes} // if minutes are part of each post object
        />
      ))}
    </main>
  );
}

export default ArticleList;