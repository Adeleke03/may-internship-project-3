import * as Yup from "yup";

export const contactSchema = Yup
.object({
  email: Yup
      .string()
      .required("email is required")
      .email("invalid email format"),
      name: Yup.string().required("Name is required"),
      message: Yup.string() .required("A message is required") .min(12,"minimum lenght of message should be at least 12 letters")
})