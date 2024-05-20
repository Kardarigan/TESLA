import React from "react";
import { stories } from "../constants";
import { useParams } from "react-router-dom";

const Story = () => {
  const { customer_story } = useParams();
  const theStory = stories.find(
    (e) =>
      e &&
      e.title.replace(/\//g, "%2F").replace(/\s+/g, "-").toLowerCase() ===
        customer_story.replace(/\//g, "%2F").replace(/\s+/g, "-").toLowerCase()
  );
  console.log("----------------------------------");
  console.log(
    stories[0].title.replace(/\//g, "%2F").replace(/\s+/g, "-").toLowerCase()
  );
  console.log(
    customer_story.replace(/\//g, "%2F").replace(/\s+/g, "-").toLowerCase()
  );
  console.log("----------------------------------");

  return <div className="pagecenter-x pb-40">{theStory.title}</div>;
};

export default Story;
