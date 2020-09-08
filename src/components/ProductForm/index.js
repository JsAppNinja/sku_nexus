import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import validationSchema from './schema';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 5,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 250,
        paddingLeft: 40,
        paddingRight: 40,
    },
    button: {
        width: '100%',
        marginTop: 5,
    },
}));

const ProductForm = ({
    id,
    name,
    cost,
    isAdd,
    handleAddProduct,
    handleEditProduct,
    handleClose,
}) => {
    const classes = useStyles();
    const handleSubmit = async (values) => {
        const { productName, productCost } = values;
        if (isAdd) {
            handleAddProduct(productName, Number(productCost));
        } else {
            handleEditProduct(id, productName, Number(productCost));
        }

        handleClose();
    };

    return (
        <div className={classes.root}>
            <Formik
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                initialValues={{
                    productName: name,
                    productCost: cost,
                }}
                render={() => (
                    <Form className={classes.form}>
                        <Field
                            name="productName"
                            type="text"
                            placeholder="Product Name"
                            render={({ field }) => (
                                <FormControl margin="normal">
                                    <TextField
                                        label="Product Name"
                                        {...field}
                                    />
                                </FormControl>
                            )}
                        />
                        <ErrorMessage name="productName" component="div" />
                        <Field
                            name="productCost"
                            type="number"
                            placeholder="Cost"
                            render={({ field }) => (
                                <FormControl margin="normal">
                                    <TextField
                                        label="Product Cost"
                                        {...field}
                                    />
                                </FormControl>
                            )}
                        />
                        <ErrorMessage name="productCost" component="div" />
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            mt={3}
                        >
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                            >
                                {isAdd ? 'Add' : 'Edit'}
                            </Button>
                        </Box>
                    </Form>
                )}
            />
        </div>
    );
};

ProductForm.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    cost: PropTypes.number,
    isAdd: PropTypes.bool,
    handleAddProduct: PropTypes.func,
    handleEditProduct: PropTypes.func,
    handleClose: PropTypes.func,
};

ProductForm.defaultProps = {
    id: 0,
    name: '',
    cost: 0,
    isAdd: true,
    handleAddProduct: () => {},
    handleEditProduct: () => {},
    handleClose: () => {},
};

export default ProductForm;
