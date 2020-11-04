import React from "react";
import { useAppContext } from "../context/context";

const Story = (props) => {
  const { deleteStory } = useAppContext();
  console.log("props=>", props);
  return (
    <article key={props.id} className="story">
      <h4 className="title">{props.title}</h4>
      <p className="info">
        {props.points} points by
        <span>{props.author} | </span>
        {props.commentsCount}comments
      </p>
      <div>
        <a href={props.url} target="_blank" className="read-link">
          Read more
        </a>
        <button className="remove-btn" onClick={() => deleteStory(props.id)}>
          Remove from view
        </button>
      </div>
    </article>
  );
};
export default Story;
