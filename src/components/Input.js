import React, { useEffect, useState } from "react";
import "./Input.css";

const Input = ({ label, placeholder, type = "text", helperText }) => {
  const [value, setValue] = useState("");
  const [required, setRequired] = useState(false);
  const [inputState, setInputState] = useState(" brand");
  const [content, setContent] = useState(" content-low");
  const [labelSize, setLabelSize] = useState(true);
  const [bodySmall, setBodySmall] = useState(false);
  const [dimension, setDimension] = useState(' space-XS');

  let inputClass = "input" + inputState + dimension + content;
  let labelStyle = "label"

  if(labelSize){
    labelStyle += " label-Small"
  } else {
    labelStyle += " label-Medium"
  }

  if(bodySmall) {
    inputClass += " body-Small"
  }


  return (
    <>
      <div className="flex flex-col w-xs max-w-md">
        <div className="label-box">
          {label && <label className={labelStyle}>{label}</label>}
          {!required && <span className={labelStyle + " label-s"}>Optional</span>}
        </div>
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          required={required}
          className={inputClass}
        />
        {helperText && (
          <p
            className={`helper-text ${inputState === "error" ? "error" : "warning"}`}
          >
            {helperText}
          </p>
        )}
      </div>
      <div className="Buttons">
        <button
          onClick={() => setInputState(" brand")}
          className="Button brand"
        >
          Default
        </button>
        <button
          onClick={() => setInputState(" warning")}
          className="Button warning"
        >
          Warning
        </button>
        <button onClick={() => setInputState(" danger")} className="Button danger">
          Danger
        </button>
      </div>
      <div
        className={
          required ? "Button brand" : "Button danger"
        }
        onClick={() => setRequired(!required)}
      >
        Required
      </div>

      <div className="Buttons">
        <button onClick={() => setContent(" content-low")} className="Button content-low">Content-Low</button>
        <button onClick={() => setContent(" content-m")} className="Button content-m">Content-Medium</button>
        <button onClick={() => setContent(" content-x-high")} className="Button content-x-high">Content-X-High</button>
      </div>

      <div className="Buttons">
        <button onClick={() => setLabelSize(true)} className="Button label-Small">Label-Small</button>
        <button onClick={() => setLabelSize(false)} className="Button label-Medium">Label-Medium</button>
      </div>
      <div className="Buttons">
        <button onClick={() => setBodySmall(!bodySmall)} className="Button body-Small">Body-Small</button>
      </div>
      <div className="Buttons flex-col">
        <button onClick={() => setDimension(" space-XS")} className="Button space-XS">Dimesion-XS</button>
        <button onClick={() => setDimension(" space-S")} className="Button space-S">Dimesion-S</button>
        <button onClick={() => setDimension(" space-M")} className="Button space-M">Dimesion-M</button>
        <button onClick={() => setDimension(" space-L")} className="Button space-L">Dimesion-L</button>
      </div>
    </>
  );
};

export default Input;
