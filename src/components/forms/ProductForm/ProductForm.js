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
    productId,
    productName,
    productCost,
    isAddForm,
    productAddHandler,
    productEditHandler,
    onClose,
}) => {
    const classes = useStyles();
    const handleSubmit = async (values) => {
        const { productName, productCost } = values;
        if (isAddForm) {
            productAddHandler(productName, Number(productCost));
        } else {
            productEditHandler(productId, productName, Number(productCost));
        }

        onClose();
    };

    return (
        <div className={classes.root}>
            <Formik
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                initialValues={{
                    productName: productName,
                    productCost: productCost,
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
                                {isAddForm ? 'Add' : 'Edit'}
                            </Button>
                        </Box>
                    </Form>
                )}
            />
        </div>
    );
};

ProductForm.propTypes = {
    productId: PropTypes.number,
    productName: PropTypes.string,
    productCost: PropTypes.number,
    isAddForm: PropTypes.bool,
    productAddHandler: PropTypes.func,
    productEditHandler: PropTypes.func,
    onClose: PropTypes.func,
};

ProductForm.defaultProps = {
    productId: 0,
    productName: '',
    productCost: 0,
    isAddForm: true,
    productAddHandler: () => {},
    productEditHandler: () => {},
    onClose: () => {},
};

export default ProductForm;
