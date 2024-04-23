import React from "react";

const Checkbox = () => {
  return (
    <label for="check1st" class="checkWrapp">
      <input type="checkbox" id="check1st" name="check" />
      <span class="checkMark"></span>
    </label>
  );
};

export default Checkbox;
