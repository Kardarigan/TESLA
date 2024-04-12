import React, { useEffect, useRef } from "react";

function MyComponent() {
  const videoRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const liElements = document.getElementsByTagName("li");
      for (let i = 0; i < liElements.length; i++) {
        const liElement = liElements[i];
        if (liElement.classList.contains("is_visible")) {
          if (videoRef.current && !videoRef.current.paused) {
            continue;
          }
          videoRef.current = liElement.querySelector("video");
          if (videoRef.current) {
            videoRef.current.play();
          }
        } else {
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ul>
      <li className="is_visible">
        <video src="video1.mp4" ref={videoRef} />
      </li>
      <li>
        <video src="video2.mp4" />
      </li>
      <li className="is_visible">
        <video src="video3.mp4" />
      </li>
    </ul>
  );
}

export default MyComponent;
