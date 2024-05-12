import * as Yup from 'yup';
 const contactschema = Yup.object().shape({
    fullName:Yup.string().required("name is required"),
    email: Yup.string().email().required("email is required"),
    title:Yup.string().required("title is required"),
    messages:Yup.string().required("message is required")
})
export default contactschema