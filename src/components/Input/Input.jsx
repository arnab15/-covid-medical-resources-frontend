import React from "react";

function Input({
  labelName,
  type,
  placeholder,
  name,
  error,
  value,
  handelChange,
  ...otherProps
}) {
  return (
    <div>
      {labelName && (
        <label
          htmlFor="email"
          className="mb-6 text-xs sm:text-sm tracking-wide text-gray-600">
          {labelName}:
        </label>
      )}
      <input
        type={type}
        name={name}
        className="text-sm sm:text-base mt-2  placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-300 w-full py-2 focus:outline-none focus:border-blue-400"
        placeholder={placeholder}
        value={value}
        onChange={handelChange}
        {...otherProps}
      />
      {error && (
        <span className="text-sm sm:text-base text-red-500">{error}</span>
      )}
    </div>
  );
}

export default Input;
