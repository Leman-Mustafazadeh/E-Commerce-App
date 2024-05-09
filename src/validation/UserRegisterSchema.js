import * as Yup from 'yup';

const UserRegisterSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().min(6, 'Must be at least 6 characters').required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required("Confirm password is required"),
  email: Yup.string().email('Invalid email').required("Email is required"),
  profileImg: Yup.mixed().required('Please upload a profile image'),
  balance: Yup.number().positive().integer().required("Balance is required")
});

export default UserRegisterSchema;
