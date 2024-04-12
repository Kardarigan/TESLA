import React, { useState, useRef } from "react";

const TabComponent = ({ tabButtons, tabContents }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabButtonsRef = useRef([]);
  const tabContentsRef = useRef([]);

  const handleTabClick = (index) => {
    setActiveTab(index);

    // Remove 'is-visible' and 'is-active' classes from all tab buttons and contents
    tabButtonsRef.current.forEach((button) => {
      button.classList.remove("is-visible", "is-active");
    });
    tabContentsRef.current.forEach((content) => {
      content.classList.remove("is-visible", "is-active");
    });

    // Add 'is-visible' and 'is-active' classes to the clicked tab button and its corresponding tab content
    tabButtonsRef.current[index].classList.add("is-visible", "is-active");
    tabContentsRef.current[index].classList.add("is-visible", "is-active");
  };

  return (
    <div>
      <div>
        {tabButtons.map((button, index) => (
          <button
            key={index}
            ref={(el) => (tabButtonsRef.current[index] = el)}
            data-tabbutton={index}
            onClick={() => handleTabClick(index)}
          >
            {button}
          </button>
        ))}
      </div>
      <div>
        {tabContents.map((content, index) => (
          <div
            key={index}
            ref={(el) => (tabContentsRef.current[index] = el)}
            data-tabcontent={index}
          >
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
