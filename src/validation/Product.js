import * as Yup from 'yup';

const productSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    category: Yup.string().required('Category is required'),
    salePrice: Yup.number()
        .min(0, 'Sale price cannot be negative')
        .moreThan(Yup.ref('costPrice'), 'Sale price must be greater than cost price')
        .required('Sale price is required'),
    costPrice: Yup.number()
        .min(0, 'Cost price cannot be negative')
        .required('Cost price is required'),
    discountPercentage: Yup.number()
        .min(0, 'Discount percentage cannot be negative')
        .max(100, 'Discount percentage cannot be greater than 100'),
    imgSrc: Yup.string().url('Invalid URL').required('Image source URL is required'),
    description: Yup.string().min(10, 'Description must be at least 10 characters').required('Description is required'),
    stockCount: Yup.number().min(1, 'Stock count must be at least 1').required('Stock count is required'),
    createdAt: Yup.date().default(() => new Date())
});
export default productSchema