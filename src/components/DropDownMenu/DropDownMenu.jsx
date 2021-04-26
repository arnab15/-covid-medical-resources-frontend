import React from "react";
import { Menu } from "@headlessui/react";
function DropDownMenu({ email }) {
   return (
      <Menu as="div" className="relative ">
         <Menu.Button className="px-4 py-2 rounded  text-white ...">
            Options
         </Menu.Button>
         <Menu.Items
            as="div"
            className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
            <Menu.Item>
               {({ active }) => (
                  <a
                     className={`${
                        active &&
                        "block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
                     } `}
                     href="/account-settings">
                     Your Resources
                  </a>
               )}
            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                  <a
                     className={`${
                        active &&
                        "block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
                     }`}
                     href="/documentation">
                     Logout
                  </a>
               )}
            </Menu.Item>
         </Menu.Items>
      </Menu>
   );
}

export default DropDownMenu;
