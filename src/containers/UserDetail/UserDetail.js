import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import ProductItem from 'components/ProductItem';
import UserInfoPanel from 'components/UserInfoPanel';
import ProductForm from 'components/ProductForm';
import ProductModal from 'components/ProductModal';
import actions from 'redux/actions';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useConfirm } from 'material-ui-confirm';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontFamily: 'sans-serif',
    },
    header: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    back: {
        '&:hover': {
            cursor: 'pointer',
        },
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
}));

const UserDetail = () => {
    const history = useHistory();
    const user = useSelector((state) => state.global.user);
    const dispatch = useDispatch();
    const classes = useStyles();
    const confirm = useConfirm();

    const [products, setProducts] = useState([]);
    const [show, setShow] = useState(false);
    const [isAdd, setIsAdd] = useState(true);
    const [productId, setProductId] = useState(0);
    const [productName, setProductName] = useState('');
    const [productCost, setProductCost] = useState(0);

    const handleClose = () => setShow(false);
    const showAddModal = () => {
        setShow(true);
        setIsAdd(true);
        setProductId(0);
        setProductName('');
        setProductCost(0);
    };
    const showEditModal = (id, name, cost) => () => {
        setShow(true);
        setIsAdd(false);
        setProductId(id);
        setProductName(name);
        setProductCost(cost);
    };

    const handleAddProduct = (name, cost) => {
        dispatch(actions.addProduct(name, cost));
    };

    const handleEditProduct = (id, name, cost) => {
        dispatch(actions.editProduct(id, name, cost));
    };

    const handleRemoveProduct = (id) => {
        confirm({
            description: `This product will be permanently deleted.`,
        }).then(() => {
            dispatch(actions.removeProduct(id));
        });
    };

    useEffect(() => {
        dispatch(actions.getAllUsers());
        const ccNumber = history.location.pathname.split('/')[2];
        dispatch(actions.getUser(ccNumber));
    }, []);

    useEffect(() => {
        setProducts(user.products);
    }, [user]);

    if (!user) return null;

    return (
        <div className={classes.root}>
            <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item xs={9}>
                    <Grid container spacing={3} direction="row">
                        <Grid item xs={12}>
                            <Typography className={classes.header}>
                                <ArrowBackIcon
                                    onClick={() => history.push('/')}
                                    className={classes.back}
                                />
                                {user.first_name} {user.last_name}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Divider variant="middle" xs={12} />
                </Grid>
                <Grid item xs={9}>
                    <Grid container spacing={3} direction="column">
                        <Grid item xs={12}>
                            <UserInfoPanel user={user} className="my-3" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={9}>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <h2 className="pl-3">Products</h2>
                        <Button variant="outlined" onClick={showAddModal}>
                            Add
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={9}>
                    <Grid container spacing={3} direction="column">
                        {products &&
                            products.map((item) => (
                                <ProductItem
                                    key={item.id}
                                    className="my-2"
                                    name={item.name}
                                    cost={item.cost}
                                    handleEdit={showEditModal(
                                        item.id,
                                        item.name,
                                        item.cost,
                                    )}
                                    handleRemove={() =>
                                        handleRemoveProduct(item.id)
                                    }
                                />
                            ))}
                    </Grid>
                </Grid>
            </Grid>
            <ProductModal show={show} onHide={handleClose}>
                <ProductForm
                    id={productId}
                    name={productName}
                    cost={productCost}
                    isAdd={isAdd}
                    handleAddProduct={handleAddProduct}
                    handleEditProduct={handleEditProduct}
                    handleClose={handleClose}
                />
            </ProductModal>
        </div>
    );
};

export default UserDetail;
