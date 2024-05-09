const categorySchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required')
        .matches(/^[a-zA-Z]+$/, 'Name must contain only letters')
});
