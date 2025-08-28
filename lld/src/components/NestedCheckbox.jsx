import React from "react";
import { useState } from "react";

export const CheckBox = ({ nestedData, updateData }) => {
  return (
    <div>
      {nestedData.map((item) => (
        <div key={item.id} className={"parent"}>
          <input
            type="checkbox"
            value={item?.checked}
            id={item.id + " " + item.label}
            onInput={(e) => updateData(e)}
          />
          <label htmlFor={item.id + " " + item.label}>{item.label}</label>
          {item.children && item.children.length > 0 && (
            <CheckBox nestedData={item.children} updateData={updateData} />
          )}
        </div>
      ))}
    </div>
  );
};
const NestedCheckbox = () => {
  const [data, setData] = useState([
    {
      id: 1,
      label: "Parent 1",
      checked: false,
      children: [
        {
          id: 11,
          label: "Child 1.1",
          checked: false,
          children: [],
        },
        {
          id: 12,
          label: "Child 1.2",
          checked: false,
          children: [
            {
              id: 121,
              label: "Child 1.2.1",
              checked: false,
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      label: "Parent 2",
      checked: false,
      children: [
        {
          id: 21,
          label: "Child 2.1",
          checked: false,
          children: [],
        },
      ],
    },
    { id: 3, label: "Parent 3", checked: false, children: [] },
    {
      id: 4,
      label: "Parent 4",
      checked: false,
      children: [
        {
          id: 41,
          label: "Child 4.1",
          checked: false,
          children: [
            {
              id: 411,
              label: "Child 4.1.1",
              checked: false,
              children: [],
            },
            {
              id: 412,
              label: "Child 4.1.2",
              checked: false,
              children: [],
            },
          ],
        },
      ],
    },
  ]);

  const updateData = (e) => {
    const id = e.target.id.split(" ")[0];
    const newData = data.map((item) => {
      if (item.id === parseInt(id)) {
        // If the item has children, check them recursively
        item = { ...item, checked: e.target.checked };
        if (item.children && item.children.length > 0) {
          const updatedChildren = item.children.map((child) => {
            return { ...child, checked: e.target.checked };
          });
          console.log("updatedChildren", updatedChildren);
          return { ...item, children: updatedChildren };
        }
      }
      return item;
    });

    // Update the data state with the new data
    setData(newData);
    //Find the checbox has children
    // If it has children, update the children as well

    //Find the parent of the checkbox
    // If the parent is checked, check all children
    // If the parent is unchecked, uncheck all children
  };
  return (
    <div className="nestedCheckboxContainer parentContainer">
      <CheckBox nestedData={data} updateData={updateData} />
    </div>
  );
};

export default NestedCheckbox;
