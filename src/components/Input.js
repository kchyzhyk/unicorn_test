import React, { useState } from "react";
import "./Input.css";

const Input = ({ label, placeholder, type = "text", required, error, warning, helperText }) => {
  const [value, setValue] = useState("");

  let inputClass = "input";
  if (error) inputClass += " error";
  else if (warning) inputClass += " warning";

  return (
    <div className="flex flex-col w-xs max-w-md">
      <div className="label-box">
         {label && <label className="label">{label}</label>}
         {!required && <span className="label-s">Optional</span>}
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        required={required}
        className={inputClass}
      />
      {helperText && <p className={`helper-text ${error ? "error" : warning ? "warning" : ""}`}>{helperText}</p>}
    </div>
  );
};

export default Input;

