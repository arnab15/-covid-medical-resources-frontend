import { Formik } from "formik";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import UserContext from "../../context/userContext";
import { addNewResource } from "../../services/resourceService";
import CustomSelect from "../CustomSelect/CustomSelect";
import Input from "../Input/Input";
import TextArea from "../Input/TextArea";
import { allCities } from "./city_helper";
import { verifiedOptions, healthServices, stateOptions } from "./option_helper";
function AddNewResource(props) {
   const { currentUser } = useContext(UserContext);
   const [backendError, setBackendError] = useState(null);

   const initialValues = {
      resourceName: "",
      contactablePersonName: "",
      contactablePersonMobileNumber: "",
      personVerified: "",
      typesOfResource: "",
      qtyOfResource: "",
      state: "",
      city: "",
      pincode: "",
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
      personVerified: Yup.string().trim().min(3).required("Required"),
      typesOfResource: Yup.string().trim().min(3).required("Required"),
      qtyOfResource: Yup.string().trim(),

      state: Yup.string().trim().required("Required"),
      city: Yup.string().trim().required("Required"),
      pincode: Yup.string().trim().max(6),
      address: Yup.string().trim().max(200),
      description: Yup.string().trim().max(300),
   });

   const handelResourceDataSubmit = async (
      values,
      { setSubmiting, resetForm, setFieldError }
   ) => {
      //console.log(values);
      const resourceDetails = {
         ...values,
         userId: currentUser._id,
      };
      try {
         const { data } = await addNewResource({
            resourceDetails: resourceDetails,
         });
         toast.success(data.message);
         resetForm();
         props.history.replace("/");
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
                     Add New Health Resource
                  </h1>
                  {backendError && (
                     <p className="text-center text-red-500">{backendError}</p>
                  )}
                  <form onSubmit={handleSubmit}>
                     <Input
                        labelName="Your Resource Name or Organization Name"
                        placeholder="Ex: Oxyzen Service,Hospital Name,Plazma Doner"
                        type="text"
                        name="resourceName"
                        value={values.resourceName}
                        error={errors.resourceName}
                        onBlur={handleBlur}
                        handelChange={handleChange}
                     />
                     <Input
                        labelName="Contactable Person Name "
                        placeholder="Ex:John Doe or X organization"
                        type="text"
                        name="contactablePersonName"
                        value={values.contactablePersonName}
                        error={errors.contactablePersonName}
                        onBlur={handleBlur}
                        handelChange={handleChange}
                     />

                     <Input
                        labelName="Verifiable/Contactable Person mobile number"
                        placeholder="Enter  verifiable mobile number"
                        type="text"
                        name="contactablePersonMobileNumber"
                        value={values.contactablePersonMobileNumber}
                        handelChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.contactablePersonMobileNumber}
                     />
                     <CustomSelect
                        value={values.personVerified}
                        labelName="Is this person verified?Mobile no verified?"
                        options={verifiedOptions}
                        onChange={(value) =>
                           setFieldValue("personVerified", value.value)
                        }
                        error={errors.personVerified}
                     />
                     <CustomSelect
                        value={values.typesOfResource}
                        labelName="Select Type of Resource You Offering"
                        options={healthServices}
                        onChange={(value) =>
                           setFieldValue("typesOfResource", value.value)
                        }
                        error={errors.typesOfResource}
                     />
                     <Input
                        labelName="Total Nuber Of Resource available?"
                        placeholder="Enter quantity"
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
                        labelName="Select City where Your Resources is available?"
                        options={allCities}
                        onChange={(value) => setFieldValue("city", value.value)}
                        error={errors.city}
                     />
                     <Input
                        labelName="Area Pincode?"
                        placeholder="Enter Area Pincode"
                        type="text"
                        name="pincode"
                        value={values.pincode}
                        handelChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.pincode}
                     />
                     <TextArea
                        labelName="Address"
                        placeholder="Write Address where People will find the service"
                        rows={4}
                        name="address"
                        handelChange={handleChange}
                        value={values.address}
                        onBlur={handleBlur}
                        error={errors.address}
                     />
                     <TextArea
                        labelName="Description/Notes"
                        placeholder="write your resources service details/description"
                        rows={4}
                        name="description"
                        handelChange={handleChange}
                        value={values.description}
                        onBlur={handleBlur}
                        error={
                           errors.description
                              ? errors.description
                              : "Please put important details, e.g. extra phone numbers, is this a free or paid service, availability levels"
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
