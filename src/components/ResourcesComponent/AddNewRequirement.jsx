import { Formik } from "formik";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import UserContext from "../../context/userContext";
import { addNewRequirement } from "../../services/requirementService";
import CustomSelect from "../CustomSelect/CustomSelect";
import Input from "../Input/Input";
import TextArea from "../Input/TextArea";
import { allCities } from "./city_helper";
import {
   urgentRequirementOption,
   healthServices,
   stateOptions,
} from "./option_helper";
function AddNewResource(props) {
   const { currentUser } = useContext(UserContext);
   const [backendError, setBackendError] = useState(null);

   const initialValues = {
      resourceName: "",
      contactablePersonName: "",
      contactablePersonMobileNumber: "",
      urgentRequirement: "",
      typesOfResource: "",
      qtyOfResource: "",
      state: "",
      city: "",

      address: "",
      description: "",

      // studentId: "",
   };

   const phoneRegx = /^[0-9]{10}$/;

   const validationSchema = Yup.object().shape({
      resourceName: Yup.string().trim().min(3).required("Required"),
      contactablePersonName: Yup.string().trim().min(3).required("Required"),

      contactablePersonMobileNumber: Yup.string()
         .trim()
         .matches(phoneRegx, "Phone number Must Be 10 digit")
         .required("Require"),
      urgentRequirement: Yup.string().trim().required("Required"),
      typesOfResource: Yup.string().trim().min(3).required("Required"),
      qtyOfResource: Yup.string().trim(),

      state: Yup.string().trim().required("Required"),
      city: Yup.string().trim().required("Required"),
      address: Yup.string().trim().max(200),
      description: Yup.string().trim().max(300),
   });

   const handelResourceDataSubmit = async (
      values,
      { setSubmiting, resetForm, setFieldError }
   ) => {
      //console.log(values);
      const requirementDetails = {
         ...values,
         userId: currentUser._id,
      };
      try {
         console.log(requirementDetails);
         const { data } = await addNewRequirement({
            requirementData: requirementDetails,
         });
         console.log(data);
         toast.success("your requirement added successfully");
         resetForm();
         props.history.replace("/requirements");
      } catch (error) {
         console.log(error);
         if (error.response && error.response.status === 400) {
            setBackendError(error.response.data.error.message);
            // setFieldError("name", error.response.data.error.message);
         }
      }
   };
   // resetForm();

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={handelResourceDataSubmit}>
         {(props) => {
            const {
               values,
               isValidating,
               errors,
               handleChange,
               handleBlur,
               handleSubmit,
               setFieldValue,
            } = props;
            //console.log(values);
            return (
               <div className="my-10 mx-6 md:max-w-sm md:mx-auto">
                  <h1 className="text-center font-semibold text-xl text-red-300">
                     Add Your Resource Requirement
                  </h1>
                  {backendError && (
                     <p className="text-center text-red-500">{backendError}</p>
                  )}
                  <form onSubmit={handleSubmit}>
                     <Input
                        labelName="Your requirement Resource Name"
                        placeholder="Ex: Oxyzen ,Plasma"
                        type="text"
                        name="resourceName"
                        value={values.resourceName}
                        error={errors.resourceName}
                        onBlur={handleBlur}
                        handelChange={handleChange}
                     />
                     <Input
                        labelName="Person Name "
                        placeholder="Ex:John Doe or X organization"
                        type="text"
                        name="contactablePersonName"
                        value={values.contactablePersonName}
                        error={errors.contactablePersonName}
                        onBlur={handleBlur}
                        handelChange={handleChange}
                     />

                     <Input
                        labelName="Contactable Person mobile number"
                        placeholder="Ex:-9700550022"
                        type="text"
                        name="contactablePersonMobileNumber"
                        value={values.contactablePersonMobileNumber}
                        handelChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.contactablePersonMobileNumber}
                     />
                     <CustomSelect
                        value={values.urgentRequirement}
                        labelName="Is it Urgent Requirement?"
                        options={urgentRequirementOption}
                        onChange={(value) =>
                           setFieldValue("urgentRequirement", value.value)
                        }
                        error={errors.urgentRequirement}
                     />
                     <CustomSelect
                        value={values.typesOfResource}
                        labelName="Resource You Looking For?"
                        options={healthServices}
                        onChange={(value) =>
                           setFieldValue("typesOfResource", value.value)
                        }
                        error={errors.typesOfResource}
                     />
                     <Input
                        labelName="How much Resource required?"
                        placeholder="Enter quantity of resource"
                        type="text"
                        name="qtyOfResource"
                        value={values.qtyOfResource}
                        handelChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.qtyOfResource}
                     />
                     <CustomSelect
                        value={values.state}
                        labelName="Select Your State"
                        options={stateOptions}
                        onChange={(value) =>
                           setFieldValue("state", value.value)
                        }
                        error={errors.state}
                     />
                     <CustomSelect
                        value={values.city}
                        labelName="Select City where You Looking for Resources ?"
                        options={allCities}
                        onChange={(value) => setFieldValue("city", value.value)}
                        error={errors.city}
                     />

                     <TextArea
                        labelName="Address"
                        placeholder="Write Address where People can contact you to help you"
                        rows={4}
                        name="address"
                        handelChange={handleChange}
                        value={values.address}
                        onBlur={handleBlur}
                        error={errors.address}
                     />
                     <TextArea
                        labelName="Description/Notes"
                        placeholder="Write A Brief Description of your requirement"
                        rows={4}
                        name="description"
                        handelChange={handleChange}
                        value={values.description}
                        onBlur={handleBlur}
                        error={
                           errors.description
                              ? errors.description
                              : "Please put important details, e.g. extra phone numbers"
                        }
                     />
                     <button
                        disabled={isValidating}
                        className="px-4 py-2 mt-4 text-white w-full font-light tracking-wider focus:outline-none  bg-blue-600 hover:bg-blue-700  rounded"
                        type="submit">
                        Submit
                     </button>
                  </form>
               </div>
            );
         }}
      </Formik>
   );
}

export default AddNewResource;
