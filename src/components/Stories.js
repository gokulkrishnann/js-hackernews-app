import React from "react";
import { useAppContext } from "../context/context";
import Story from "./Story";

const Stories = () => {
  const { isLoading, hits } = useAppContext();

  return (
    <>
      {isLoading && <div className="loading" />}
      <section className="stories">
        {hits.map((story) => {
          const { objectID, title, num_comments, url, points, author } = story;
          return (
            <Story
              key={objectID}
              id={objectID}
              title={title}
              commentsCount={num_comments}
              url={url}
              author={author}
              points={points}
            />
          );
        })}
      </section>
    </>
  );
};

export default Stories;
