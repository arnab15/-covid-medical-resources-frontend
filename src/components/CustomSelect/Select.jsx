import React from "react";
import Select from "react-select";

function CustomSelect({ labelName, onChange, value, options, error, isMulti }) {
   return (
      <div>
         {labelName && (
            <h4 className="mb-2 mt-3 font-semibold pl-2 text-xs sm:text-sm tracking-wide text-gray-700">
               {labelName}
            </h4>
         )}
         <Select
            isMulti={isMulti}
            options={options}
            onChange={onChange}
            value={value}
         />
         {error && (
            <span className="text-sm sm:text-base text-red-500">{error}</span>
         )}
      </div>
   );
}

export default CustomSelect;
