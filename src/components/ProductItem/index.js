import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    content: {
        minWidth: 250,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
}));

const ProductItem = ({ name, cost, handleEdit, handleRemove }) => {
    const classes = useStyles();
    return (
        <Card variant="outlined">
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography color="textSecondary">{name}</Typography>
                    <Typography color="textSecondary">{cost}</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="outlined"
                        onClick={handleEdit}
                        size="small"
                    >
                        Edit
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={handleRemove}
                        size="small"
                    >
                        Remove
                    </Button>
                </CardActions>
            </div>
        </Card>
    );
};

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
