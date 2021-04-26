const verifiedOptions = [
   { value: "verified", label: "verified" },
   { value: "unverified", label: "unverified" },
];
const urgentRequirementOption = [
   { value: "Yes", label: "Yes" },
   { value: "No", label: "No" },
];

const availableServices = [
   "Ambulance",
   "Oxygen",
   "Plasma",
   "Hospital Beds(Oxygen Bed)",
   "Hospital Beds(ICU)",
   "Hospital Beds(Normal)",
   "Remdesivir",
   "Oximeter",
   "Medicines",
   "Home Nurses",
   "Doctors",
];

const healthServices = availableServices.map((hostel) => ({
   value: hostel,
   label: hostel,
}));

const allState = [
   {
      key: "AN",
      name: "Andaman and Nicobar Islands",
   },
   {
      key: "AP",
      name: "Andhra Pradesh",
   },
   {
      key: "AR",
      name: "Arunachal Pradesh",
   },
   {
      key: "AS",
      name: "Assam",
   },
   {
      key: "BR",
      name: "Bihar",
   },
   {
      key: "CG",
      name: "Chandigarh",
   },
   {
      key: "CH",
      name: "Chhattisgarh",
   },
   {
      key: "DH",
      name: "Dadra and Nagar Haveli",
   },
   {
      key: "DD",
      name: "Daman and Diu",
   },
   {
      key: "DL",
      name: "Delhi",
   },
   {
      key: "GA",
      name: "Goa",
   },
   {
      key: "GJ",
      name: "Gujarat",
   },
   {
      key: "HR",
      name: "Haryana",
   },
   {
      key: "HP",
      name: "Himachal Pradesh",
   },
   {
      key: "JK",
      name: "Jammu and Kashmir",
   },
   {
      key: "JH",
      name: "Jharkhand",
   },
   {
      key: "KA",
      name: "Karnataka",
   },
   {
      key: "KL",
      name: "Kerala",
   },
   {
      key: "LD",
      name: "Lakshadweep",
   },
   {
      key: "MP",
      name: "Madhya Pradesh",
   },
   {
      key: "MH",
      name: "Maharashtra",
   },
   {
      key: "MN",
      name: "Manipur",
   },
   {
      key: "ML",
      name: "Meghalaya",
   },
   {
      key: "MZ",
      name: "Mizoram",
   },
   {
      key: "NL",
      name: "Nagaland",
   },
   {
      key: "OR",
      name: "Odisha",
   },
   {
      key: "PY",
      name: "Puducherry",
   },
   {
      key: "PB",
      name: "Punjab",
   },
   {
      key: "RJ",
      name: "Rajasthan",
   },
   {
      key: "SK",
      name: "Sikkim",
   },
   {
      key: "TN",
      name: "Tamil Nadu",
   },
   {
      key: "TS",
      name: "Telangana",
   },
   {
      key: "TR",
      name: "Tripura",
   },
   {
      key: "UK",
      name: "Uttar Pradesh",
   },
   {
      key: "UP",
      name: "Uttarakhand",
   },
   {
      key: "WB",
      name: "West Bengal",
   },
];
const stateOptions = allState.map((state) => {
   return {
      value: state.name,
      label: state.name,
   };
});

export {
   stateOptions,
   verifiedOptions,
   healthServices,
   urgentRequirementOption,
};
