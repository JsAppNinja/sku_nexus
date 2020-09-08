import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ProductItem from 'components/ProductItem';
import UserInfoPanel from 'components/UserInfoPanel';
import ProductForm from 'components/ProductForm';
import ProductModal from 'components/ProductModal';
import actions from 'redux/actions';

function Detail() {
    const history = useHistory();
    const user = useSelector((state) => state.global.user);
    const products = useSelector((state) => state.global.user.products);
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [isAdd, setIsAdd] = useState(true);
    const [productId, setProductId] = useState(0);
    const [productName, setProductName] = useState('');
    const [productCost, setProductCost] = useState();

    const handleClose = () => setShow(false);
    const showAddModal = () => {
        setShow(true);
        setIsAdd(true);
        setProductId(0);
        setProductName('');
        setProductCost();
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

    const handleRemoveProduct = (id) => () => {};

    useEffect(() => {
        const ccNumber = history.location.pathname.split('/')[2];
        dispatch(actions.readUser(ccNumber));
    }, []);

    if (!user) return null;

    return (
        <div>
            <Box className="p-3 border-bottom">
                <h3 className="d-inline pl-4">
                    {user.first_name} {user.last_name}
                </h3>
            </Box>

            <section className="px-3">
                <UserInfoPanel
                    email={user.email}
                    ccNumber={user.cc_number}
                    ccType={user.cc_type}
                    currency={user.currency}
                    cost={user.cost}
                    className="my-3"
                />
            </section>

            <section className="px-3">
                <Box className="justify-content-between pt-3 pb-1">
                    <h3 className="pl-3">Products</h3>
                    <Button variant="success" onClick={showAddModal}>
                        Add
                    </Button>
                </Box>
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
                            handleRemove={handleRemoveProduct(item.id)}
                        />
                    ))}
            </section>

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
}

export default Detail;
