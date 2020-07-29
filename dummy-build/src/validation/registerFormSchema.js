import * as yup from 'yup'


const registerFormSchema = yup.object().shape({
name: yup.string()
    .trim()   
    .min(2, "First name must be at least 2 characters")
    .required("Username is required"),
username: yup.string()

    .trim()   
    .min(4, "Username must be at least 4 characters")
    .required("Username is required"),
password: yup.string()   
    .trim()
    .min(4, 'Password must be at least 4 characters')    
    .required("Password is Required"),
email: yup.string()
    .trim()   
    .min(4, "Email must be at least 4 characters")
    .required("Username is required"),
location : yup.string()
    .trim()   
    .min(4, "Location must be at least 4 characters"),
      
});
export default registerFormSchema;