import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name cannot be empty"),
  lastName: yup.string().required("Last Name cannot be empty"),
  email: yup.string().email().required("Looks like this is not an email"),
  password: yup.string().min(8).max(20).required("Password cannot be empty"),
});

export default schema;
