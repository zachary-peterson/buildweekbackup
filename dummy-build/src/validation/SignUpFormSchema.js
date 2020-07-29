import * as yup from 'yup'


const signUpSchema = yup.object().shape({
   name: yup
    .string()
    .trim()   
    .min(2, "Must be at least 2 characters")
    .required("Username is required"),
    // lname: yup.string()
    //     .trim()   
    //         .min(2, "Must be at least 2 characters")
    //         .required("Username is required"),
  username: yup
    .string()
    .trim()   
    .min(4, "Must be at least 4 characters")
    .required("Username is required"),

  password: yup.string()   
  .trim()
  .min(4, 'Must be at least 4 characters')    
  .required("Password is Required"),
  location : yup.string()
    .trim()   
    .min(4, "Must be at least 4 characters"),
email: yup.string()
      .trim()   
     .min(4, "Must be at least 4 characters")
        .required("Username is required"),
      
});
export default signUpSchema;