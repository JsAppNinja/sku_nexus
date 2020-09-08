import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'redux/actions';
import UserList from 'components/UserList';
import SearchBox from 'components/SearchBox';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontFamily: 'sans-serif',
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
}));

const UsersGrid = () => {
    const classes = useStyles();
    const users = useSelector((state) => state.global.users);
    const dispatch = useDispatch();
    const { getAllUsers, searchUser } = actions;

    const searchUsers = (e) => {
        const ccNumber = e.target.value;

        if (ccNumber === '') {
            dispatch(getAllUsers());
        } else {
            dispatch(searchUser(ccNumber));
        }
    };

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    return (
        <div className={classes.root}>
            <Grid container spacing={3} justify="flex-end" alignItems="center">
                <Grid item xs={5}>
                    <Grid
                        container
                        spacing={3}
                        direction="row"
                        alignItems="center"
                    >
                        <Grid item xs={12}>
                            <SearchBox
                                placeholder="Search by CC number"
                                handleChange={searchUsers}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                {users && <UserList users={users} />}
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default UsersGrid;
