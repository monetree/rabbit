import React from "react";

import Select from "react-select";

const MultiSelect = ({ options, defaultValue }) => {
  return (
    <Select
      defaultValue={defaultValue}
      isMulti
      name="colors"
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
      isDisabled={true}
    />
  );
};

export default MultiSelect;
