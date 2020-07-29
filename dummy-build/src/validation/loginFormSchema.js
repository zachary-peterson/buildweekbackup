import * as yup from 'yup'

const loginSchema = yup.object().shape({
  username: yup.string()
  .trim()   
      .min(4, "Must be at least 4 characters")
      .required("Username is required"),

  password: yup.string()   
  .trim()
  .min(3, 'Must be at least 4 characters')    
  .required("Password is Required"),
});
export default loginSchema  