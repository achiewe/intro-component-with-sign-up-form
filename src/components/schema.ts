import * as yup from "yup";

const latinRegex = /^[a-zA-Z\s]*$/;

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name cannot be empty")
    .matches(latinRegex, "First Name must only contain Latin characters"),
  lastName: yup
    .string()
    .required("Last Name cannot be empty")
    .matches(latinRegex, "Last Name must only contain Latin characters"),
  email: yup
    .string()
    .email("Looks like this is not an email")
    .required("Email cannot be empty"),
  password: yup.string().min(8).max(20).required(),
});

export default schema;
