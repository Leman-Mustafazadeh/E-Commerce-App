import * as Yup from 'yup';

 
 export const contactUsSchema = Yup.object().shape({
    fullName: Yup.string().required('fullName is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    title: Yup.string().required('title is required'),
    messages: Yup.string().min(10, 'Message must be at least 10 characters').required('Message is required')
});
