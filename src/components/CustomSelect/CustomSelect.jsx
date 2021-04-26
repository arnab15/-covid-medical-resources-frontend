import React from "react";
import Select from "react-select";

function CustomSelect({
   labelName,
   onChange,
   value,
   options,
   error,
   isMulti,
   defaultValue,
   placeholder,
   isClearable,
   selectInputRef,
}) {
   const setDefaultValue = (options, value) => {
      return options ? options.find((option) => option.value === value) : "";
   };
   return (
      <div>
         {labelName && (
            <h4 className="mb-2 mt-3 font-semibold pl-2 text-xs sm:text-sm tracking-wide text-gray-700">
               {labelName}
            </h4>
         )}
         <Select
            ref={selectInputRef}
            isMulti={isMulti}
            options={options}
            onChange={onChange}
            value={setDefaultValue(options, value)}
            defaultValue={defaultValue}
            placeholder={placeholder}
            isClearable={isClearable}
         />
         {error && (
            <span className="text-sm sm:text-base text-red-500">{error}</span>
         )}
      </div>
   );
}

export default CustomSelect;
