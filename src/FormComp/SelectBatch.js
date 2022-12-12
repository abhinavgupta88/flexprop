import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import Form from "./Form";

function SelectBatch() {
  const options = [
    { label: "Batch 6:00 AM to 7:00 AM", value: "Batch 6:00 AM to 7:00 AM" },
    {
      label: "Batch 7:00 AM to 8:00 AM",
      value: "Batch 7:00 AM to 8:00 AM"
    },

    {
      label: "Batch 8:00 AM to 9:00 AM",
      value: "Batch 8:00 AM to 9:00 AM"
    },
    { label: "Batch 5:00 PM to 6:00 PM", value: "Batch 5:00 PM to 6:00 PM" }
  ];

  const [selected, setSelected] = useState([]);
  const [disabled, setdisabled] = useState(false);
  return (
    <div className="form__row">
      <span>Please Select Your Batch:</span>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select Your Batch for Registration"}
        className={"selectAll"}
      />
    </div>
  );
}

export default SelectBatch;
