import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ProductItem = ({ name, cost, handleEdit, handleRemove }) => (
    <Card variant="outlined">
        <CardContent>
            <Typography color="textSecondary" gutterBottom>
                {name}
            </Typography>
            <Typography variant="body2" component="p">
                {cost}
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant="primary" onClick={handleEdit} size="small">
                Edit
            </Button>
            <Button variant="warning" onClick={handleRemove} size="small">
                Remove
            </Button>
        </CardActions>
    </Card>
);

ProductItem.propTypes = {
    name: PropTypes.string,
    cost: PropTypes.number,
    handleEdit: PropTypes.func,
    handleRemove: PropTypes.func,
};

ProductItem.defaultProps = {
    name: '',
    cost: 0,
    handleEdit: () => {},
    handleRemove: () => {},
};

export default ProductItem;
