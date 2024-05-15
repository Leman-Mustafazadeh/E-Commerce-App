import * as Yup from 'yup';

const UserLoginSchema = Yup.object().shape({
    username:Yup.string().required("username is required"),
    password:Yup.string().min(6,'must be min 6 characters').required('password is required')
})
export default UserLoginSchema