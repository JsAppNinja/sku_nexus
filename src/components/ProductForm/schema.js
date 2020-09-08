import * as Yup from 'yup';

export default Yup.object().shape({
    productName: Yup.string().required('Product name is required'),
    productCost: Yup.number()
        .typeError('Number only')
        .required('Cost is required')
        .positive('Cost must be a positive number'),
});
