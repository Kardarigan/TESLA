import React from "react";
import { stories } from "../constants";
import { useParams } from "react-router-dom";

const Story = () => {
  const { customer_story } = useParams();
  const theStory = stories.find(
    (e) =>
      e.title.replace(/\s+/g, "-").toLowerCase() ===
      customer_story.replace(/\s+/g, "-").toLowerCase()
  );

  return <div className="pagecenter-x pb-40">{theStory.title}</div>;
};

export default Story;
