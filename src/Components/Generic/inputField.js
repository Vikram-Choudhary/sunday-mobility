import React, { useState } from "react";

export default function InputField(props) {
  const {
    defaultValue = "",
    title,
    className,
    type,
    id,
    name,
    required = false,
    minLength,
    maxLength,
    size,
    autoFocus,
    disabled,
    height,
    regxPattern,
    placeholder,
    getValue = () => {},
  } = props;
  const [fieldValue, setFieldValue] = useState(defaultValue);
  const onChangeValue = (e) => {
    setFieldValue(e.target.value);
    getValue(e.target.value);
  };
  return (
    <input
      value={fieldValue}
      title={title}
      className={className}
      placeholder={placeholder}
      autoFocus={autoFocus}
      type={type}
      id={id}
      name={name}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      size={size}
      disabled={disabled}
      height={height}
      pattern={regxPattern}
      onChange={onChangeValue}
    />
  );
}
