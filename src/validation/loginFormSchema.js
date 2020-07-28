import * as yup from 'yup'

const loginSchema = yup.object().shape({
  user_name: yup.string()
  .trim()   
      .min(4, "Must be at least 4 characters")
      .required("Username is required"),

  password: yup.string()   
  .trim()
  .min(4, 'Must be at least 4 characters')    
  .required("Password is Required"),
});
export default loginSchema  