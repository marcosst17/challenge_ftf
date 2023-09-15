import { useState } from "react"

type ToggleProps = {
  isChecked:boolean,
  handleToggle:(e:any)=>void
}

const ToggleComponent = ({isChecked, handleToggle}:ToggleProps) => {

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        className="form-checkbox h-2 w-2 text-blue-600"
      />
      <span className="text-gray-800 slider round"></span>
    </label>
  );
};

export default ToggleComponent;