const userSchema = Yup.object().shape({
    username:Yup.string().min(3,'Min 3 simvol').required('username is required'),
    password:Yup.string().min(5,'Min 5 simvol').matches( "^(?=.*[A-Za-z])",),
    confirmPassword: Yup.string().required('confirmPassword is required').oneOf([yup.ref("password"), null], "Passwords must match"),
    email:Yup.string().email().required('email is required'),
    profileImg:Yup.string().url('invalid url').required('email is required'),
    balance:Yup.string().positive().integer().required('balance is required')
});

