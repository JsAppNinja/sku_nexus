import { object, string, number } from 'yup';

export default object().shape({
  productName: string().required('Product name is required'),
  productCost: number().required('Cost is required').positive('Cost must be a positive number'),
});
